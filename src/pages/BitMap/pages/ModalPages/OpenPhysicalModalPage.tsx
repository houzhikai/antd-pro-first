import { Button, Modal } from 'antd';
import React from 'react';
import { ProviderFunc } from '../../components/containers';
import myFetch from '@/components/myFetch';

const OpenPhysicalModalPage = () => {
  const { openPhysicalObj, setOpenPhysicalObj, switchObj } = ProviderFunc();

  const handleOk = () => {
    setOpenPhysicalObj((obj) => ({ ...obj, open: false }));
  };

  const handleCancel = () => {
    setOpenPhysicalObj((obj) => ({ ...obj, open: false }));
  };

  const handleUpload = async () => {
    const params = {
      fileType: 'physical',
      bitmapmode: switchObj.isLogical ? 0 : 1, // 0 ->'logical, 1-> physical'
      mode: switchObj.isStack ? 0 : 1, // 'stack' : 0 'single': 1
      selectedDuts: [], // 勾选的DUTS+路径, 可以不选择
      // 选择物理位图转换文件， 可以为空
      convertConf: {
        logicalname: '', // modeSelectedOptions.logical.label,
        logicallocation: '',
        physicalname: '',
        physicallocation: '',
      }, // 模板名称+模板路径 + 配置名称+配置路径
      physicalDataPath: [
        {
          id: 0,
          fileName: 'lotid001_waferid001_202405212032_x0y2.phy',
          location: '/home/kkuser/public/partner/Wafer001/',
        },
        {
          id: 1,
          fileName: 'lotid001_waferid001_202405212032_x0y0.phy',
          location: '/home/kkuser/public/partner/Wafer001/',
        },
      ],
    };
    const res = await myFetch({
      // url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/converbitmapdata`,
      url: `http://192.168.3.71:27001/bitmap/converbitmapdata`,
      params,
      isExceptionHand: true,
    });
    console.log({ res });
  };
  return (
    <Modal
      width={1000}
      title="Custom Mode List"
      open={openPhysicalObj.open}
      okText="Convert"
      cancelText="Cancel"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={handleUpload}>
        upload
      </Button>
    </Modal>
  );
};

export default OpenPhysicalModalPage;
