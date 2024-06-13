import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { ProviderFunc } from '../../../../components/containers';

const JumpPage = () => {
  const { setJumpAddress } = ProviderFunc();
  const onFinish = (values) => {
    message.info(JSON.stringify(values));
    setJumpAddress(values);
  };
  return (
    <div style={{ display: 'flex' }}>
      <Form name='jump' onFinish={onFinish} autoComplete='off'>
        <div style={{ display: 'flex', justifyContent: 'end', marginRight: 25 }}>
          <Form.Item label='X' name='X'>
            <Input style={{ width: 100, marginRight: 10 }} />
          </Form.Item>

          <Form.Item label='Y' name='Y'>
            <Input style={{ width: 100 }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Go
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default JumpPage;
