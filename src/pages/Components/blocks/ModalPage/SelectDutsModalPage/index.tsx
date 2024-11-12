import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import ModalContentPage from './ModalContentPage';

const SelectDutsModalPage = () => {
  const [isSelectDutsModalOpen, setIsSelectDutsModalOpen] = useState(true);
  const showModal = () => {
    setIsSelectDutsModalOpen(true);
  };

  const handleOk = () => {
    setIsSelectDutsModalOpen(false);
  };

  const handleCancel = () => {
    setIsSelectDutsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={showModal}>Open Modal1</Button>
      <Modal
        title="Select Duts List"
        open={isSelectDutsModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Import"
        cancelText="Cancel"
        width="1200px"
      >
        <ModalContentPage />
      </Modal>
    </div>
  );
};

export default SelectDutsModalPage;
