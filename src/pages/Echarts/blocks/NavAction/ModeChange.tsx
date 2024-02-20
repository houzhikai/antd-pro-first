import { Popconfirm, Switch, message } from 'antd';
import styles from '../../index.less';
import { useModel } from '@umijs/max';
import { mockData } from '../components/data';

const ModeChange = () => {
  const { setWaferMapData, mode, setMode, waferMapData } =
    useModel('useEchartsModel');
  const handleConfirm = () => {
    if (mode) {
      setWaferMapData(null);
    } else {
      setWaferMapData(mockData);
    }
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
      {waferMapData ? (
        <Popconfirm
          title={title}
          onConfirm={handleConfirm}
          okText="Yes"
          cancelText="No"
        >
          <Switch
            checkedChildren="Online"
            unCheckedChildren="Offline"
            value={mode}
          />
        </Popconfirm>
      ) : (
        <Switch
          checkedChildren="Online"
          unCheckedChildren="Offline"
          value={mode}
          onChange={handleConfirm}
        />
      )}
    </div>
  );
};

export default ModeChange;
