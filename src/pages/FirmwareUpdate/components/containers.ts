import { createContext, useContext, useState } from 'react';

// 创建一个Context
export const FirmwareUpdateContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const useFUProviderModule = () => {
  const [getDeviceList, setGetDeviceList] = useState({}); // 设备列表和心跳
  const [errorTimes, setErrorTimes] = useState<{
    times: number;
    aboveTimes: number;
  }>({ times: 0, aboveTimes: 2 });
  const [startParams, setStartParams] = useState({
    initIp: '172.168.0.100',
    vscodeId: 12345,
  }); // 所有已选择的勾选项
  const [selectedFirmwareList, setSelectedFirmwareList] = useState([]); // 所有已选择的勾选项

  const FUContextValue = {
    getDeviceList,
    setGetDeviceList,
    errorTimes,
    setErrorTimes,
    startParams,
    setStartParams,
    selectedFirmwareList,
    setSelectedFirmwareList,
  };
  return { ...useContext(FirmwareUpdateContext), FUContextValue };
};
