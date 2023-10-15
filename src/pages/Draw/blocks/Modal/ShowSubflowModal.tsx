import { Modal, Button, Divider } from 'antd';
import { useModel } from '@umijs/max';

const ShowSubflowModal = () => {
  const { showSubflowItemModal, setShowSubflowItemModal } =
    useModel('useDrawModel');

  const handleClose = () => {
    setShowSubflowItemModal(false);
  };

  return (
    <Modal
      title="查看subflow样式"
      centered
      open={showSubflowItemModal}
      onCancel={handleClose}
      footer={[
        <Button key="close" type="primary" onClick={handleClose}>
          关闭
        </Button>,
      ]}
      okText="关闭"
    >
      <Divider />

      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <Divider />
    </Modal>
  );
};

export default ShowSubflowModal;
