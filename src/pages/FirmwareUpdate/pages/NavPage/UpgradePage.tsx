import { Button, message } from 'antd';
import { useFUProviderModule } from '../../components/containers';

const UpgradePage = () => {
  const { getDeviceList } = useFUProviderModule();
  const isDisabled = getDeviceList?.heartbeat || 0;
  const handleClick = (msg) => {
    message.info(msg);
  };
  return (
    <div>
      <Button
        disabled={isDisabled}
        className="customNavPage-gap"
        type="primary"
        onClick={() => handleClick('点击了 刷新 按钮')}
      >
        刷新
      </Button>
      <Button
        disabled={isDisabled}
        className="customNavPage-gap"
        type="primary"
        onClick={() => handleClick('点击了 开始升级 按钮')}
      >
        开始升级
      </Button>
      <Button
        disabled={isDisabled}
        className="customNavPage-gap"
        danger
        type="primary"
        onClick={() => handleClick('点击了 终止升级 按钮')}
      >
        终止升级
      </Button>
    </div>
  );
};

export default UpgradePage;
