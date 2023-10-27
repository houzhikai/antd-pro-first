import { useModel } from '@umijs/max';
import { Button, Divider, Input, Modal, Popconfirm, Table } from 'antd';
import styles from '../index.less';
import { useEffect, useState } from 'react';

const OpenVariablesModal = () => {
  const {
    openVariablesModal,
    setOpenVariablesModal,
    activeTestOrFlowItemParams,
    setActiveTestOrFlowItemParams,
  } = useModel('useDrawModel');
  const [value, setValue] = useState(openVariablesModal.values);

  useEffect(() => {
    setValue(openVariablesModal.values);
  }, [openVariablesModal]);

  const handleOk = () => {
    setOpenVariablesModal((obj) => {
      return {
        ...obj,
        isOpen: false,
        values: value,
      };
    });
  };
  const handleCancel = () => {
    setOpenVariablesModal((obj) => {
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
                  key: `${e.target.value}.${index}`,
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
                  key: item.key,
                  param: item.param,
                  value: e.target.value,
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
          const newData = activeTestOrFlowItemParams.globalVariables.filter(
            (item: { key: number }) => item.key !== record.key,
          );
          setActiveTestOrFlowItemParams((obj: any) => {
            return {
              ...obj,
              globalVariables: newData,
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
    const valuesLength = activeTestOrFlowItemParams.globalVariables.length;
    const newData = {
      key: valuesLength,
      param: '',
      value: '',
    };
    setActiveTestOrFlowItemParams((obj: any) => {
      return {
        ...obj,
        globalVariables: [...obj.globalVariables, newData],
      };
    });
  };
  return (
    <Modal
      width={700}
      title="VariablesModal"
      maskClosable={false}
      open={openVariablesModal.isOpen}
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
          <div style={{ fontSize: 16, fontWeight: 600 }}>Variables</div>
          <Button type="primary" size="middle" onClick={handleAddRows}>
            Add a Row
          </Button>
        </div>
        <Table
          className={styles['table']}
          columns={columns}
          dataSource={activeTestOrFlowItemParams.globalVariables}
          pagination={false}
          bordered
        />
      </div>
    </Modal>
  );
};

export default OpenVariablesModal;
