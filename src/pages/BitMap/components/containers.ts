import { createContext, useContext, useEffect, useState } from 'react';
import { initScrambleOptions } from './initValues';
import { getAxisLabelInterval } from './getAxisLabelInterval';
import { generateData } from '../mockData/getGenerateData';

// 创建一个Context
export const BitMapContext = createContext(null);

// 从 useContext 导出需要传递方法
export const ProviderFunc = () => {
  /**
   * 接口参数
   */
  const [vscodeParams, setVscodeParams] = useState({});
  const [bitMapPort, setBitMapPort] = useState(''); // 获取启动服务的端口号
  const [loading, setLoading] = useState<boolean>(false); // Do you want to disable the page: disable the page while converting
  const [theme, setTheme] = useState('light');

  /**
   * 顶部操作栏
   */
  // 触发 vscode.postMessage 的时机
  const [triggerTiming, setTriggerTiming] = useState({
    importPhysical: false, // 导入物理位图文件触发的时机
    colorList: 1, // 修改颜色触发的时机
    sourceDataLocation: 1, // 修改源数据文件触发的时机
    physicalOutputLocation: 1, // 修改生成物理位图文件地址触发的时机
  });

  const [fullPath, setFullPath] = useState({
    importPhysicalPath: '', // import button need location
  });

  // 打开 convert 弹窗， 获取里面的值
  const [convertModalObj, setConvertModalObj] = useState({
    open: false,
    sourceDataLocation: '',
    scrambleCfg: {
      fileName: '', // initScrambleOptions[0].value,
      location: '', // initScrambleOptions[0].location,
    },
    physicalOutputLocation: '',
  });
  // scrambleCfg 的 options 列表
  const [scrambleCfgOptionsList, setScrambleCfgOptionsList] =
    useState(initScrambleOptions);

  //设置颜色列表，与 echarts 颜色的数据结构不一样
  const [modifyColorModalObj, setModifyColorModalObj] = useState({
    open: false,
    colorList: [],
  });
  // 是否是堆叠模式
  const [isStack, setIsStack] = useState(false);

  /**
   * 左侧树形结构
   */
  const [selectedTreeDataList, setSelectedTreeDataList] = useState([]); // 选择数据的勾选框数据
  const [physicalFileList, setPhysicalFileList] = useState([]); // 展示 DUTS 列表
  /**
   * info信息，综合信息表
   */

  /**
   * 全量数据，缩略图
   */
  const [width, setWidth] = useState(300); // full-data 的宽度
  // TODO, dots: TopLeft, TopRight, BottomLeft, BottomRight
  const configInfo = {
    // row: 行，col: 列
    layoutConfig: { xMax: 1023, yMax: 1023, dots: 'BottomLeft' },
    duts: { row: 1, col: 1 },
    blocks: { row: 1, col: 8 },
    pages: { row: 1024, col: 128 },
  };
  /**
   * 详图导航栏
   */
  const detailDataPageWidth = `calc(100vw - 80px - 210px - ${width}px)`; // 详情页面的宽度
  const [scaleNumber, setScaleNumber] = useState(1); // 详图放大倍数
  const [jumpAddress, setJumpAddress] = useState({ X: 0, Y: 0 }); // jump 地址跳转
  const [baseConversion, setBaseConversion] = useState('Hex');
  /**
   * 详图数据
   */
  // echarts 数据源
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(5000, isStack));
  }, [scaleNumber]);
  const [detailsValues, setDetailsValues] = useState({
    //详图的首位比例，0：0%， 100：100%
    xStart: 0,
    xEnd: 20,
    yStart: 0,
    yEnd: 20,
  });

  useEffect(() => {
    const defaultDetailValues = getAxisLabelInterval(scaleNumber);
    setDetailsValues({
      xStart: 0,
      xEnd: defaultDetailValues.end.xEnd,
      yStart: 0,
      yEnd: defaultDetailValues.end.yEnd,
    });
  }, [scaleNumber]);

  const [echartsDataColor, setEchartsDataColor] = useState(
    modifyColorModalObj.colorList,
  ); // echarts 颜色列表

  const bitMapContextValue = {
    width,
    setWidth,
    detailDataPageWidth,
    theme,
    setTheme,
    physicalFileList,
    setPhysicalFileList,
    jumpAddress,
    setJumpAddress,
    echartsDataColor,
    setEchartsDataColor,
    modifyColorModalObj,
    setModifyColorModalObj,
    convertModalObj,
    setConvertModalObj,
    configInfo,
    detailsValues,
    setDetailsValues,
    selectedTreeDataList,
    setSelectedTreeDataList,
    scaleNumber,
    setScaleNumber,
    baseConversion,
    setBaseConversion,
    data,
    setData,
    vscodeParams,
    setVscodeParams,
    bitMapPort,
    setBitMapPort,
    scrambleCfgOptionsList,
    setScrambleCfgOptionsList,
    triggerTiming,
    setTriggerTiming,
    isStack,
    setIsStack,
    loading,
    setLoading,
    fullPath,
    setFullPath,
  };
  return { ...useContext(BitMapContext), bitMapContextValue };
};
