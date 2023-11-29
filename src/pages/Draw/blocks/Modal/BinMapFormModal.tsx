import React from 'react';
// import styles from '../index.less';
import { useModel } from '@umijs/max';
import { Modal, Divider, message } from 'antd';
// import FormModal from './FormModal';
// import CustomFormModal from './components/CustomFormModal';
import BinMapFormUpdate from './components/BinMapFormUpdate';
import { splitDataSource } from './components/BinMapFunc';

const BinMapFormModal = () => {
  const {
    openBinMapForm,
    setOpenBinMapForm,
    setHardBinData,
    setSoftBinData,
    options,
    setHardBinNameList,
    dataSource,
    verifyBinMapObj,
  } = useModel('useDrawModel');

  const handleOk = () => {
    // const xxx = dataSource.fil
    if (verifyBinMapObj.SoftBinNum || verifyBinMapObj.SoftBin) {
      message.error('Data save failure', 5);
    } else {
      const binMapList = splitDataSource(dataSource);
      message.success('Data save success', 5);
      console.log('save', dataSource, binMapList, verifyBinMapObj.SoftBinNum);
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
      okText="Save"
      cancelText="Cancel"
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true} // 关闭时销毁 Modal 里的子元素，关闭时相当于取消form的更改
      centered
    >
      <Divider />
      {/* <FormModal /> */}
      {/* <CustomFormModal /> */}
      <BinMapFormUpdate />
    </Modal>
  );
};

export default BinMapFormModal;
