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

const AddSubFlowAttribute = () => {
  const {
    openSubFlowAttributeModal,
    setOpenSubFlowAttributeModal,
    setActiveTestOrFlowItemParams,
    setAddSubFlowList,
    setActiveTestOrFlowItem,
  } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');

  const formRef = useRef<any>(null);
  const [form] = Form.useForm();
  console.log({ openSubFlowAttributeModal });
  // 每次关闭form表单时清除表单数据
  form.setFieldsValue({
    flowName: openSubFlowAttributeModal.param.flowName,
    isMain: openSubFlowAttributeModal.param.isMain,
    isActive: openSubFlowAttributeModal.param.isActive,
    globalVariables: openSubFlowAttributeModal.param.globalVariables,
  });

  const handleOK = async () => {
    setActiveTestOrFlowItemParams(formRef.current.getFieldsValue());
    setNodes(openSubFlowAttributeModal.mainFlowNode);
    setEdges(openSubFlowAttributeModal.mainFlowEdges);
    const xxx = {
      type: 'subflow',
      name: formRef.current.getFieldsValue().flowName,
      param: {
        flowName: formRef.current.getFieldsValue().flowName,
        isMain: openSubFlowAttributeModal.param.isMain,
        isActive: openSubFlowAttributeModal.param.isActive,
        globalVariables: openSubFlowAttributeModal.param.globalVariables,
      },
      mainFlowNode: openSubFlowAttributeModal.mainFlowNode,
      mainFlowEdges: openSubFlowAttributeModal.mainFlowEdges,
    };

    console.log(
      'ok:',
      formRef.current.getFieldsValue(),
      openSubFlowAttributeModal,
      xxx,
    );
    setAddSubFlowList((list) => [...list, xxx]);
    setActiveTestOrFlowItem(formRef.current.getFieldsValue().flowName);

    setOpenSubFlowAttributeModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
    await form.validateFields();
  };

  const handleCancel = () => {
    setOpenSubFlowAttributeModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
  };

  const handleChangeIsMain = (checked) => {
    setOpenSubFlowAttributeModal((obj) => {
      return {
        ...obj,
        param: {
          ...obj.param,
          isMain: checked,
        },
      };
    });
  };
  const handleChangeIsActive = (checked) => {
    setOpenSubFlowAttributeModal((obj) => {
      return {
        ...obj,
        param: {
          ...obj.param,
          isActive: checked,
        },
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
          const newData = openSubFlowAttributeModal.param.globalVariables.map(
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
          setOpenSubFlowAttributeModal((obj: any) => {
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
          const newData = openSubFlowAttributeModal.param.globalVariables.map(
            (item: { param: string; value: string }, idx) => {
              if (index === idx) {
                return {
                  key: index,
                  param: item.param,
                  value: e.target.value,
                };
              }
              return item;
            },
          );
          setOpenSubFlowAttributeModal((obj: any) => {
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
        const handleRemoveRow = (record) => {
          const newData =
            openSubFlowAttributeModal.param.globalVariables.filter(
              (item: any) => item.key !== record.key,
            );
          setOpenSubFlowAttributeModal((obj) => {
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

  const handleAddRows = () => {
    const length = openSubFlowAttributeModal.param.globalVariables.length;
    const newData = {
      key: length,
      param: '',
      value: '',
    };
    setOpenSubFlowAttributeModal((obj: any) => {
      return {
        ...obj,
        param: {
          ...obj.param,
          globalVariables: [...obj.param.globalVariables, newData],
        },
      };
    });
  };
  const values = openSubFlowAttributeModal.param;
  return (
    <Modal
      title="Basic Modal"
      open={openSubFlowAttributeModal.isOpen}
      onOk={handleOK}
      width={700}
      onCancel={handleCancel}
      maskClosable={false}
      centered
    >
      <Divider />
      <Form
        form={form}
        autoComplete="off"
        ref={formRef}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={openSubFlowAttributeModal.values}
        name="test-unit-form"
        style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: 50 }}
      >
        <Form.Item
          name="flowName"
          label="FlowName"
          rules={[{ required: true, message: '不能为空！' }]}
        >
          <Input placeholder="请输入FlowName" allowClear />
        </Form.Item>

        <Form.Item name="isMain" label="IsMain">
          <Switch
            checkedChildren="true"
            unCheckedChildren="false"
            checked={values.isMain}
            onChange={handleChangeIsMain}
          />
        </Form.Item>

        <Form.Item name="isActive" label="IsActive">
          <Switch
            checkedChildren="true"
            unCheckedChildren="false"
            checked={values.isActive}
            onChange={handleChangeIsActive}
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
              dataSource={openSubFlowAttributeModal.param.globalVariables}
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

export default AddSubFlowAttribute;
