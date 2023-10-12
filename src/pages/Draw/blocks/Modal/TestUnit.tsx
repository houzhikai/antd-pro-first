import { useModel } from '@umijs/max';
import { Divider, Form, Input, InputNumber, Modal, message } from 'antd';
import { useRef } from 'react';
// import TestUnitList from './components/TestUnitList';
// import TestUnitForm from './TestUnitForm';

const TestUnit = () => {
  const { openTestUnitModal, setOpenTestUnitModal } = useModel('useDrawModel');

  const formRef = useRef<any>(null);
  const [form] = Form.useForm();
  const handleCancel = () => {
    setOpenTestUnitModal(false);
  };
  const handleOK = async () => {
    try {
      // form校验验证
      await form.validateFields();
      setOpenTestUnitModal(false);
      console.log('ok:', formRef.current.getFieldsValue());
      message.success('保存成功！');
    } catch (error) {
      // console.log(1, error);
      message.error('保存失败！');
    }
  };

  return (
    <div>
      <Modal
        title="Add Test-Unit"
        width={700}
        open={openTestUnitModal}
        onOk={handleOK}
        onCancel={handleCancel}
        okText="保存"
        cancelText="取消"
        maskClosable={false}
        centered
      >
        <Divider />
        {/* <TestUnitList /> */}
        {/* <TestUnitForm /> */}
        <Form
          form={form}
          ref={formRef}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ LoopCount: 1 }}
          name="test-unit-form"
          style={{ maxWidth: 400 }}
        >
          <Form.Item
            name="Class"
            label="Class"
            rules={[{ required: true, message: '不能为空！' }]}
          >
            <Input placeholder="请输入Class" />
          </Form.Item>
          <Form.Item
            name="Name"
            label="Name"
            rules={[{ required: true, message: '不能为空！' }]}
          >
            <Input placeholder="请输入Name" />
          </Form.Item>
          <Form.Item
            name="LoopCount"
            label="LoopCount"
            rules={[
              { required: true, message: '不能为空！' },
              { type: 'number', message: '请输入数字' },
            ]}
          >
            <InputNumber
              style={{ width: '100%' }}
              controls={false}
              placeholder="请输入LoopCount"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TestUnit;
