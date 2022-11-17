import { Account } from '@type/account';
import useAccounts from '@hooks/useAccounts';
import Seo from '@components/Layout/Seo';
import Table from './Table';
import Pagenation from './Pagenation';

type Props = {
  accounts: Account[];
  initialQuery: Record<string, unknown>;
};

function Accounts({ accounts, initialQuery }: Props) {
  const { page, limit, dispatchPage, data } = useAccounts(accounts, initialQuery);

  return (
    <>
      <Seo title="D. PREFACE | 계좌 목록" />
      <Table accounts={data} isSelectBox />
      <Pagenation contents={data} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Accounts;
