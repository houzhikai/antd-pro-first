import React from 'react';
import { Descriptions } from 'antd';
import { ProviderFunc } from '../../../components/containers';
import '../../../index.css';

const InformationPage = () => {
  const { selectedTreeDataList } = ProviderFunc();
  // const length = selectedTreeDataList.length;

  // const getObjConvertList = (obj) => {
  //   if (typeof obj === 'object' && obj !== null && !(obj instanceof Array)) {
  //     return (
  //       Object.keys(obj).map((key) => ({
  //         key: key,
  //         label: key,
  //         children: String(obj[key]),
  //       })) || []
  //     );
  //   } else {
  //     return [];
  //   }
  // };

  // const headerObj = selectedTreeDataList[length - 1]?.header || {};
  // const headerList = getObjConvertList(headerObj);

  // const testInfoObj = selectedTreeDataList[length - 1]?.test_info || {};
  // const testInfoList = getObjConvertList(testInfoObj.afm_param);

  // const detailsObj = selectedTreeDataList[length - 1]?.details || {};
  // const detailsList = getObjConvertList(detailsObj);
  const xxx = [
    {
      fileName: 'lotid001_waferid001_202405212033_x3y5.phy',
      failCount: 11,
      blFailCount: 4,
      wlFailCount: 10,
      status: 'FAIL',
      x_num: '7',
      y_num: '10',
      width_mode: '8',
      endian: 'little',
      pin_list: '',
    },
    {
      fileName: 'lotid001_waferid001_202405212032_x-2y-2.phy',
      failCount: 11,
      blFailCount: 4,
      wlFailCount: 10,
      status: 'FAIL',
      x_num: '7',
      y_num: '10',
      width_mode: '8',
      endian: 'little',
      pin_list: '',
    },
  ];
  // show select dut details
  const infoList = xxx.map((item) => {
    return Object.keys(item).map((key) => ({
      key: key,
      label: key,
      children: String(item[key]),
    }));
  });
  const labelStyle = {
    padding: '1px 8px',
  };
  console.log({ infoList });
  return (
    <>
      <div style={{ margin: '0', fontSize: 18 }}>Info</div>
      <div className="information-page">
        {infoList.map((item, index) => (
          <Descriptions
            key={index}
            title={<div style={{ margin: 0 }}>dut{index + 1}</div>}
            labelStyle={labelStyle}
            contentStyle={labelStyle}
            column={1}
            bordered
            items={item}
            size="small"
          />
        ))}
      </div>
    </>
  );
};

export default InformationPage;
