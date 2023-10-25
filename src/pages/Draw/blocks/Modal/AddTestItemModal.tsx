import { useModel } from '@umijs/max';

import {
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  message,
  Button,
} from 'antd';
import { useRef } from 'react';

const AddTestItemModal = () => {
  const { addTestItemModal, setAddTestItemModal, setTestUnitData } =
    useModel('useDrawModel');
  const { setNodes } = useModel('useTestFlowModel');

  const formRef = useRef<any>(null);
  const [form] = Form.useForm();
  const handleAddTestItem = async () => {
    try {
      // form校验验证
      await form.validateFields();
      console.log('ok:', formRef.current.getFieldsValue());
      const values = formRef.current.getFieldsValue();
      const newNode = {
        id: `test-method-${values.Name}`,
        type: 'test-method',
        position: { x: 100, y: 100 },
        data: {
          label: values.Name,
        },
        Class: values.Class,
        LoopCount: values.LoopCount,
      };
      setNodes((nds) => nds.concat(newNode)); // 添加到画布中

      setTestUnitData((tesUnitData) =>
        tesUnitData.concat({
          Class: values.Class,
          loopCount: values.LoopCount,
          Name: values.Name,
          key: `test-method-${values.Name}`,
        }),
      );
      message.success('保存成功！');
      setAddTestItemModal(false);
    } catch (error) {
      // console.log(1, error);
      message.error('保存失败！');
    }
  };

  const handleClose = () => {
    setAddTestItemModal(false);
  };
  return (
    <Modal
      title="添加测试项"
      centered
      maskClosable={false}
      open={addTestItemModal}
      onOk={handleAddTestItem}
      onCancel={handleClose}
      footer={[
        <Button key="close" type="primary" onClick={handleAddTestItem}>
          添加
        </Button>,
      ]}
      okText="关闭"
    >
      <Divider />
      {/* <TestUnitList /> */}
      {/* <TestUnitForm /> */}
      <Form
        form={form}
        ref={formRef}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          Class: 'BaseTestItem',
          Name: 'BaseTestItem',
          LoopCount: 1,
        }}
        name="add-test-unit-form"
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
  );
};

export default AddTestItemModal;
