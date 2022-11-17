import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import UsersView from '@components/Users';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { User } from '@type/user';
import useExpiredToken from '@hooks/useExpiredToken';

type Props = {
  users: User[];
  totalLength: string;
  isExpired?: boolean;
};

function Users({ users, isExpired, totalLength }: Props) {
  useExpiredToken(isExpired);

  return <UsersView users={users} totalLength={totalLength} />;
}

export default Users;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let res;

  try {
    if (urlArray && urlArray.length > 1) {
      res = await axios.get<User[]>(`http://localhost:4000/users?${urlArray[1]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      res = await axios.get<User[]>(`http://localhost:4000/users?_page=1&_limit=30`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return {
        props: {
          users: [],
          isExpired: true,
        },
      };
    }
  }

  return { props: { users: res?.data, totalLength: res?.headers['x-total-count'] } };
};
