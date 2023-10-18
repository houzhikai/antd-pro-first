import { Input, InputNumber, Switch, Table } from 'antd';
import styles from './index.less';
import { useModel } from '@umijs/max';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MainFlowEdit = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');
  const [isOpen, setIsOpen] = useState(false);

  const selectedNodeItem: any = nodes.filter((item) => item.selected);

  const handleClick = () => {
    setIsOpen((c) => !c);
  };

  const handleChangeLoopCount = (value) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        return { ...item, LoopCount: value };
      }
      return item;
    });
    setNodes(newData);
  };

  const columns = [
    {
      key: 'param',
      dataIndex: 'param',
      width: '50%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          {isOpen ? (
            <RightOutlined style={{ width: 10 }} />
          ) : (
            <DownOutlined style={{ width: 10 }} />
          )}
          <span> Param</span>
        </div>
      ),
      render: (text) => {
        const handleChange = (e) => {
          console.log(e.target.value);
        };
        return <Input value={text} onChange={handleChange} bordered={false} />;
      },
    },
    {
      key: 'value',
      dataIndex: 'value',
      width: '50%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          Value
        </div>
      ),
      render: (text) => {
        return <Input value={text} bordered={false} />;
      },
    },
  ];

  const dataSource = [
    { param: 'Vaa', value: '3', key: 0 },
    { param: 'Vhh', value: '3.5', key: 1 },
    { param: 'Load_from_File', value: '111', key: 2 },
  ];

  return (
    <div>
      {selectedNodeItem.length === 0 ? (
        <>
          <div className={styles.title}>MainFlow：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>FlowName：</label>
            <Input placeholder="请输入名称" defaultValue="test1" />
          </div>

          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>IsMain：</label>
            <Switch
              defaultChecked
              checkedChildren="true"
              unCheckedChildren="false"
            />
          </div>

          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>IsActive：</label>
            <Switch
              defaultChecked
              checkedChildren="true"
              unCheckedChildren="false"
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入 LoopCount"
              min={1}
              controls={false}
              value={1}
              onChange={handleChangeLoopCount}
            />
          </div>

          <div className={styles.title}>GlobalVariables：</div>
          <div className={styles['flow-item']}>
            {/* <label className={styles['flow-label']}>globalVariables：</label> */}
            <Table
              style={{ width: '100%' }}
              className={isOpen ? styles['show-dataSource'] : undefined}
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              bordered
            />
          </div>
        </>
      ) : null}

      {/* <div className={styles['flow-item']}>
        <label className={styles['flow-label']}>Start node：</label>
        <Input
          disabled
          placeholder="There is no start node"
          value={startNodeName}
        />
      </div>
      <div className={styles['flow-item']}>
        <label className={styles['flow-label']}>End node：</label>
        <Input placeholder="There is no end node" defaultValue="" />
      </div>*/}
    </div>
  );
};

export default MainFlowEdit;
