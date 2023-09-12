import { useModel } from '@umijs/max';
import { Modal } from 'antd';
import TestUnitList from './components/TestUnitList';

const TestUnit = () => {
  const { openTestUnitModal, setOpenTestUnitModal } = useModel('useDrawModel');
  const handleCancel = () => {
    setOpenTestUnitModal(false);
  };
  const handleOK = () => {
    setOpenTestUnitModal(false);
  };

  return (
    <div>
      <Modal
        title="Test-Unit List"
        width={1200}
        open={openTestUnitModal}
        onOk={handleOK}
        onCancel={handleCancel}
        okText="保存"
        cancelText="取消"
        maskClosable={false}
        centered
      >
        <TestUnitList />
      </Modal>
    </div>
  );
};

export default TestUnit;
