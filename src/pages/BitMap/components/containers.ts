import { createContext, useContext, useEffect, useState } from 'react';

// 创建一个Context
export const BitMapContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const ProviderFunc = () => {
  const fullEchartsMaxValue = { xMax: 400, yMax: 200 }; // TODO, 后端传递全量数据时需要将xMAX yMAX值传递过来
  const [detailsEchartsAxisValue, setDetailsEchartsAxisValue] = useState({
    xMin: 0,
    xMax: fullEchartsMaxValue.xMax / 2,
    yMin: 0,
    yMax: fullEchartsMaxValue.yMax / 2,
  });
  const [width, setWidth] = useState(200); // full-data 的宽度
  const detailDataPageWidth = `calc(100vw - 80px - 210px - ${width}px)`; // 详情页面的宽度
  const [theme, setTheme] = useState('light');
  const detailsEchartsBg = theme === 'light' ? '#f5f5f5' : '#1f1f1f'; // value === 0 使用背景颜色，数据源将value = 0 去除
  const [modifyColorModalObj, setModifyColorModalObj] = useState({
    open: false,
    colorList: [
      detailsEchartsBg,
      '#f00',
      '#fba',
      '#fba',
      '#fba',
      '#fba',
      '#fba',
      '#fba',
      '#fba',
    ],
  }); //设置颜色列表，与 echarts 颜色的数据结构不一样
  const [modeModalObj, setModeModalObj] = useState({
    open: false,
    list: [],
  });
  const [testValue, setTestValue] = useState(111); // 展示 DUTS 列表
  const [jumpAddress, setJumpAddress] = useState({ X: 0, Y: 0 }); // jump 地址跳转
  const detailsEchartsColorList = modifyColorModalObj.colorList.map(
    (item, index) => {
      return {
        value: index,
        color: item,
      };
    },
  );
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
    testValue,
    setTestValue,
    jumpAddress,
    setJumpAddress,
    echartsDataColor,
    setEchartsDataColor,
    modifyColorModalObj,
    setModifyColorModalObj,
    modeModalObj,
    setModeModalObj,
    fullEchartsMaxValue,
    detailsEchartsAxisValue,
    setDetailsEchartsAxisValue,
  };
  return { ...useContext(BitMapContext), bitMapContextValue };
};
