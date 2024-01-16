import React from 'react';
import { Button, Divider, Space, Typography, message } from 'antd';
import MyMessage from './MyMessage';

const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  return (
    <div>
      <Typography.Title level={4}>Message Components</Typography.Title>
      <Divider />
      {contextHolder}
      <Space>
        <Button type="primary" onClick={success}>
          Default Button
        </Button>
        <MyMessage buttonType="dashed" text="test message">
          MyMessageComponent
        </MyMessage>
      </Space>
    </div>
  );
};

export default index;
