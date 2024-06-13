import React from 'react';
import { Divider, Modal, message } from 'antd';
import { ProviderFunc } from '../../components/containers';
import PhysicalTagList from './components/PhysicalTagList';
import myFetch from '../../components/myFetch';

const ModeModalPage = () => {
  const { convertModalObj, setConvertModalObj, vscodeParams, bitMapPort, setLoading } = ProviderFunc();

  const handleOk = async () => {
    const params = {
      selectSrcDataDir: convertModalObj.sourceDataLocation, // 选择源数据目录
      convertMode: 1, // 0 ->'logical, 1-> physical'
      convertConf: {
        logicalname: '',
        logicallocation: '',
        physicalname: convertModalObj.scrambleCfg.fileName,
        physicallocation: convertModalObj.scrambleCfg.location,
      }, // 模板名称+模板路径 + 配置名称+配置路径
      output: convertModalObj.physicalOutputLocation, // 物理文件输出目录
    };

    if (params.selectSrcDataDir === '') {
      message.error('Source data location is empty');
    } else if (params.convertConf.physicalname === '' || params.convertConf.physicallocation === '') {
      message.error('Please select scrambleCfg ');
    } else if (params.output === '') {
      message.error('Physical Output is empty');
    } else {
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/convertbitmapdata`,
          params,
          isExceptionHand: true,
        });
        if (res.result === 0) {
          //  接口调用成功的操作
          setConvertModalObj((obj) => ({ ...obj, open: false }));
          setLoading(true);
        } else {
          message.error(res.msg);
        }
      } catch (error) {
        message.error('convert fail');
      }
    }
  };

  const handleCancel = () => {
    setConvertModalObj((obj) => ({ ...obj, open: false }));
  };

  return (
    <Modal
      width={1000}
      title='Convert List'
      open={convertModalObj.open}
      okText='Convert'
      cancelText='Cancel'
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      <Divider />
      <PhysicalTagList />
    </Modal>
  );
};

export default ModeModalPage;
