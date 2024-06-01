import React from 'react';
import { Tree, message } from 'antd';
import { ProviderFunc } from '../../components/containers';
import myFetch from '../../components/myFetch';

const TreePage = () => {
  const {
    isStack,
    selectedTreeDataList,
    setSelectedTreeDataList,
    physicalFileList,
    vscodeParams,
    setData,
  } = ProviderFunc();

  const handleCheck = async (_, info) => {
    if (isStack) {
      if (info.node.key.length === 3) {
        const xxx = physicalFileList[0].children.slice(0, 2);
        const checkedDuts = xxx.map((item) => ({
          key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: item.title,
          location: item.location,
          details: item.details,
          header: physicalFileList[0].header,
          test_info: physicalFileList[0].test_info,
        }));
        setSelectedTreeDataList(checkedDuts);
      } else {
        const checkedDuts = info.checkedNodes.map((item) => ({
          key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: item.title,
          location: item.location,
          details: item.details,
          header: physicalFileList[0].header,
          test_info: physicalFileList[0].test_info,
        }));
        setSelectedTreeDataList(checkedDuts.slice(0, 2));
      }
    } else {
      // 只能选择一个 勾选框
      let checkedDuts: any = {};
      if (info.node.key.length === 3) {
        const xxx = physicalFileList[0].children[0];
        checkedDuts = {
          key: xxx.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: xxx.title,
          location: xxx.location,
          details: xxx.details,
          header: physicalFileList[0].header,
          test_info: physicalFileList[0].test_info,
        };
      } else {
        checkedDuts = {
          key: info.node.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: info.node.title,
          location: info.node.location,
          details: info.node.details,
          header: physicalFileList[0].header,
          test_info: physicalFileList[0].test_info,
        };
      }
      console.log({ checkedDuts, info });
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:27700/bitmap/getbitmapdata`,
          params: {
            mode: 1,
            physicalDataPath: [
              { fileName: checkedDuts.dut, location: checkedDuts.location },
            ],
          },
          isExceptionHand: true,
        });
        if (res.result === 0) {
          // 接口调用成功后的操作
          setSelectedTreeDataList([checkedDuts]);
          setData(JSON.parse(res.data[0].value) || []);
        } else {
          message.error(res.msg);
        }
      } catch (error) {
        // setIsErrorPage(true);
        setSelectedTreeDataList([checkedDuts]);
      }
    }
  };

  const checkedKeys = selectedTreeDataList.map((item) => item.key);
  return (
    <>
      <Tree
        style={{ height: 'calc(100vh - 47px - 48px - 100px)' }}
        checkable
        checkedKeys={checkedKeys}
        defaultExpandAll
        onCheck={handleCheck}
        treeData={physicalFileList}
        blockNode
      />
    </>
  );
};

export default TreePage;
