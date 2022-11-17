import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import UsersView from '@components/Users';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { User } from '@type/user';

type Props = {
  users: User[];
  totalLength: string;
};

function Users({ users, totalLength }: Props) {
  return <UsersView users={users} totalLength={totalLength} />;
}

export default Users;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let usersRes;

  try {
    if (urlArray && urlArray.length > 1) {
      usersRes = await axios.get<User[]>(`http://localhost:4000/users?${urlArray[1]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      usersRes = await axios.get<User[]>(`http://localhost:4000/users?_page=1&_limit=30`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=null; Path=/`]);
      return {
        redirect: {
          destination: '/signin',
        },
        props: {},
      };
    }
  }

  return { props: { users: usersRes?.data, totalLength: usersRes?.headers['x-total-count'] } };
};
