import { useModel } from '@umijs/max';
import styles from './index.less';
import { Input, InputNumber, Switch, Table } from 'antd';
import { useEffect, useState } from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';

const SubflowNode = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');

  const selectedNodeItem: any = nodes.filter((item) => item.selected)[0];
  const [selectedNode, setSelectedNode] = useState({
    Name: selectedNodeItem?.data?.label,
    TestNumber: selectedNodeItem?.TestNumber,
  });
  useEffect(() => {
    setSelectedNode({
      Name: selectedNodeItem?.data?.label,
      TestNumber: selectedNodeItem?.TestNumber,
    });
  }, [selectedNodeItem]);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((c) => !c);
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
          <span> param</span>
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
          value
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
  // const handleChangeLoopCount = (value) => {
  //   const newData = nodes.map((item) => {
  //     if (item.selected) {
  //       return { ...item, LoopCount: value };
  //     }
  //     return item;
  //   });
  //   setNodes(newData);
  // };

  const handleChangeName = (e) => {
    setSelectedNode((obj) => {
      return {
        ...obj,
        Name: e.target.value,
      };
    });
  };

  const handleEntry = (e) => {
    setNodes((node) =>
      node.map((item) => {
        if (item.selected) {
          return { ...item, data: { label: e.target.value } };
        }
        return item;
      }),
    );
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
  return (
    <div>
      {selectedNodeItem?.selected && selectedNodeItem.type === 'subflow' ? (
        <>
          <div className={styles.title}>Subflow：</div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>FlowName：</label>
            <Input
              style={{ width: '100%' }}
              placeholder="请输入名称"
              value={selectedNode.Name}
              onChange={handleChangeName}
              onPressEnter={handleEntry}
            />
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
              value={selectedNodeItem.LoopCount}
              onChange={handleChangeLoopCount}
            />
          </div>

          <div className={styles.title}>Variables：</div>
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

          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>TestNumber：</label>
            <Input
              style={{ width: '100%' }}
              placeholder="请输入名称"
              value={selectedNode.TestNumber}
              onChange={handleChangeName}
              onPressEnter={handleEntry}
            />
          </div> */}

          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>TestNumber：</label>
            <Select style={{ width: '100%' }} />
          </div> */}

          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入名称"
              min={1}
              controls={false}
              value={selectedNodeItem.LoopCount}
              onChange={handleChangeLoopCount}
            /> 
          </div> */}
        </>
      ) : null}
    </div>
  );
};

export default SubflowNode;
