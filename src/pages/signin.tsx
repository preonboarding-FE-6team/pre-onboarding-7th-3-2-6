import SigninView from '@components/signin';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { GetServerSideProps } from 'next';

type Props = {
  isExpired: boolean;
};

function Signin({ isExpired }: Props) {
  return <SigninView isExpired={isExpired} />;
}

export default Signin;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  if (token === 'null') {
    res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=;max-age=-1; Path=/`]);
    return {
      props: {
        isExpired: true,
      },
    };
  }

  return { props: {} };
};
