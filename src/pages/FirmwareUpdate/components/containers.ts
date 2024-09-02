import { createContext, useContext, useState } from 'react';
import { StatusENUM } from '../pages/DetailsPage/components/enum';

// 创建一个Context
export const FirmwareUpdateContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const useFUProviderModule = () => {
  /**
   * 接口调用
   */
  const [getDeviceListAndHeartObj, setGetDeviceListAndHeartObj] = useState<any>(
    {},
  );
  const hasWaitingAndUpgrading = getDeviceListAndHeartObj?.tableList
    ?.map((item) => item?.slotStatus)
    .some(
      (item) =>
        item === StatusENUM.Upgrading || item === StatusENUM.WaitingUpgrade,
    );

  // 设备列表和心跳
  const [errorTimes, setErrorTimes] = useState<{
    times: number;
    aboveTimes: number;
  }>({ times: 0, aboveTimes: 100 });
  /**
   * vscode通信
   */
  const [startParams, setStartParams] = useState({ initIp: '', vscodeId: '' }); // 所有已选择的勾选项

  /**
   * 操作栏
   */
  // 生效模式  true：自动模式， false： 手动模式
  // TODO，需要vscode存储当前模式
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [theme, setTheme] = useState('light');

  /**
   * 页面内容区域
   */
  const [ubootEnv, setUbootEnv] = useState([]);
  const [activeKey, setActiveKey] = useState(['0']); // 默认展开的 slot
  const [selectedKeysList, setSelectedKeysList] = useState([]); // 所有已选择的勾选项
  // 全选 半选样式 table选中的样式, 因为跨层较多，放在公共库中
  const [indeterminateKeys, setIndeterminateKeys] = useState(false);

  /**
   * 升级后弹出的弹窗样式
   */
  const [promptUser, setPromptUser] = useState(false);

  /**
   * table 的宽度
   * sizeRatio: table 占用页面宽度比例，单位 百分比
   * statusWidth： table 状态栏的宽度，单位 px
   */
  const tableWidthObj = { sizeRatio: 70, statusWidth: 150 };

  const FUContextValue = {
    getDeviceListAndHeartObj,
    setGetDeviceListAndHeartObj,
    errorTimes,
    setErrorTimes,
    startParams,
    setStartParams,
    selectedKeysList,
    setSelectedKeysList,
    activeKey,
    setActiveKey,
    indeterminateKeys,
    setIndeterminateKeys,
    ubootEnv,
    setUbootEnv,
    tableWidthObj,
    promptUser,
    setPromptUser,
    isAutoMode,
    setIsAutoMode,
    hasWaitingAndUpgrading,
    theme,
    setTheme,
  };
  return { ...useContext(FirmwareUpdateContext), FUContextValue };
};
