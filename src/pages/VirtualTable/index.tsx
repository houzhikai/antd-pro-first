import { Access, useAccess } from '@umijs/max';
import VirtualTable from './blocks/VirtualTablePage';

const VirtualTablePage = () => {
  const access = useAccess();
  return (
    <>
      <Access accessible={access.canSeevirtualTable}>
        <VirtualTable />
      </Access>
    </>
  );
};
export default VirtualTablePage;
