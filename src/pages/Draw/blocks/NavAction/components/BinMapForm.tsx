import React from 'react';
// import styles from '../index.less';
import { useModel } from '@umijs/max';
import { Modal } from 'antd';
import FormModal from './FormModal';

const BinMapForm = () => {
  const { openBinMapForm, setOpenBinMapForm } = useModel('useDrawModel');

  const handleOk = () => {
    setOpenBinMapForm(false);
  };
  const handleCancel = () => {
    setOpenBinMapForm(false);
  };
  console.log({ openBinMapForm });
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
    >
      <FormModal />
    </Modal>
  );
};

export default BinMapForm;
