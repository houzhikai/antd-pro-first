import { Input, InputNumber, Switch } from 'antd';
import styles from './index.less';
import { useModel } from '@umijs/max';

const MainFlowEdit = () => {
  const { startNodeName } = useModel('useTestFlowModel');
  return (
    <div>
      <div className={styles.title}>MainFlow：</div>
      <div className={styles['flow-item']}>
        <label className={styles['flow-label']}>Name：</label>
        <Input placeholder="请输入名称" defaultValue="test1" />
      </div>

      <div className={styles['flow-item']}>
        <label className={styles['flow-label']}>LoopCount：</label>
        <InputNumber
          style={{ width: '100%' }}
          placeholder="请输入名称"
          defaultValue={1}
          min={1}
          controls={false}
          //   value={nodeName}
          //   onChange={(evt) => setNodeName(evt.target.value)}
        />
      </div>
      <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
        <label className={styles['flow-label']}>Active：</label>
        <Switch
          defaultChecked
          checkedChildren="true"
          unCheckedChildren="false"
        />
      </div>

      <div className={styles['flow-item']}>
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
      </div>
    </div>
  );
};

export default MainFlowEdit;
