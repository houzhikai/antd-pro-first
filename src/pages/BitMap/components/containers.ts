import { createContext, useContext, useEffect, useState } from 'react';
import { initLogicalOptions } from './initValues';
import { getColorList } from './getColorList';
import { generateData } from '../mockData/getGenerateData';
import { getAxisLabelInterval } from './getAxisLabelInterval';

// 创建一个Context
export const BitMapContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const ProviderFunc = () => {
  /**
   * 接口参数
   */
  const [vscodeParams, setVscodeParams] = useState({
    initIp: '192.168.3.71',
    special: {
      editmode: 'OffLine', // 参数预留，后端决定能否为空
      timestamp: '202405241359',
      extension: '4372',
      project: 'bitmaptest', // 参数预留，后端决定能否为空
      location: '/home', // 参数预留，后端决定能否为空
    },
  });
  const [physicalDataPath, setPhysicalDataPath] = useState([]);
  const [bitMapPort, setBitMapPort] = useState(''); // 获取启动服务的端口号
  /**
   * 顶部操作栏
   */
  const [theme, setTheme] = useState('dark');
  const [openPhysicalObj, setOpenPhysicalObj] = useState({
    open: false,
    list: [],
  });
  const detailsEchartsBg = theme === 'light' ? '#f5f5f5' : '#1f1f1f'; // value === 0 使用背景颜色，数据源将value = 0 去除
  // 设置里面选择的模块
  const [modeSelectedOptions, setModeSelectedOptions] = useState({
    logical: initLogicalOptions[0],
    physical: { value: '', label: '', location: '' },
  });
  //设置颜色列表，与 echarts 颜色的数据结构不一样
  const [modifyColorModalObj, setModifyColorModalObj] = useState(
    getColorList(detailsEchartsBg),
  );
  const [modeModalObj, setModeModalObj] = useState({
    open: false,
    list: [],
  });
  // 两个开关选择器，默认都是打开
  const [switchObj, setSwitchObj] = useState({
    isStack: false,
    isLogical: false,
  });
  /**
   * 左侧树形结构
   */
  const [selectedTreeDataList, setSelectedTreeDataList] = useState([]); // 选择数据的勾选框数据
  const [treeDutsList, setTreeDutsList] = useState([]); // 展示 DUTS 列表
  /**
   * info信息，综合信息表
   */

  /**
   * 全量数据，缩略图
   */
  const [width, setWidth] = useState(300); // full-data 的宽度
  // TODO, 后端传递全量数据时需要将xMAX yMAX值传递过来,dots: TopLeft, TopRight, BottomLeft, BottomRight
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
  type BaseConversionProps = 'Hex' | 'Dec' | 'Oct';
  const detailDataPageWidth = `calc(100vw - 80px - 210px - ${width}px)`; // 详情页面的宽度
  const [scaleNumber, setScaleNumber] = useState(1); // 详图放大倍数
  const [jumpAddress, setJumpAddress] = useState({ X: 0, Y: 0 }); // jump 地址跳转
  const [baseConversion, setBaseConversion] =
    useState<BaseConversionProps>('Hex');
  /**
   * 详图数据
   */
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
  const detailsEchartsColorList = modifyColorModalObj.colorList.map(
    (item, index) => {
      return {
        value: index,
        color: item.color,
      };
    },
  );
  const [data, setData] = useState<any>([]);
  const [times, setTimes] = useState(1); // 控制第一次不会加载echarts数据

  useEffect(() => {
    if (times > 0) {
      setData(generateData(5000, switchObj.isStack));
    }
    setTimes((c) => c + 1);
  }, [scaleNumber]);

  const [echartsDataColor, setEchartsDataColor] = useState(
    detailsEchartsColorList,
  ); // echarts 颜色列表
  // TODO 有且仅有一次渲染，现在会渲染多次
  useEffect(() => {
    setEchartsDataColor(detailsEchartsColorList);
  }, [modifyColorModalObj.colorList]);

  const bitMapContextValue = {
    width,
    setWidth,
    detailDataPageWidth,
    theme,
    setTheme,
    treeDutsList,
    setTreeDutsList,
    jumpAddress,
    setJumpAddress,
    echartsDataColor,
    setEchartsDataColor,
    modifyColorModalObj,
    setModifyColorModalObj,
    modeModalObj,
    setModeModalObj,
    configInfo,
    detailsValues,
    setDetailsValues,
    modeSelectedOptions,
    setModeSelectedOptions,
    switchObj,
    setSwitchObj,
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
    openPhysicalObj,
    setOpenPhysicalObj,
    physicalDataPath,
    setPhysicalDataPath,
  };
  return { ...useContext(BitMapContext), bitMapContextValue };
};
