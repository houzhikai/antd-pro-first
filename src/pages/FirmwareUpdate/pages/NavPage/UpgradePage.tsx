import { Button, Popconfirm, message } from 'antd';
import { useFUProviderModule } from '../../components/containers';
import { getStartUpgradeParams } from '../../components/getStartUpgradeParams';
import myFetch from '@/components/myFetch';

const UpgradePage = () => {
  const { getDeviceListAndHeartObj, selectedKeysList, startParams, ubootEnv } =
    useFUProviderModule();
  const isDisabled = getDeviceListAndHeartObj?.allow !== 0;
  const handleClick = (msg) => {
    message.info(msg);
  };
  // 开始升级
  const handleStartUpgrade = async () => {
    const params = getStartUpgradeParams(
      getDeviceListAndHeartObj,
      selectedKeysList,
      ubootEnv,
    );
    if (startParams.initIp) {
      try {
        const res = await myFetch({
          url: `http://${startParams.initIp}:28700/upgrade/updatestart`,
          params,
          isExceptionHand: true,
        });
        if (res.result === '0') {
          console.log(111);
        } else {
          message.error(res.msg);
        }
      } catch (error) {}
    }
  };
  // 终止升级
  const handleStopUpgrade = async () => {
    if (startParams.initIp) {
      try {
        const res = await myFetch({
          url: `http://${startParams.initIp}:28700/upgrade/updatestop`,
          isExceptionHand: true,
        });
        if (res.result === '0') {
          console.log(111);
        } else {
          message.error(res.msg);
        }
      } catch (error) {}
    }
  };
  // 是否有等待升级的状态
  const isWaitUpgrade = (getDeviceListAndHeartObj?.tableList || [])
    .map((item) => item.children)
    .flat(Infinity)
    .some((item) => item.status === 2);
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
        disabled={isDisabled || selectedKeysList.length === 0}
        title="升级后会重启整机，请确保没有正在进行的业务操作"
        okText="Yes"
        cancelText="No"
        onConfirm={handleStartUpgrade}
      >
        <Button
          disabled={isDisabled || selectedKeysList.length === 0}
          className="customNavPage-gap"
          type="primary"
        >
          开始升级
        </Button>
      </Popconfirm>
      <Popconfirm
        disabled={isDisabled || !isWaitUpgrade}
        title="正在升级的不能被中止，确认是否中止升级？"
        okText="Yes"
        cancelText="No"
        onConfirm={handleStopUpgrade}
      >
        <Button
          disabled={isDisabled || !isWaitUpgrade}
          className="customNavPage-gap"
          danger
          type="primary"
        >
          终止升级
        </Button>
      </Popconfirm>
    </div>
  );
};

export default UpgradePage;
