import { Button, Popconfirm } from 'antd';
import styles from '../index.less';

const SettingStartNode = () => {
  return (
    <Popconfirm
      placement="right"
      title="确定将该测试项设为结束节点？"
      okText="Yes"
      cancelText="No"
    >
      <Button className={styles['bottom-item']}>设置为结束节点</Button>
    </Popconfirm>
  );
};

export default SettingStartNode;
