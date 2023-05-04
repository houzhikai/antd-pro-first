// import { Access, useAccess } from '@umijs/max';
import ActionBar from '../Table/blocks/ActionBar';
import VirtualTable from './blocks/VirtualTable';

const VirtualTablePage = () => {
  //   const access = useAccess();
  return (
    <>
      {/* 没有权限的话不会展示组件内容 */}
      {/* <Access accessible={access.canSeevirtualTable}> */}
      <VirtualTable />
      <ActionBar />
      {/* </Access> */}
    </>
  );
};
export default VirtualTablePage;
