import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { Account } from '@type/account';
import AccountsService from '@services/AccountService';
import useHeaderTitleDispatch from './useHeaderTitleDispatch';
import useAccountQueryState from './useAccountQueryState';
import useAccountQueryDispatch from './useAccountQueryDispatch';

function useAccounts(accounts: Account[], initialQuery: Record<string, unknown>) {
  const accountQuery: Record<string, unknown> = useAccountQueryState();
  const { dispatchPage, dispatchLimit, dispatchBrokerId, dispatchStatus, dispatchActivity } = useAccountQueryDispatch();
  const dispatchTitle = useHeaderTitleDispatch();

  const { data } = useQuery(['accounts', accountQuery], () => AccountsService.getAccounts(accountQuery), {
    ...AccountsService.accountsQueryOptions,
    initialData:
      initialQuery &&
      Object.keys(accountQuery) === Object.keys(initialQuery) &&
      Object.keys(accountQuery).every((key) => accountQuery[key] === initialQuery[key])
        ? accounts
        : undefined,
  });

  useEffect(() => {
    dispatchTitle('계좌 목록');
  }, []);

  useEffect(() => {
    if (!initialQuery) {
      return;
    }
    const { page = 1, limit = 30, broker_id = 'all', status = 'all', is_active = 'all' } = initialQuery;
    dispatchPage(Number(page));
    dispatchLimit(Number(limit));
    dispatchBrokerId(String(broker_id));
    dispatchStatus(String(status));
    dispatchActivity(String(is_active));
  }, [initialQuery]);

  return { page: Number(accountQuery.page), limit: Number(accountQuery.limit), dispatchPage, data: data ?? [] };
}

export default useAccounts;
