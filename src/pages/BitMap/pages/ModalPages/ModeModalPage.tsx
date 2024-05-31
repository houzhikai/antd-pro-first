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
      title="Custom Mode List"
      open={modeModalObj.open}
      footer={(_, { OkBtn }) => (
        <>
          <OkBtn />
        </>
      )}
      okText="Close"
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
