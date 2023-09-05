import React from 'react';
// import styles from '../index.less';
import { useModel } from '@umijs/max';
import { Modal, Divider } from 'antd';
// import FormModal from './FormModal';
import CustomFormModal from './CustomFormModal';

const BinMapForm = () => {
  const { openBinMapForm, setOpenBinMapForm } = useModel('useDrawModel');

  const handleOk = () => {
    setOpenBinMapForm(false);
  };
  const handleCancel = () => {
    setOpenBinMapForm(false);
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
