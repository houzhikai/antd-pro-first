import { Modal } from 'antd';
import { ProviderFunc } from '../../components/containers';
// import LogicalTagsList from './components/LogicalTagsList';
import PhysicalTagList from './components/PhysicalTagList';

const ModeModalPage = () => {
  const { modeModalObj, setModeModalObj } = ProviderFunc();

  const handleOk = () => {
    setModeModalObj((obj) => ({ ...obj, open: false }));
  };

  const handleCancel = () => {
    setModeModalObj((obj) => ({ ...obj, open: false }));
  };

  return (
    <Modal
      width={1200}
      title="Custom Mode List"
      open={modeModalObj.open}
      okText="Save"
      cancelText="Cancel"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {/* <LogicalTagsList /> */}
      <PhysicalTagList />
      {/* <LogicalFormPage />
      <PhysicalFormPage /> */}
    </Modal>
  );
};

export default ModeModalPage;
