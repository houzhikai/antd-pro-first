import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import { getStartUpgradeParams } from '../../components/getStartUpgradeParams';
import myFetch from '@/components/myFetch';
import { useFUProviderModule } from '../../components/containers';

const UpgradePage = () => {
  const {
    getDeviceListAndHeartObj,
    selectedKeysList,
    startParams,
    ubootEnv,
    hasWaitingAndUpgrading,
    isAutoMode,
  } = useFUProviderModule();
  const isDisabled = getDeviceListAndHeartObj?.allow !== 0;
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
          // TODO, disable table checkbox
        } else {
          message.error(res.msg);
        }
      } catch (error) {
        message.error('Start upgrade failed');
      }
    }
  };
  // 终止升级
  const handleStopUpgrade = async () => {
    if (startParams.initIp) {
      try {
        await myFetch({
          url: `http://${startParams.initIp}:28700/upgrade/updatestop`,
          isExceptionHand: true,
        });
      } catch (error) {
        message.error('Stop upgrade failed');
      }
    }
  };
  // 是否有等待升级的状态
  const isWaitUpgrade = (getDeviceListAndHeartObj?.tableList || [])
    ?.map((item) => item.children)
    .flat(Infinity)
    .some((item) => item?.status === 2);
  return (
    <div>
      {isAutoMode ? (
        <Popconfirm
          disabled={
            isDisabled ||
            selectedKeysList.length === 0 ||
            hasWaitingAndUpgrading
          }
          title="After upgrading, the entire machine will restart. Please ensure that there are no ongoing business operations"
          okText="Yes"
          cancelText="No"
          onConfirm={handleStartUpgrade}
        >
          <Button
            type="primary"
            className="customNavPage-gap"
            disabled={
              isDisabled ||
              selectedKeysList.length === 0 ||
              hasWaitingAndUpgrading
            }
          >
            Start
          </Button>
        </Popconfirm>
      ) : (
        <Button
          type="primary"
          className="customNavPage-gap"
          disabled={
            isDisabled ||
            selectedKeysList.length === 0 ||
            hasWaitingAndUpgrading
          }
          onClick={handleStartUpgrade}
        >
          Start
        </Button>
      )}

      <Popconfirm
        disabled={isDisabled || !isWaitUpgrade}
        title="Please confirm if you want to terminate the upgrade."
        okText="Yes"
        cancelText="No"
        onConfirm={handleStopUpgrade}
      >
        <Button
          type="primary"
          className="customNavPage-gap"
          disabled={isDisabled || !isWaitUpgrade}
          danger
        >
          Stop
        </Button>
      </Popconfirm>
    </div>
  );
};

export default UpgradePage;
