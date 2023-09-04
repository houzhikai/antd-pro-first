import { Modal } from 'antd';
import { useModel } from '@umijs/max';

const AddMainFlowModal = () => {
  const { openMainFlowModal, setOpenMainFlowModal } = useModel('useDrawModel');

  const handleOk = () => {
    setOpenMainFlowModal(false);
  };

  const handleCancel = () => {
    setOpenMainFlowModal(false);
  };
  return (
    <Modal
      title="Main Flow"
      open={openMainFlowModal}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="创建"
      centered
    >
      flow流程图样式列表
    </Modal>
  );
};

export default AddMainFlowModal;
