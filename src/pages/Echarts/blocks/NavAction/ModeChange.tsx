import { Popconfirm, Switch, message } from 'antd';
import styles from '../../index.less';
import { useState } from 'react';

const ModeChange = () => {
  const [mode, setMode] = useState(false);
  // const handleChange = (checked: boolean) => {
  //   console.log(`switch to ${checked}`);
  // };
  const confirm = () => {
    // TODO 补充 在线转离线 和 离线转在线 的操作
    setMode((c) => !c);
    message.success(`Switched to ${mode ? 'offline' : 'online'} mode`);
  };
  const offLineToOnlineDesc =
    'Switching to online mode will refresh the content area information. Do you want to continue?';
  const onLineToOfflineDesc =
    'Switching to offline mode will clear the content information. Do you want to continue?';
  const title = mode ? onLineToOfflineDesc : offLineToOnlineDesc;
  return (
    <div className={styles['nav-gap']} style={{ marginLeft: 20 }}>
      <Popconfirm
        title={title}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Switch
          checkedChildren="Online"
          unCheckedChildren="Offline"
          value={mode}
          // onChange={handleChange}
        />
      </Popconfirm>
    </div>
  );
};

export default ModeChange;
