import { Access, useAccess } from '@umijs/max';

const VirtualTable = () => {
  const access = useAccess();
  return (
    <>
      <Access accessible={access.canSeevirtualTable}>1111</Access>
    </>
  );
};
export default VirtualTable;
