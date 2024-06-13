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
    bitMapPort,
    setData,
    setScaleNumber,
  } = ProviderFunc();

  const handleCheck = async (_, info) => {
    if (isStack) {
      if (info.node.key.length === 3) {
        const xxx = physicalFileList[0].children.slice(0, 2);
        const checkedDuts = xxx.map((item) => ({
          key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: item.title,
          name: item.name,
          location: item.location,
          details: item.details,
        }));
        setSelectedTreeDataList(checkedDuts);
      } else {
        const checkedDuts = info.checkedNodes.map((item) => ({
          key: item.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: item.title,
          name: item.name,
          location: item.location,
          details: item.details,
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
          name: xxx.name,
          location: xxx.location,
          details: xxx.details,
        };
      } else {
        checkedDuts = {
          key: info.node.key, // 仅在 checkedKeys 中使用，convert 时需要将其去除
          dut: info.node.title,
          name: info.node.name,
          location: info.node.location,
          details: info.node.details,
        };
      }
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getbitmapdata`,
          params: {
            mode: 1, // 0: stack, 1: single,
            physicalDataPath: [{ title: checkedDuts.name, location: checkedDuts.location }],
          },
          isExceptionHand: true,
          timeout: 100,
        });
        if (res.result === 0) {
          setScaleNumber(1);
          setSelectedTreeDataList([checkedDuts]);
          setData(JSON.parse(res.data[0].value) || []);
        } else {
          message.error(res.msg);
        }
      } catch (error) {
        message.error('Get bitmap data fail');
      }
    }
  };

  const checkedKeys = selectedTreeDataList.map((item) => item.key);
  return (
    <>
      <Tree
        style={{ height: 'calc(100vh - 47px - 48px - 100px)', overflowY: 'auto', overflowX: 'hidden' }}
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
