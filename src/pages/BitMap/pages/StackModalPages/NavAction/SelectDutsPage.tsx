import { Button, Divider, Input, Modal } from 'antd';
import React, { useState } from 'react';
import CustomFormItemPage from '../../NavPage/CustomFormItemPage';

const SelectDutsPage = () => {
  const [selectDutsModal, setSelectDutsModal] = useState({
    open: false,
    dut1: '/var/fake/output/lotId/waferId/timestamp/physical/dutX0Y0.phy',
    dut2: '/var/fake/output/lotId/waferId/timestamp/physical/dutX3Y3.phy',
  });

  const handleOpenModal = () => {
    setSelectDutsModal((obj) => ({ ...obj, open: true }));
  };

  const handleCancel = () => {
    setSelectDutsModal((obj) => ({ ...obj, open: false }));
  };
  const handleImport = () => {
    console.log(111, selectDutsModal);
  };

  return (
    <>
      <Button type="primary" size="small" onClick={handleOpenModal}>
        Select Duts
      </Button>
      <Modal
        title="Select Duts"
        width={1200}
        open={selectDutsModal.open}
        onCancel={handleCancel}
        okText="Import"
        cancelText="Cancel"
        onOk={handleImport}
      >
        <Divider />
        <CustomFormItemPage title="Dut 1:" width={80}>
          <Input
            style={{ margin: '0 20px', width: 800 }}
            value={selectDutsModal.dut1}
            disabled
          />
          <Button type="primary">Browse Path</Button>
        </CustomFormItemPage>
        <CustomFormItemPage title="Dut 2:" width={80}>
          <Input
            style={{ margin: '0 20px', width: 800 }}
            value={selectDutsModal.dut2}
            disabled
          />
          <Button type="primary">Browse Path</Button>
        </CustomFormItemPage>
      </Modal>
    </>
  );
};

export default SelectDutsPage;
