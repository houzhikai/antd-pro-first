import { Button, Input, Table } from 'antd';
import styles from './index.less';
import { useModel } from '@umijs/max';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MainFlowEdit = () => {
  const { nodes } = useModel('useTestFlowModel');
  const {
    activeTestOrFlowItemParams,
    setActiveTestOrFlowItemParams,
    setOpenGlobalVariablesModal,
  } = useModel('useDrawModel');
  const [isOpen, setIsOpen] = useState(false);

  const selectedNodeItem: any = nodes.filter((item) => item.selected);

  const handleClick = (values) => {
    const dataSource = values.globalVariables.map((item: any, index) => {
      return {
        key: `${item.param}-${item.value}.${index}`,
        param: item.param,
        value: item.value,
      };
    });
    const params = Object.assign(values, { globalVariables: dataSource });
    setActiveTestOrFlowItemParams(params);
    setOpenGlobalVariablesModal({ isOpen: true, values: dataSource });
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
      width: '50%',
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
      width: '50%',
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
                  key: `${item.param}-${e.target.value}.${index}`,
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
            <Button
              type="link"
              onClick={() => handleClick(activeTestOrFlowItemParams)}
            >
              Open Modal
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
