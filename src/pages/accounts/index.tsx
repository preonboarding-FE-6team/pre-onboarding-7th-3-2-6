import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountsView from '@components/Accounts';
import { Account } from '@type/account';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import useExpiredToken from '@hooks/useExpiredToken';
import getQueryString from '@utils/getQueryString';
import AccountsService from '@services/AccountService';

type Props = {
  accounts: Account[];
  initialQuery: Record<string, unknown>;
  totalLength: string;
  isExpired?: boolean;
};

function Accounts({ accounts, initialQuery, totalLength, isExpired }: Props) {
  useExpiredToken(isExpired);

  return <AccountsView accounts={accounts} initialQuery={initialQuery} totalLength={totalLength} />;
}

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const { page = 1, limit = 30, ...restQuery } = query;
  const initialQuery = { page, limit, ...restQuery };
  let accountsRes;

  try {
    accountsRes = await axios.get<Account[]>(
      `http://localhost:4000/accounts?${getQueryString(initialQuery, AccountsService.accountsQueryConverter)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return {
        props: {
          accounts: [],
          isExpired: true,
        },
      };
    }
  }

  return {
    props: { accounts: accountsRes?.data ?? [], initialQuery, totalLength: accountsRes?.headers['x-total-count'] },
  };
};
