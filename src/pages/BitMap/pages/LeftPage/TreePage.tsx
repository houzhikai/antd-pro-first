import React from 'react';
import { Tree } from 'antd';
import { ProviderFunc } from '../../components/containers';

const TreePage = () => {
  const {
    switchObj,
    selectedTreeDataList,
    setSelectedTreeDataList,
    treeDutsList,
  } = ProviderFunc();
  // 筛选相同的树形结构key值
  // const filterSameSelectedTreeDataList = (newList) => {
  //   let result = newList.filter((item, index, array) => {
  //     return array.findIndex((t) => t.key === item.key) === index;
  //   });
  //   return result.sort((a, b) => a.dut - b.dut);
  // };

  const handleCheck = (_, info) => {
    if (switchObj.isStack) {
      if (info.node.key.length === 3) {
        const xxx = treeDutsList[0].children.slice(0, 2);
        const checkedDuts = xxx.map((item) => ({
          key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: item.title,
          location: item.location,
          details: item.details,
          header: treeDutsList[0].header,
          test_info: treeDutsList[0].test_info,
        }));
        setSelectedTreeDataList(checkedDuts);
      } else {
        const checkedDuts = info.checkedNodes.map((item) => ({
          key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: item.title,
          location: item.location,
          details: item.details,
          header: treeDutsList[0].header,
          test_info: treeDutsList[0].test_info,
        }));
        setSelectedTreeDataList(checkedDuts.slice(0, 2));
      }

      // TODO， 堆叠模式目前只支持勾选两个duts
      // setSelectedTreeDataList(checkedDuts.slice(0, 2));
    } else {
      // 只能选择一个 勾选框
      let checkedDuts: any = {};
      if (info.node.key.length === 3) {
        const xxx = treeDutsList[0].children[0];
        checkedDuts = {
          key: xxx.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: xxx.title,
          location: xxx.location,
          details: xxx.details,
          header: treeDutsList[0].header,
          test_info: treeDutsList[0].test_info,
        };
      } else {
        checkedDuts = {
          key: info.node.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: info.node.title,
          location: info.node.location,
          details: info.node.details,
          header: treeDutsList[0].header,
          test_info: treeDutsList[0].test_info,
        };
      }
      setSelectedTreeDataList([checkedDuts]);
    }
  };
  // const handleSelect = (_, info) => {
  //   const isHasKey = selectedTreeDataList.some(
  //     (item) => item.key === info.node.key,
  //   );
  //   if (isHasKey) {
  //     // 存在 即 要删除key
  //     setSelectedTreeDataList((list) => {
  //       const newList = info.node.children
  //         ? []
  //         : list.filter(
  //             (item) => item.key !== info.node.key && item.key.length !== 3,
  //           );
  //       // 过滤相同key的数组
  //       let result = filterSameSelectedTreeDataList(newList);
  //       console.log({ result, info });
  //       return result;
  //     });
  //   } else {
  //     // 不存在 即 要添加key
  //     const newList = info.node.children
  //       ? info.node.children
  //           .map((item) => ({
  //             key: item.key,
  //             dut: item.title,
  //             location: item.location,
  //             details: info.node.details,
  //           }))
  //           .concat({
  //             key: info.node.key,
  //             dut: info.node.title,
  //             location: info.node.location,
  //             details: info.node.details,
  //           })
  //       : [
  //           {
  //             key: info.node.key,
  //             dut: info.node.title,
  //             location: info.node.location,
  //             details: info.node.details,
  //           },
  //         ];
  //     // TODO， 堆叠模式目前只支持勾选两个duts
  //     setSelectedTreeDataList((list) => {
  //       let result = filterSameSelectedTreeDataList([...list, ...newList]);
  //       if (switchObj.isStack) {
  //         result.slice(0, 2);
  //       } else {
  //         result.slice(0, result.length - 1);
  //       }
  //       console.log({ xx: switchObj.isStack, result });
  //       return result;
  //     });
  //   }
  // };

  const checkedKeys = selectedTreeDataList.map((item) => item.key);
  return (
    <>
      <Tree
        checkable
        checkedKeys={checkedKeys}
        defaultExpandAll
        onCheck={handleCheck}
        // onSelect={handleSelect}
        treeData={treeDutsList}
        blockNode
      />
    </>
  );
};

export default TreePage;
