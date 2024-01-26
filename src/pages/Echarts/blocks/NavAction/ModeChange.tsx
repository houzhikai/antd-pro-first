import { Switch } from 'antd';
import styles from '../../index.less';

const ModeChange = () => {
  const handleChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className={styles['nav-gap']} style={{ marginLeft: 20 }}>
      <Switch
        checkedChildren="Offline"
        unCheckedChildren="Inline"
        onChange={handleChange}
      />
    </div>
  );
};

export default ModeChange;
