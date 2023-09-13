import React from 'react';
// import styles from '../index.less';
import { useModel } from '@umijs/max';
import { Modal, Divider, message } from 'antd';
// import FormModal from './FormModal';
import CustomFormModal from './components/CustomFormModal';

const BinMapForm = () => {
  const {
    openBinMapForm,
    setOpenBinMapForm,
    hardBinData,
    softBinData,
    hardBinNameList,
    setHardBinData,
    setSoftBinData,
    options,
    setHardBinNameList,
    repeatHardBinNameList,
    repeatSoftBinNameList,
  } = useModel('useDrawModel');

  const handleOk = () => {
    // hardBin 所有值不能为空
    let isShowMessage = false;
    hardBinData.map((item) => {
      const keys = Object.values(item);
      if (!keys || keys.includes('') || keys.includes(undefined as any)) {
        isShowMessage = true;
      }
      return isShowMessage;
    });
    // softBin 所有值不能为空
    softBinData.map((item) => {
      delete item.Comment;
      const keys = Object.values(item);
      if (keys.includes('') || keys.includes(undefined as any)) {
        isShowMessage = true;
      }
      return isShowMessage;
    });

    // 校验HardBin存不存在
    const hardBinList = Array.from(
      new Set(hardBinNameList.map((item) => item.label)),
    );
    const softBinList = Array.from(
      new Set(softBinData.map((item) => item.HardBin)),
    );
    const includes = (arr1, arr2) => {
      return arr2.every((val) => arr1.includes(val));
    };
    // 最终判断校验
    if (isShowMessage) {
      message.error('值不能为空');
    } else if (!includes(hardBinList, softBinList)) {
      // message.error('请重新选择HardBin');
      message.error('保存失败');
    } else if (
      repeatHardBinNameList.length > 0 ||
      repeatSoftBinNameList.length > 0
    ) {
      message.error('Name不唯一');
    } else {
      message.success('保存成功');
      // setOpenBinMapForm(false);
    }
  };
  const handleCancel = () => {
    setOpenBinMapForm(false);
    setHardBinData(options.HardBin);
    setSoftBinData(options.SoftBin);
    setHardBinNameList(
      options.HardBin.map((item) => item.Name).map((item) => ({
        value: item,
        label: item,
      })),
    );
  };

  return (
    <Modal
      width={1200}
      title="BinMap"
      maskClosable={false}
      open={openBinMapForm}
      okText="保存"
      cancelText="取消"
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true} // 关闭时销毁 Modal 里的子元素，关闭时相当于取消form的更改
      centered
    >
      <Divider />
      {/* <FormModal /> */}
      <CustomFormModal />
    </Modal>
  );
};

export default BinMapForm;
