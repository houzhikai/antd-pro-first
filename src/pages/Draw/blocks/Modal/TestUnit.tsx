import { useModel } from '@umijs/max';
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Popconfirm,
  Switch,
  Table,
  message,
} from 'antd';
import { useRef } from 'react';
// import TestUnitList from './components/TestUnitList';
// import TestUnitForm from './TestUnitForm';

let id = 999;
const getId = () => `${id++}`;
const TestUnit = () => {
  const {
    openTestUnitModal,
    setOpenTestUnitModal,
    setAddTestUnitList,
    testUnitData,
    setTestUnitData,
  } = useModel('useDrawModel');

  const formRef = useRef<any>(null);
  const [form] = Form.useForm();
  // 每次关闭form表单时清除表单数据
  form.setFieldsValue({
    key: openTestUnitModal.values.key,
    testMethod: openTestUnitModal.values.testMethod,
    isFlowUnit: openTestUnitModal.values.isFlowUnit,
    isStartUnit: openTestUnitModal.values.isStartUnit,
    name: openTestUnitModal.values.name,
    number: openTestUnitModal.values.number,
    loopCount: openTestUnitModal.values.loopCount,
    targetFlowName: openTestUnitModal.values.targetFlowName,
    variables: openTestUnitModal.values.variables,
  });

  const handleCancel = () => {
    setOpenTestUnitModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
  };
  const handleOK = async () => {
    try {
      // form校验验证
      await form.validateFields();
      if (openTestUnitModal.param === 'add') {
        const values = formRef.current.getFieldsValue();
        const number = getId();
        const testUnitList = Object.assign({}, values, { key: Number(number) });

        setAddTestUnitList((list) => [...list, testUnitList]);
      } else {
        const values = formRef.current.getFieldsValue();
        const newTestUnitDataList: any = testUnitData.map((item) => {
          if (item.testMethod === openTestUnitModal.values.testMethod) {
            return {
              testMethod: values.testMethod,
              isFlowUnit: values.isFlowUnit,
              isStartUnit: values.isStartUnit,
              name: values.name,
              number: values.number,
              targetFlowName: values.targetFlowName,
              variables: values.variables,
            };
          }
          return item;
        });
        setTestUnitData(newTestUnitDataList);
      }
      setOpenTestUnitModal((obj) => {
        return {
          ...obj,
          isOpen: false,
        };
      });
      message.success('保存成功！');
    } catch (error) {
      message.error('保存失败！');
    }
  };

  const columns = [
    {
      key: 'param',
      dataIndex: 'param',
      width: '40%',
      title: 'Param',
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData = openTestUnitModal.values.variables.map(
            (item, idx) => {
              if (index === idx) {
                return {
                  key: `${e.target.value}.${index}`,
                  param: e.target.value,
                  value: item.value,
                };
              }
              return item;
            },
          );
          setOpenTestUnitModal((obj: any) => {
            return {
              ...obj,
              values: {
                ...obj.values,
                variables: newData,
              },
            };
          });
        };
        return (
          <Input
            defaultValue={record.param}
            onPressEnter={handlePressEnter}
            onBlur={handlePressEnter}
            bordered={false}
          />
        );
      },
    },
    {
      key: 'value',
      dataIndex: 'value',
      width: '40%',
      title: 'Value',
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData = openTestUnitModal.values.variables.map(
            (item, idx) => {
              if (index === idx) {
                return {
                  key: `${item.param}.${index}`,
                  param: item.param,
                  value: e.target.value,
                };
              }
              return item;
            },
          );
          setOpenTestUnitModal((obj: any) => {
            return {
              ...obj,
              values: {
                ...obj.values,
                variables: newData,
              },
            };
          });
        };
        return (
          <Input
            defaultValue={record.value}
            onPressEnter={handlePressEnter}
            onBlur={handlePressEnter}
            bordered={false}
          />
        );
      },
    },
    {
      key: 'option',
      title: 'Options',
      align: 'center',
      width: '12%',
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = openTestUnitModal.values.variables.filter(
            (item: any) => item.key !== record.key,
          );
          setOpenTestUnitModal((obj) => {
            return {
              ...obj,
              values: {
                ...obj.values,
                variables: newData,
              },
            };
          });
        };
        return (
          <Popconfirm
            title="Are you sure to delete this item?"
            onConfirm={() => handleRemoveRow(record)}
            okText="yes"
            cancelText="cancel"
          >
            <Button style={{ margin: '5px 0' }} type="link">
              delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const handleAddRows = async () => {
    const length = openTestUnitModal.values.variables.length;
    const newData = {
      key: length,
      param: '',
      value: '',
    };
    const testUnit = await form.validateFields();
    setOpenTestUnitModal((obj) => {
      return {
        ...obj,
        values: {
          ...obj.values,
          testMethod: testUnit.testMethod,
          isFlowUnit: testUnit.isFlowUnit,
          isStartUnit: testUnit.isStartUnit,
          loopCount: String(testUnit.loopCount),
          name: testUnit.name,
          number: testUnit.number,
          targetFlowName: testUnit.targetFlowName,
          variables: [...obj.values.variables, newData],
        },
      };
    });
  };

  const values = openTestUnitModal.values;

  return (
    <div>
      <Modal
        title={
          openTestUnitModal.param === 'edit'
            ? 'Edit Test-Unit'
            : 'Add Test-Unit'
        }
        width={700}
        open={openTestUnitModal.isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
        okText="save"
        cancelText="cancel"
        maskClosable={false}
        centered
        destroyOnClose
      >
        <Divider />
        {/* <TestUnitList /> */}
        {/* <TestUnitForm /> */}
        <Form
          form={form}
          autoComplete="off"
          ref={formRef}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={openTestUnitModal.values}
          name="test-unit-form"
          style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: 50 }}
        >
          <Form.Item
            name="testMethod"
            label="TestMethod"
            rules={[{ required: true, message: '不能为空！' }]}
          >
            <Input
              placeholder="请输入TestMethod"
              allowClear
              value={values.testMethod}
            />
          </Form.Item>

          <Form.Item name="isFlowUnit" label="IsFlowUnit">
            <Switch
              checkedChildren="true"
              unCheckedChildren="false"
              defaultChecked={values.isFlowUnit}
            />
          </Form.Item>

          <Form.Item
            name="isStartUnit"
            label="IsStartUnit"
            // valuePropName={values.isStartUnit === false ? 'checked' : undefined}
          >
            <Switch
              checkedChildren="true"
              unCheckedChildren="false"
              defaultChecked={values.isStartUnit}
            />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: '不能为空！' }]}
          >
            <Input placeholder="请输入Name" allowClear value={values.name} />
          </Form.Item>

          <Form.Item
            name="number"
            label="Number"
            rules={[{ required: true, message: '不能为空！' }]}
          >
            <Input placeholder="请输入Name" allowClear value={values.number} />
          </Form.Item>

          {/* <Form.Item
            name="loopCount"
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
              value={values.loopCount}
            />
          </Form.Item> */}

          <Form.Item name="targetFlowName" label="TargetFlowName">
            <Input
              placeholder="请输入TargetFlowName"
              allowClear
              value={values.targetFlowName}
            />
          </Form.Item>

          <Form.Item name="variables" label="Variables" shouldUpdate>
            <div>
              <Button type="link" onClick={handleAddRows}>
                Add a row
              </Button>
              <Table
                columns={columns}
                rowKey="key"
                dataSource={values.variables}
                pagination={false}
                bordered
              />
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TestUnit;
