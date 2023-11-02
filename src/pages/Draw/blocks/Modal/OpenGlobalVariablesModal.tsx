import { useModel } from '@umijs/max';
import { Button, Divider, Input, Modal, Popconfirm, Table } from 'antd';
import styles from '../index.less';

const OpenGlobalVariablesModal = () => {
  const {
    openGlobalVariablesModal,
    setOpenGlobalVariablesModal,
    activeTestOrFlowItemParams,
    setActiveTestOrFlowItemParams,
  } = useModel('useDrawModel');

  const handleOk = () => {
    setOpenGlobalVariablesModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
  };
  const handleCancel = () => {
    setOpenGlobalVariablesModal((obj) => {
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
      title: (
        <div className={styles.globalVariablesTable}>
          <span> Param</span>
        </div>
      ),
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData: any = activeTestOrFlowItemParams.globalVariables.map(
            (item: any, idx) => {
              if (index === idx) {
                return {
                  key: `${e.target.value}-${item.value}.${index}`,
                  param: e.target.value,
                  value: item.value,
                };
              }
              return item;
            },
          );
          setActiveTestOrFlowItemParams((obj: any) => {
            return {
              ...obj,
              globalVariables: newData,
            };
          });

          setOpenGlobalVariablesModal((obj) => {
            return {
              ...obj,
              values: newData,
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
      title: <div className={styles.globalVariablesTable}>Value</div>,
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData: any = activeTestOrFlowItemParams.globalVariables.map(
            (item: any, idx) => {
              if (index === idx) {
                return {
                  key: `${item.param}-${e.target.value}.${index}`,
                  param: item.param,
                  value: e.target.value,
                };
              }
              return item;
            },
          );
          setOpenGlobalVariablesModal((obj) => {
            return {
              ...obj,
              values: newData,
            };
          });
          setActiveTestOrFlowItemParams((obj: any) => {
            return {
              ...obj,
              globalVariables: newData,
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
          const newData = openGlobalVariablesModal.values.filter(
            (item: { key: number }) => item.key !== record.key,
          );
          setActiveTestOrFlowItemParams((obj) => {
            return {
              ...obj,
              globalVariables: newData,
            };
          });
          setOpenGlobalVariablesModal((obj: any) => {
            return {
              ...obj,
              values: newData,
            };
          });
        };
        return (
          <Popconfirm
            title="Are you sure to delete item?"
            onConfirm={() => handleRemoveRow(record)}
            okText="OK"
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
    const valuesLength = openGlobalVariablesModal.values.length;
    const newVariablesItem = {
      key: valuesLength,
      param: '',
      value: '',
    };
    const newData = Object.assign(activeTestOrFlowItemParams, {
      globalVariables: [
        ...activeTestOrFlowItemParams.globalVariables,
        newVariablesItem,
      ],
    });
    // setNodes(newData);
    setActiveTestOrFlowItemParams(newData);

    setOpenGlobalVariablesModal((obj: any) => {
      return {
        ...obj,
        values: [...obj.values, newVariablesItem],
      };
    });
  };
  return (
    <Modal
      width={700}
      title="GlobalVariables-Modal"
      maskClosable={false}
      open={openGlobalVariablesModal.isOpen}
      okText="save"
      cancelText="cancel"
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true} // 关闭时销毁 Modal 里的子元素，关闭时相当于取消form的更改
      centered
    >
      <Divider />
      <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <div className={styles['variablesModal-header']}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>GlobalVariables</div>
          <Button type="primary" size="middle" onClick={handleAddRows}>
            Add a Row
          </Button>
        </div>
        <Table
          className={styles['table']}
          columns={columns}
          dataSource={openGlobalVariablesModal.values}
          pagination={false}
          bordered
        />
      </div>
    </Modal>
  );
};

export default OpenGlobalVariablesModal;
