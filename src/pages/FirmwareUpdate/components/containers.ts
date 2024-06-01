import { createContext, useContext, useState } from 'react';

// 创建一个Context
export const FirmwareUpdateContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const useFUProviderModule = () => {
  const [getDeviceListAndHeartObj, setGetDeviceListAndHeartObj] = useState({}); // 设备列表和心跳
  const [errorTimes, setErrorTimes] = useState<{
    times: number;
    aboveTimes: number;
  }>({ times: 0, aboveTimes: 99999 });
  const [startParams, setStartParams] = useState({
    initIp: '192.168.3.218',
    vscodeId: 12345,
  }); // 所有已选择的勾选项
  const [activeKey, setActiveKey] = useState(['0']);

  const [selectedFirmwareList, setSelectedFirmwareList] = useState([]); // 所有已选择的勾选项
  const [indeterminateKeys, setIndeterminateKeys] = useState(false); //全选的半选样式,因为跨层较多，放在公共库中

  const FUContextValue = {
    getDeviceListAndHeartObj,
    setGetDeviceListAndHeartObj,
    errorTimes,
    setErrorTimes,
    startParams,
    setStartParams,
    selectedFirmwareList,
    setSelectedFirmwareList,
    activeKey,
    setActiveKey,
    indeterminateKeys,
    setIndeterminateKeys,
  };
  return { ...useContext(FirmwareUpdateContext), FUContextValue };
};
