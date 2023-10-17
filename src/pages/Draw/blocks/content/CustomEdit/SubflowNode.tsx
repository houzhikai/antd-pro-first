import { useModel } from '@umijs/max';
import styles from './index.less';
import { Input, InputNumber, Select } from 'antd';
import { useEffect, useState } from 'react';

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
  const handleChangeLoopCount = (value) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        return { ...item, LoopCount: value };
      }
      return item;
    });
    setNodes(newData);
  };
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
  console.log({ selectedNodeItem, selectedNode });
  return (
    <div>
      {selectedNodeItem?.selected && selectedNodeItem.type === 'subflow' ? (
        <>
          <div className={styles.title}>Subflow：</div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Name：</label>
            <Input
              style={{ width: '100%' }}
              placeholder="请输入名称"
              value={selectedNode.Name}
              onChange={handleChangeName}
              onPressEnter={handleEntry}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>TestNumber：</label>
            <Input
              style={{ width: '100%' }}
              placeholder="请输入名称"
              value={selectedNode.TestNumber}
              onChange={handleChangeName}
              onPressEnter={handleEntry}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>TestNumber：</label>
            <Select style={{ width: '100%' }} />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入名称"
              min={1}
              controls={false}
              value={selectedNodeItem.LoopCount}
              onChange={handleChangeLoopCount}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SubflowNode;
