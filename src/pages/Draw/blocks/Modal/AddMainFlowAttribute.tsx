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
} from 'antd';
import { useRef } from 'react';

const AddMainFlowAttribute = () => {
  const {
    openMainFlowAttributeModal,
    setOpenMainFlowAttributeModal,
    setActiveTestOrFlowItemParams,
    setAddMainFlowList,
    setActiveTestOrFlowItem,
    mainflowList, // 左侧测试项列表，支持增删改查的修改
  } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');

  const formRef = useRef<any>(null);
  const [form] = Form.useForm();
  // 每次关闭form表单时清除表单数据
  form.setFieldsValue({
    flowName: openMainFlowAttributeModal.param.flowName,
    isMain: openMainFlowAttributeModal.param.isMain,
    isActive: openMainFlowAttributeModal.param.isActive,
    globalVariables: openMainFlowAttributeModal.param.globalVariables,
  });

  const handleOK = async () => {
    await form.validateFields();
    setActiveTestOrFlowItemParams(formRef.current.getFieldsValue());
    setNodes(openMainFlowAttributeModal.mainFlowNode);
    setEdges(openMainFlowAttributeModal.mainFlowEdges);
    const xxx = {
      type: 'mainflow',
      name: formRef.current.getFieldsValue().flowName,
      param: {
        flowName: formRef.current.getFieldsValue().flowName,
        isMain: openMainFlowAttributeModal.param.isMain,
        isActive: openMainFlowAttributeModal.param.isActive,
        globalVariables: openMainFlowAttributeModal.param.globalVariables,
      },
      mainFlowNode: openMainFlowAttributeModal.mainFlowNode,
      mainFlowEdges: openMainFlowAttributeModal.mainFlowEdges,
    };

    console.log(
      'ok:',
      formRef.current.getFieldsValue(),
      openMainFlowAttributeModal,
      xxx,
    );

    setAddMainFlowList((list) => [...list, xxx]);
    setActiveTestOrFlowItem(formRef.current.getFieldsValue().flowName);

    setOpenMainFlowAttributeModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
  };
  const handleCancel = () => {
    setOpenMainFlowAttributeModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
  };

  const columns = [
    {
      key: 'param',
      dataIndex: 'param',
      width: '40%',
      title: 'Param',
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData = openMainFlowAttributeModal.param.globalVariables.map(
            (item: { param: string; value: string }, idx) => {
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
          setOpenMainFlowAttributeModal((obj: any) => {
            return {
              ...obj,
              param: {
                ...obj.param,
                globalVariables: newData,
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
          const newData = openMainFlowAttributeModal.param.globalVariables.map(
            (item: { param: string; value: string }, idx) => {
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
          setOpenMainFlowAttributeModal((obj: any) => {
            return {
              ...obj,
              param: {
                ...obj.param,
                globalVariables: newData,
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
        const handleRemoveRow = async (record) => {
          const newData =
            openMainFlowAttributeModal.param.globalVariables.filter(
              (item: any) => item.key !== record.key,
            );
          let formValues = await form.validateFields();
          setOpenMainFlowAttributeModal((obj) => {
            return {
              ...obj,
              name: formValues.flowName,
              param: {
                ...obj.param,
                flowName: formValues.flowName,
                isMain: formValues.isMain,
                isActive: formValues.isActive,
                globalVariables: newData,
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
    const length = openMainFlowAttributeModal.param.globalVariables.length;
    const newData = {
      key: length,
      param: '',
      value: '',
    };
    let formValues = await form.validateFields();
    setOpenMainFlowAttributeModal((obj: any) => {
      return {
        ...obj,
        name: formValues.flowName,
        param: {
          ...obj.param,
          flowName: formValues.flowName,
          isMain: formValues.isMain,
          isActive: formValues.isActive,
          globalVariables: [...obj.param.globalVariables, newData],
        },
      };
    });
  };
  const validatorFlowName = (rule, value) => {
    const mainflowNameList = mainflowList.map((item) => item.name);
    return new Promise((resolve, reject) => {
      if (mainflowNameList.includes(value)) {
        reject(new Error('FlowName repeat'));
      } else {
        resolve(value);
      }
    });
  };
  const values = openMainFlowAttributeModal.param;
  return (
    <Modal
      title="Mainflow Attribute"
      open={openMainFlowAttributeModal.isOpen}
      onOk={handleOK}
      width={700}
      onCancel={handleCancel}
      maskClosable={false}
      centered
      destroyOnClose={true}
    >
      <Divider />
      <Form
        form={form}
        autoComplete="off"
        ref={formRef}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={values}
        name="test-unit-form"
        style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: 50 }}
      >
        <Form.Item
          name="flowName"
          label="FlowName"
          rules={[
            { required: true, message: '不能为空！' },
            { validator: validatorFlowName },
          ]}
        >
          <Input placeholder="请输入FlowName" allowClear />
        </Form.Item>

        <Form.Item name="isMain" label="IsMain">
          <Switch
            checkedChildren="true"
            unCheckedChildren="false"
            defaultChecked={values.isMain}
          />
        </Form.Item>

        <Form.Item name="isActive" label="IsActive">
          <Switch
            checkedChildren="true"
            unCheckedChildren="false"
            defaultChecked={values.isActive}
          />
        </Form.Item>

        <Form.Item name="globalVariables" label="GlobalVariables" shouldUpdate>
          <div>
            <Button type="link" onClick={handleAddRows}>
              Add a row
            </Button>
            <Table
              columns={columns}
              rowKey="key"
              dataSource={openMainFlowAttributeModal.param.globalVariables}
              pagination={false}
              bordered
            />
          </div>
        </Form.Item>
      </Form>
      <Divider />
    </Modal>
  );
};

export default AddMainFlowAttribute;
