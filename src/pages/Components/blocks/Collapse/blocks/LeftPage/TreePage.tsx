import { Tree } from "antd";

const TreePage = ({ selectedKeys, item, setSelectedKeys }: any) => {
  // checkedKeyList 是最后选中的key值列表，不是点击的key列表
  const handleCheck = (checkedKeyList: any, e: any) => {
    const isChecked = e.checked;
    setSelectedKeys((preList: any) => {
      //如果 点击勾选，则添加选择的数组，如果取消勾选，则去除选择的数组
      const filterItemSlotList = selectedKeys
        .filter((selectedKey: any) => selectedKey[0] === item.key)
        .filter((list: any) => !checkedKeyList.includes(list));

      const selectedKeysList = preList.filter(
        (pre: any) => !filterItemSlotList.includes(pre)
      );

      const newList = isChecked
        ? Array.from(new Set([...preList, ...checkedKeyList]))
        : selectedKeysList;
      return newList;
    });
  };

  // disabled 不需要单独设置，treeData 可以直接读取 children 的 disabled
  return (
    <Tree
      treeData={item.child}
      checkedKeys={selectedKeys}
      onCheck={handleCheck}
      showIcon
      checkable
    />
  );
};
export default TreePage;
