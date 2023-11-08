import { Button, Input, Popconfirm, Table } from 'antd';
import styles from './index.less';
import { useModel } from '@umijs/max';
import { RightOutlined, DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MainFlowEdit = () => {
  const { nodes } = useModel('useTestFlowModel');
  const {
    activeTestOrFlowItemParams,
    setActiveTestOrFlowItemParams,
    // setOpenGlobalVariablesModal,
  } = useModel('useDrawModel');
  const [isOpen, setIsOpen] = useState(false);

  const selectedNodeItem: any = nodes.filter((item) => item.selected);

  const handleAddRows = () => {
    const newData = {
      key: (Math.random() * 10000).toFixed(0), // 要保证id唯一，且添加/删除时id不能唯一
      param: '',
      value: '',
    };
    setActiveTestOrFlowItemParams((obj) => {
      return {
        ...obj,
        globalVariables: [...obj.globalVariables, newData],
      };
    });

    // const dataSource = values.globalVariables.map((item: any, index) => {
    //   return {
    //     key: `${item.param}-${item.value}.${index}`,
    //     param: item.param,
    //     value: item.value,
    //   };
    // });
    // const params = Object.assign(values, { globalVariables: dataSource });
    // setActiveTestOrFlowItemParams(params);
    // setOpenGlobalVariablesModal({ isOpen: true, values: dataSource });
  };

  // const handleChangeLoopCount = (value) => {
  //   const newData = nodes.map((item) => {
  //     if (item.selected) {
  //       return { ...item, LoopCount: value };
  //     }
  //     return item;
  //   });
  //   setNodes(newData);
  // };

  const columns = [
    {
      key: 'param',
      dataIndex: 'param',
      width: '45%',
      title: (
        <div
          className={styles.globalVariablesTable}
          onClick={() => setIsOpen((c) => !c)}
        >
          {isOpen ? (
            <RightOutlined style={{ width: 10 }} />
          ) : (
            <DownOutlined style={{ width: 10 }} />
          )}
          <span> Param</span>
        </div>
      ),
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData: any = activeTestOrFlowItemParams.globalVariables.map(
            (item: any, idx) => {
              if (index === idx) {
                return {
                  key: item.key,
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
      width: '45%',
      title: (
        <div
          className={styles.globalVariablesTable}
          onClick={() => setIsOpen((c) => !c)}
        >
          Value
        </div>
      ),
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
      dataIndex: 'option',
      width: '10%',
      align: 'center',
      title: (
        <div
          className={styles.globalVariablesTable}
          onClick={() => setIsOpen((c) => !c)}
        >
          Option
        </div>
      ),
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = activeTestOrFlowItemParams.globalVariables.filter(
            (item) => item.key !== record.key,
          );
          setActiveTestOrFlowItemParams((obj) => {
            return {
              ...obj,
              globalVariables: newData,
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
            <Button danger type="link" icon={<DeleteOutlined />} />
          </Popconfirm>
        );
      },
    },
  ];

  const handleChangeFlowName = (e) => {
    setActiveTestOrFlowItemParams((obj) => {
      return {
        ...obj,
        flowName: e.target.value,
      };
    });
  };

  // const handleChangeIsMain = (checked) => {
  //   setActiveTestOrFlowItemParams((obj) => {
  //     return {
  //       ...obj,
  //       isMain: checked,
  //     };
  //   });
  // };

  // const handleChangeIsActive = (checked) => {
  //   setActiveTestOrFlowItemParams((obj) => {
  //     return {
  //       ...obj,
  //       isActive: checked,
  //     };
  //   });
  // };

  return (
    <div>
      {selectedNodeItem.length === 0 ? (
        <>
          <div className={styles.title}>MainFlow：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>FlowName：</label>
            <Input
              placeholder="请输入名称"
              value={activeTestOrFlowItemParams?.flowName}
              onChange={handleChangeFlowName}
            />
          </div>
          {/* 
          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>IsMain：</label>
            <Switch
              checkedChildren="true"
              unCheckedChildren="false"
              checked={activeTestOrFlowItemParams.isMain}
              onChange={handleChangeIsMain}
            />
          </div>

          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>IsActive：</label>
            <Switch
              checkedChildren="true"
              unCheckedChildren="false"
              checked={activeTestOrFlowItemParams?.isActive}
              onChange={handleChangeIsActive}
            />
          </div> */}

          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入 LoopCount"
              min={1}
              controls={false}
              value={1}
              onChange={handleChangeLoopCount}
            />
          </div> */}

          <div className={styles.title}>
            GlobalVariables：
            {/* <Button
              type="link"
              onClick={() => handleClick(activeTestOrFlowItemParams)}
            >
              Open Modal
            </Button> */}
            <Button type="link" onClick={handleAddRows}>
              Add a row
            </Button>
          </div>
          <div className={styles['flow-item']}>
            {/* <label className={styles['flow-label']}>globalVariables：</label> */}
            <Table
              style={{ width: '100%' }}
              className={isOpen ? styles['show-dataSource'] : undefined}
              columns={columns}
              dataSource={activeTestOrFlowItemParams.globalVariables}
              pagination={false}
              bordered
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MainFlowEdit;
