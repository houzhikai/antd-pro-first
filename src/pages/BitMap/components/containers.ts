import { createContext, useContext, useState } from 'react';

// 创建一个Context
export const BitMapContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const ProviderFunc = () => {
  /**
   * 接口参数
   */
  const [isErrorPage, setIsErrorPage] = useState(false); // 是否转到错误页面
  const [vscodeParams, setVscodeParams] = useState({});
  const [bitMapPort, setBitMapPort] = useState(''); // 获取启动服务的端口号
  // Do you want to disable the page: disable the page while converting
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState('light');
  /**
   * waferMap UI
   * {
    xMin: -70,
    xMax: 50,
    yMin: -70,
    yMax: 50,
    dots: 'BottomLeft', // TopLeft, TopRight, BottomLeft, BottomRight
    gap: 'bottom', // bottom top left right
  }
   */
  const [wafermapLayout, setWafermapLayout] = useState({});
  /**
   * 顶部操作栏
   */
  // 触发 vscode.postMessage 的时机
  const [triggerTiming, setTriggerTiming] = useState({
    importPhysical: false, // 导入物理位图文件触发的时机
    colorList: 1, // 修改颜色触发的时机
    sourceDataLocation: 1, // 修改源数据文件触发的时机
    physicalOutputLocation: 1, // 修改生成物理位图文件地址触发的时机
    importScrambleFile: 1, //
    deleteScrambleFile: '', //
    changeScrambleFile: '',
    stackModeDut1Location: 1,
    stackModeDut2Location: 1,
    importWaferIDPath: false,
  });

  const [fullPath, setFullPath] = useState({
    importPhysicalPath: '', // import button need location
  });
  // wafermap UI echarts and info
  const [wafermapData, setWaferMapData] = useState({ data: [], info: {} });

  // 打开单例模式的弹窗
  const [isSingleModalOpen, setSingleIsModalOpen] = useState(true);
  // 打开堆叠模式的UI
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
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
  const [scrambleCfgOptionsList, setScrambleCfgOptionsList] = useState();

  /**
   * bitmap UI
   */
  // 单例模式下的颜色列表，正常情况下只有1
  const [width] = useState(300); // full-data 的宽度
  const [configInfo, setConfigInfo] = useState<any>({});

  // 颜色设置，只关心个数，不关心属于哪个dut
  const [bitmapColorModalObj, setBitmapColorModalObj] = useState({
    open: false,
    colorList: [],
  });
  /**
   * bitmap导航栏
   */
  // 默认展示 wafermap ID的路径，支持修改waferID path，但是不用保存到配置文件中
  const [waferIDPath, setWaferIDPath] = useState('');
  const detailDataPageWidth = `calc(100vw - 80px - 210px - ${width}px)`; // 详情页面的宽度
  const [scaleNumber, setScaleNumber] = useState(256); // 详图放大倍数
  const [jumpAddress, setJumpAddress] = useState({ X: 0, Y: 0 }); // jump 地址跳转
  const [baseConversion, setBaseConversion] = useState('Hex');
  // 旋转 度数
  const [rotateNumber, setRotateNumber] = useState(0);
  /**
   * 详图数据
   */

  /**
   * echarts 数据源(data: echarts 数据，info： dut信息)
   */
  const [bitmapData, setBitmapData] = useState({ data: [], info: {} });

  //详图的首位比例，0：0%， 100：100%
  const [detailsValues, setDetailsValues] = useState({
    xStart: 0,
    xEnd: 20,
    yStart: 0,
    yEnd: 20,
  });

  /**
   * 全是百分比，计算详图的起始、最终位置
   * xtoLeftPercent: 0,
   * xScalePercent: 100,
   * ytoTopPercent: 0,
   * yScalePercent: 100,
   */
  const [selectSize, setSelectSize] = useState({});
  // get window view x/y index
  const [echartsIndex, setEchartsIndex] = useState<any>();
  // full-echarts's onlcik event
  const [isClick, setIsClick] = useState(false);

  /**
   * 左侧树形结构
   * 一期代码，之后不再使用
   * 以下代码可以忽略
   */
  const [selectedTreeDataList, setSelectedTreeDataList] = useState([]); // 选择数据的勾选框数据
  const [physicalFileList, setPhysicalFileList] = useState([]); // 展示 DUTS 列表
  const [isStack, setIsStack] = useState(false);
  // const [singleColor, setSingleColor] = useState([
  //   { value: 0, color: 'green' },
  //   { value: 1, color: 'red' },
  //   { gt: 1, color: '#f60' },
  // ]);
  //设置颜色列表，与 echarts 颜色的数据结构不一样
  const [modifyColorModalObj, setModifyColorModalObj] = useState({
    open: false,
    colorList: [],
  });
  // stack UI echarts 颜色列表
  const [echartsDataColor, setEchartsDataColor] = useState(
    modifyColorModalObj.colorList,
  );
  // stack UI two duts
  const [selectDutsModal, setSelectDutsModal] = useState({
    open: false,
    dut1: '', // '/home/kkuser/public/partner/LotId001/WaferId001/20240618202723663/afmtest_00/physical/lotid001_waferid001_202405212033_x3y5.phy',
    dut2: '', // '/home/kkuser/public/partner/LotId001/WaferId001/20240618202723663/afmtest_00/physical/lotid001_waferid001_202405212032_x-2y-2.phy',
  });
  //以上代码可以忽略

  const bitMapContextValue = {
    isErrorPage,
    setIsErrorPage,
    width,
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
    setConfigInfo,
    detailsValues,
    setDetailsValues,
    selectedTreeDataList,
    setSelectedTreeDataList,
    scaleNumber,
    setScaleNumber,
    baseConversion,
    setBaseConversion,
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
    isSingleModalOpen,
    setSingleIsModalOpen,
    wafermapLayout,
    setWafermapLayout,
    isStackModalOpen,
    setIsStackModalOpen,
    // singleColor,
    // setSingleColor,
    wafermapData,
    setWaferMapData,
    bitmapData,
    setBitmapData,
    selectDutsModal,
    setSelectDutsModal,
    selectSize,
    setSelectSize,
    echartsIndex,
    setEchartsIndex,
    isClick,
    setIsClick,
    bitmapColorModalObj,
    setBitmapColorModalObj,
    rotateNumber,
    setRotateNumber,
    waferIDPath,
    setWaferIDPath,
  };
  return { ...useContext(BitMapContext), bitMapContextValue };
};
