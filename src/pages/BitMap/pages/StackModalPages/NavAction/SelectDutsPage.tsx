import React, { useState } from 'react';
import { Button, Divider, Input, Modal, message } from 'antd';
import CustomFormItemPage from '../../NavPage/CustomFormItemPage';
import myFetch from '../../../components/myFetch';
import { ProviderFunc } from '../../../components/containers';

const SelectDutsPage = () => {
  const { vscodeParams, bitMapPort, setSingleModeData, selectDutsModal, setSelectDutsModal, setTriggerTiming } =
    ProviderFunc();

  const handleOpenModal = () => {
    setSelectDutsModal((obj) => ({ ...obj, open: true }));
  };

  const handleCancel = () => {
    setSelectDutsModal((obj) => ({ ...obj, open: false }));
  };
  const handleImport = async () => {
    const dut1 = {
      fileName: selectDutsModal.dut1.split('/').slice(-1)[0],
      location: selectDutsModal.dut1
        .split('/')
        .slice(0, selectDutsModal.dut1.split('/').length - 1)
        .join('/'),
    };
    const dut2 = {
      fileName: selectDutsModal.dut2.split('/').slice(-1)[0],
      location: selectDutsModal.dut2
        .split('/')
        .slice(0, selectDutsModal.dut2.split('/').length - 1)
        .join('/'),
    };
    const physicalDataPath = [dut1, dut2];
    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getbitmapdata`,
        // 0: Stack 1: single
        params: { mode: 0, physicalDataPath },
        isExceptionHand: true,
        timeout: 100,
      });
      if (res.result === 0) {
        const result = JSON.parse(res.data[0].value);
        const ratio = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getcompressdata?ratio=256`,
          isExceptionHand: true,
          timeout: 100,
        });
        if (ratio.result === 0) {
          setSingleModeData({ data: JSON.parse(ratio.data[0].value || []), info: result.dutInfo });
          setSelectDutsModal((obj) => ({ ...obj, open: false }));
        } else {
          message.error(ratio.msg);
        }
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      message.error('get data error');
    }
  };

  const handleModifyDut1Location = () => {
    setTriggerTiming((obj) => ({
      ...obj,
      stackModeDut1Location: obj.stackModeDut1Location + 1,
    }));
  };

  const handleModifyDut2Location = () => {
    setTriggerTiming((obj) => ({
      ...obj,
      stackModeDut2Location: obj.stackModeDut2Location + 1,
    }));
  };

  return (
    <>
      <Button type='primary' size='small' onClick={handleOpenModal}>
        Select Duts
      </Button>
      <Modal
        title='Select Duts'
        width={1000}
        open={selectDutsModal.open}
        onCancel={handleCancel}
        okText='Import'
        cancelText='Cancel'
        onOk={handleImport}
      >
        <Divider />
        <CustomFormItemPage title='Dut 1:' width={80}>
          <Input style={{ margin: '0 20px', width: 600 }} value={selectDutsModal.dut1} disabled />
          <Button type='primary' onClick={handleModifyDut1Location}>
            Browse Path
          </Button>
        </CustomFormItemPage>
        <CustomFormItemPage title='Dut 2:' width={80}>
          <Input style={{ margin: '0 20px', width: 600 }} value={selectDutsModal.dut2} disabled />
          <Button type='primary' onClick={handleModifyDut2Location}>
            Browse Path
          </Button>
        </CustomFormItemPage>
      </Modal>
    </>
  );
};

export default SelectDutsPage;
