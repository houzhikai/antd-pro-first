import { Tree } from 'antd';

const TreePage = ({ selectedKeys, item, setSelectedKeys }) => {
  // checkedKeyList 是最后选中的key值列表，不是点击的key列表
  const handleCheck = (checkedKeyList, e) => {
    const isChecked = e.checked;
    setSelectedKeys((preList) => {
      //如果 点击勾选，则添加选择的数组，如果取消勾选，则去除选择的数组
      const filterItemSlotList = selectedKeys
        .filter((selectedKey) => selectedKey[0] === item.key)
        .filter((list) => !checkedKeyList.includes(list));

      const selectedKeysList = preList.filter(
        (pre) => !filterItemSlotList.includes(pre),
      );

      const newList = isChecked
        ? Array.from(new Set([...preList, ...checkedKeyList]))
        : selectedKeysList;
      return newList;
    });
  };
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
