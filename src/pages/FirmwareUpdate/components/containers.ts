import { createContext, useContext, useState } from 'react';

// 创建一个Context
export const FirmwareUpdateContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const useFUProviderModule = () => {
  const [isErrorPage, setIsErrorPage] = useState(false); // 是否转到错误页面
  const [getDeviceList, setGetDeviceList] = useState(); // 设备列表和心跳
  const [selectedFirmwareList, setSelectedFirmwareList] = useState([]); // 所有已选择的勾选项

  const FUContextValue = {
    isErrorPage,
    setIsErrorPage,
    getDeviceList,
    setGetDeviceList,
    selectedFirmwareList,
    setSelectedFirmwareList,
  };
  return { ...useContext(FirmwareUpdateContext), FUContextValue };
};
