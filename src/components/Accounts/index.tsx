import styled from 'styled-components';

import { Account } from '@type/account';
import useAccounts from '@hooks/useAccounts';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import Seo from '@components/Layout/Seo';
import SearchBar from '@components/UI/SearchBar';
import { flexBox } from '@styles/mixins';
import Table from './Table';
import Pagenation from './Pagenation';
import Filters from './Filters';

type Props = {
  accounts: Account[];
  initialQuery: Record<string, unknown>;
  totalLength: string;
};

function Accounts({ accounts, initialQuery, totalLength }: Props) {
  const { page, limit, dispatchPage, data } = useAccounts(accounts, initialQuery);
  const { dispatchSearch } = useAccountQueryDispatch();

  return (
    <>
      <Seo title="D. PREFACE | 계좌 목록" />
      <FilterAndSearch>
        <Filters />
        <SearchBar dispatchSearch={dispatchSearch} />
      </FilterAndSearch>
      <Table accounts={data} />
      <Pagenation contents={data} totalLength={totalLength} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Accounts;

const FilterAndSearch = styled.div`
  ${flexBox('row', 'space-between')};
  margin-bottom: 10px;
`;
