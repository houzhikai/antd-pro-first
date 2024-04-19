import { createContext, useContext, useState } from 'react';

// 创建一个Context
export const MyContext = createContext<any>(null);

// 从 useContext 导出需要传递方法
export const ProviderFunc = () => {
  const [value, setValue] = useState(false);
  const myContextValue = {
    value,
    setValue,
  };

  return { ...useContext(MyContext), myContextValue };
};
