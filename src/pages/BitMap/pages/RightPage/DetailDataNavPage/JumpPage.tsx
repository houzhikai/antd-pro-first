import { Form, Input, Button, message } from 'antd';
import React from 'react';

const JumpPage = () => {
  const onFinish = (values) => {
    message.info(JSON.stringify(values));
  };
  return (
    <Form name="jump" onFinish={onFinish} autoComplete="off">
      <div style={{ display: 'flex', justifyContent: 'end', marginRight: 25 }}>
        <Form.Item label="X" name="X">
          <Input style={{ width: 100, marginRight: 10 }} />
        </Form.Item>

        <Form.Item label="Y" name="Y">
          <Input style={{ width: 100 }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Jump
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default JumpPage;
