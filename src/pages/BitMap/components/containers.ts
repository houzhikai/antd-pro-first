import { createContext, useContext, useState } from 'react';
import { getOptions } from './getOptions';

// 创建一个Context
export const BitMapContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const ProviderFunc = () => {
  const [width, setWidth] = useState(200); // full-data 的宽度
  const detailDataPageWidth = `calc(100vw - 80px - 210px - ${width}px)`;
  const [theme, setTheme] = useState('light');
  const [testValue, setTestValue] = useState(111);
  const [jumpAddress, setJumpAddress] = useState({ x: 0, y: 0 }); // jump 地址跳转

  const options = getOptions(theme, jumpAddress);

  const bitMapContextValue = {
    width,
    setWidth,
    detailDataPageWidth,
    options,
    theme,
    setTheme,
    testValue,
    setTestValue,
    jumpAddress,
    setJumpAddress,
  };
  return { ...useContext(BitMapContext), bitMapContextValue };
};
