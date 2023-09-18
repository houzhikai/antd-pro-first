import { Input, InputNumber, Switch } from 'antd';
import styles from './index.less';

const MainFlowEdit = () => {
  return (
    <div>
      <div className={styles.title}>MainFlow：</div>
      <div className={styles['flow-item']}>
        <label className={styles['flow-label']}>测试流name：</label>
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
        <label className={styles['flow-label']}>开始节点：</label>
        <Input placeholder="暂无开始节点" defaultValue="" />
      </div>
      <div className={styles['flow-item']}>
        <label className={styles['flow-label']}>结束节点：</label>
        <Input placeholder="暂无结束节点" defaultValue="" />
      </div>
    </div>
  );
};

export default MainFlowEdit;
