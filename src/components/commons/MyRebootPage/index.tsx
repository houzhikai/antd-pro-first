import React, { useState } from 'react';
import { Button, Checkbox, Modal } from 'antd';

interface MyRebootPageProps {
  title?: string;
  onConfirm?: any;
  label?: string;
  disabled?: boolean;
}
const MyRebootPage = ({
  title = 'Reboot',
  onConfirm,
  label = 'Reboot',
  disabled = false,
}: MyRebootPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onConfirm();
    setIsModalOpen(false);
    setIsChecked(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsChecked(false);
  };

  return (
    <>
      <Button disabled={disabled} type="primary" onClick={showModal}>
        {label}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        maskClosable={false}
        destroyOnClose={true}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            取消
          </Button>,
          <Button
            disabled={!isChecked}
            key="onConfirm"
            type="primary"
            onClick={handleOk}
          >
            确定
          </Button>,
        ]}
      >
        <Checkbox
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        >
          勾选后点击确定重启整机
        </Checkbox>
      </Modal>
    </>
  );
};

export default MyRebootPage;
