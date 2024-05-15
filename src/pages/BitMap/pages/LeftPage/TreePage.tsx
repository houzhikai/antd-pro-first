import React from 'react';
import { Tree } from 'antd';
import { treeDataList } from '../../mockData/mockTreeData';
import { ProviderFunc } from '../../components/containers';

const TreePage: React.FC = () => {
  const { switchObj, selectedTreeDataList, setSelectedTreeDataList } =
    ProviderFunc();
  // 筛选相同的树形结构key值
  const filterSameSelectedTreeDataList = (newList) => {
    let result = newList.filter((item, index, array) => {
      return array.findIndex((t) => t.key === item.key) === index;
    });
    return result.sort((a, b) => a.dut - b.dut);
  };

  const handleCheck = (_, info) => {
    if (switchObj.isStack) {
      const checkedDuts = info.checkedNodes.map((item) => ({
        key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
        dut: item.title,
        location: item.location,
      }));
      setSelectedTreeDataList(checkedDuts);
    } else {
      // 只能选择一个 勾选框
      const checkedDuts = {
        key: info.node.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
        dut: info.node.title,
        location: info.node.location,
      };
      setSelectedTreeDataList([checkedDuts]);
    }
  };
  const handleSelect = (_, info) => {
    const isHasKey = selectedTreeDataList.some(
      (item) => item.key === info.node.key,
    );
    if (isHasKey) {
      // 存在 即 要删除key
      setSelectedTreeDataList((list) => {
        const newList = info.node.children
          ? []
          : list.filter(
              (item) => item.key !== info.node.key && item.key.length !== 3,
            );
        // 过滤相同key的数组
        let result = filterSameSelectedTreeDataList(newList);
        return result;
      });
    } else {
      // 不存在 即 要添加key
      const newList = info.node.children
        ? info.node.children
            .map((item) => ({
              key: item.key,
              dut: item.title,
              location: item.location,
            }))
            .concat({
              key: info.node.key,
              dut: info.node.title,
              location: info.node.location,
            })
        : [
            {
              key: info.node.key,
              dut: info.node.title,
              location: info.node.location,
            },
          ];
      setSelectedTreeDataList((list) => {
        let result = filterSameSelectedTreeDataList([...list, ...newList]);
        return result;
      });
    }
  };

  const checkedKeys = selectedTreeDataList.map((item) => item.key);
  return (
    <>
      <Tree
        style={{ background: '#f5f5f5' }}
        checkable
        checkedKeys={checkedKeys}
        defaultExpandAll
        onCheck={handleCheck}
        onSelect={handleSelect}
        treeData={treeDataList}
        blockNode
      />
    </>
  );
};

export default TreePage;
