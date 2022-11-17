import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountsView from '@components/Accounts';
import { Account } from '@type/account';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import useExpiredToken from '@hooks/useExpiredToken';
import getQueryString from '@utils/getQueryString';
import AccountsService from '@services/AccountService';
import { dehydrate, QueryClient } from '@tanstack/react-query';

type Props = {
  isExpired?: boolean;
};

function Accounts({ isExpired }: Props) {
  useExpiredToken(isExpired);

  return <AccountsView />;
}

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const { page, limit, broker_id: brokerId = 'all', status = 'all', is_active: isActive = 'all', search = '' } = query;
  const initialQuery = { page: Number(page) || 1, limit: Number(limit) || 30, brokerId, status, isActive, search };
  const queryClient = new QueryClient();

  const queryFn = async () => {
    const { data, headers } = await axios.get<Account[]>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?${getQueryString(
        initialQuery,
        AccountsService.accountsQueryConverter
      )}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { data, totalLength: Number(headers?.['x-total-count'] ?? 0) };
  };

  try {
    await queryClient.prefetchQuery(['accounts', initialQuery], queryFn);
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return {
        props: {
          isExpired: true,
        },
      };
    }
  }

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
