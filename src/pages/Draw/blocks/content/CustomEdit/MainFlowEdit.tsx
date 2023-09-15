import { Input, InputNumber, Switch } from 'antd';
import styles from './index.less';

const MainFlowEdit = () => {
  return (
    <div>
      <div className={styles.title}>MainFlow：</div>
      <div style={{ display: 'flex' }}>
        <label className={styles['mainFlow-label']}>测试流name：</label>
        <Input />
      </div>
      <Input
        className={styles['detail-item']}
        placeholder="请输入名称"
        defaultValue="test1"
        //   value={nodeName}
        //   onChange={(evt) => setNodeName(evt.target.value)}
      />
      <InputNumber
        className={styles['detail-item']}
        addonBefore="LoopCount:"
        placeholder="请输入名称"
        defaultValue={1}
        min={1}
        controls={false}
        //   value={nodeName}
        //   onChange={(evt) => setNodeName(evt.target.value)}
      />
      <div>
        <label>Active：</label>
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
