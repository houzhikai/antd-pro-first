import { getTestUnitStatus, getServiceState } from "./components/convertData";

export const analysisMenuList = (interfaceDataList: any) => {
  if (!Array.isArray(interfaceDataList)) {
    return;
  }
  const getChildrenList = (list: any) => {
    // 树形结构的第二层，boards 的第二层 children
    const childItemList = list.map((item: any) => {
      return {
        ...item,
        icon: getTestUnitStatus(item.status),
      };
    });
    return childItemList;
  };
  const getChildList = (list: any) => {
    // 树形结构的第一层，boards 的第一层 children
    const childItemList = list.map((item: any) => {
      return {
        ...item,
        icon: getTestUnitStatus(item.status),
        children: getChildrenList(item.children),
      };
    });
    return childItemList;
  };
  // interfaceDataList 是接口中的 boards 层级数据
  const newList = interfaceDataList.map((item) => {
    // panel title的数据，即折叠面板上的数据
    return {
      ...item,
      status: getServiceState(item.serviceState),
      child: getChildList(item.children),
    };
  });

  return newList;
};
