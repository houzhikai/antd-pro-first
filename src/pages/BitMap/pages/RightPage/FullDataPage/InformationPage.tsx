import React from 'react';
import { Descriptions } from 'antd';
import { ProviderFunc } from '../../../components/containers';
import '../../../index.css';

const InformationPage = () => {
  const { selectedTreeDataList } = ProviderFunc();
  const length = selectedTreeDataList.length;

  const getObjConvertList = (obj) => {
    if (typeof obj === 'object' && obj !== null && !(obj instanceof Array)) {
      return (
        Object.keys(obj).map((key) => ({
          key: key,
          label: key,
          children: String(obj[key]),
        })) || []
      );
    } else {
      return [];
    }
  };

  // const headerObj = selectedTreeDataList[length - 1]?.header || {};
  // const headerList = getObjConvertList(headerObj);

  // const testInfoObj = selectedTreeDataList[length - 1]?.test_info || {};
  // const testInfoList = getObjConvertList(testInfoObj.afm_param);

  // const detailsObj = selectedTreeDataList[length - 1]?.details || {};
  // const detailsList = getObjConvertList(detailsObj);

  // show select dut details
  const infoList = selectedTreeDataList
    .map((item) => {
      const detailsList =
        Object.keys(item.details).map((key) => ({
          key: key,
          label: key,
          children: String(item.details[key]),
        })) || [];
      return [...detailsList];
    })
    .flat(Infinity);

  const labelStyle = {
    padding: '1px 8px',
  };

  return (
    <>
      <div style={{ margin: '0', fontSize: 18 }}>Info</div>
      <div className='information-page'>
        <Descriptions
          labelStyle={labelStyle}
          contentStyle={labelStyle}
          column={1}
          bordered
          items={infoList}
          size='small'
        />
      </div>
    </>
  );
};

export default InformationPage;
