import { Input, InputNumber, Switch } from 'antd';
import styles from './index.less';

const MainFlowEdit = () => {
  return (
    <div>
      <div className={styles.title}>MainFlow：</div>
      <div className={styles['mainFlow-item']}>
        <label className={styles['mainFlow-label']}>测试流name：</label>
        <Input
          className={styles['mainFlow-input']}
          placeholder="请输入名称"
          defaultValue="test1"
        />
      </div>

      <div className={styles['mainFlow-item']}>
        <label className={styles['mainFlow-label']}>LoopCount：</label>
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
      <div style={{ alignItems: 'center' }} className={styles['mainFlow-item']}>
        <label className={styles['mainFlow-label']}>Active：</label>
        <Switch
          defaultChecked
          checkedChildren="true"
          unCheckedChildren="false"
        />
      </div>
    </div>
  );
};

export default MainFlowEdit;
