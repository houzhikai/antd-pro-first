import { useModel } from '@umijs/max';
import styles from './index.less';
import { InputNumber } from 'antd';

const SubflowNode = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');

  const selectedNodeItem: any = nodes.filter((item) => item.selected)[0];
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
