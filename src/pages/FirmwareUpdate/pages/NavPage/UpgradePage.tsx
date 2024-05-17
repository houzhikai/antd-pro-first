import { Button, Popconfirm, message } from 'antd';
import { useFUProviderModule } from '../../components/containers';

const UpgradePage = () => {
  const { getDeviceListAndHeartObj } = useFUProviderModule();
  const isDisabled = getDeviceListAndHeartObj?.allow !== 0;
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
      <Popconfirm
        title="升级后会重启整机，请确保没有正在进行的业务操作"
        okText="Yes"
        cancelText="No"
      >
        <Button
          disabled={isDisabled}
          className="customNavPage-gap"
          type="primary"
          onClick={() => handleClick('点击了 开始升级 按钮')}
        >
          开始升级
        </Button>
      </Popconfirm>
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
