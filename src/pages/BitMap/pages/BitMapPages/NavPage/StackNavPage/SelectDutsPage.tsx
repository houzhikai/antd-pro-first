import React, { useState } from 'react';
import { Button, Divider, Input, Modal, message } from 'antd';
import CustomFormItemPage from '../../../ModalPages/components/CustomFormItemPage';
import { ProviderFunc } from '../../../../components/containers';
import myFetch from '../../../../components/myFetch';
import { GetDetailsViewSize } from '../../DetailsEcharts/components/GetDetailsViewSize';

/** 
 * 二期两个相同的layout dut 进行堆叠
 * 三期需要支持 最多16个dut堆叠，使用 BitMapPages-> NavPage-> MutliDuts 页面替代
 */
const SelectDutsPage = () => {
  const {
    vscodeParams,
    bitMapPort,
    setBitmapData,
    selectDutsModal,
    setSelectDutsModal,
    setTriggerTiming,
    setConfigInfo,
    setScaleNumber,
    scaleNumber,
    setSelectSize,
    setEchartsIndex,
  } = ProviderFunc();

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
        setScaleNumber(256);
        const result = JSON.parse(res.data[0].value);

        const layoutConfig = result.layoutConfig;
        // get bitmap layout
        const config = {
          // dq
          dq: layoutConfig.dq,
          dq_arrange: layoutConfig.dq_arrange,
          // 1M配置，默认D0-D7
          need_dq_direction_reserve: layoutConfig.need_dq_direction_reserve.page_index,
          // block 原点和伸展方向
          continuous_block_arrange: layoutConfig.per_dut_layout.continuous_block_arrange,
          // page 原点和伸展方向
          continuous_page_arrange: layoutConfig.per_dut_layout.per_block_layout.continuous_page_arrange,
          // 目前没有用到该属性， 预留
          is_block_continuous: layoutConfig.per_dut_layout.is_block_continuous,
          // 目前没有用到该属性， 预留
          is_page_continuous: layoutConfig.per_dut_layout.per_block_layout.is_page_continuous,
          // echarts 的 xMax yMax 和 原点位置
          layoutConfig: {
            xMax: layoutConfig.per_dut_layout.x_max,
            yMax: layoutConfig.per_dut_layout.y_max,
            dots: layoutConfig.coordinate_origin,
          },
          // duts 行列个数
          duts: { row: layoutConfig.per_dut_layout.block_row, col: layoutConfig.per_dut_layout.block_col },
          // blocks 行列个数
          blocks: {
            row: layoutConfig.per_dut_layout.per_block_layout.page_row,
            col: layoutConfig.per_dut_layout.per_block_layout.page_col,
          },
          // pages 行列个数
          pages: {
            row: layoutConfig.per_dut_layout.per_block_layout.per_page_layout.wl_row,
            col: layoutConfig.per_dut_layout.per_block_layout.per_page_layout.bl_col,
          },
        };
        setConfigInfo(config);

        const ratio = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getcompressdata?ratio=256`,
          isExceptionHand: true,
          timeout: 100,
        });
        if (ratio.result === 0) {
          setBitmapData({ data: JSON.parse(ratio.data[0].value || []), info: result.dutInfo });
          setSelectDutsModal((obj) => ({ ...obj, open: false }));
          const scrollableDiv: any = document.getElementById('wholeEcharts');
          if (scrollableDiv) {
            GetDetailsViewSize(false, config, 256, setSelectSize, setEchartsIndex);
          }
        } else {
          message.error(ratio.msg);
        }
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      message.error('Error: Get Scale failed.');
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
        maskClosable={false}
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
