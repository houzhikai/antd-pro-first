import { useState } from 'react';
import { Button, Modal } from 'antd';
import { ProviderFunc } from '../commons/containers';

const TestPageModal = () => {
  const [loading, setLoading] = useState(false);
  const { value, setValue } = ProviderFunc();

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setValue(false);
    }, 3000);
  };

  const handleCancel = () => {
    setValue(false);
  };

  return (
    <Modal
      open={value}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Submit
        </Button>,
        <Button
          key="link"
          href="https://google.com"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Search on Google
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default TestPageModal;
