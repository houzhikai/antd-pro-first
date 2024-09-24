import { createContext, useState, useContext } from 'react';

export const LowCodePlatformContext = createContext<any>(null);

export const useLowCodePlatformProvider = () => {
  // 中间页面的node列表
  const [pageNodes, setPageNodes] = useState<any>([]);
  //   右边页面：选中node的参数
  const [selectedItem, setSelectedItem] = useState({});
  const defaultPageValues = {
    pageNodes,
    setPageNodes,
    selectedItem,
    setSelectedItem,
  };
  return { ...useContext(LowCodePlatformContext), defaultPageValues };
};
