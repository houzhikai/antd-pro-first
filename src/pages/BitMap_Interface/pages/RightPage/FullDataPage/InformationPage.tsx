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

  const headerObj = selectedTreeDataList[length - 1]?.header || {};
  const headerList = getObjConvertList(headerObj);

  const testInfoObj = selectedTreeDataList[length - 1]?.test_info || {};
  const testInfoList = getObjConvertList(testInfoObj.afm_param);

  const detailsObj = selectedTreeDataList[length - 1]?.details || {};
  const detailsList = getObjConvertList(detailsObj);

  const infoList = [...headerList, ...testInfoList, ...detailsList];
 
  return (
    <>
      <div style={{ margin: '0', fontSize: 18 }}>Info</div>
      <div className="information-page">
        <Descriptions
          column={1}
          bordered
          items={infoList}
          size="small"
        />
      </div>
    </>
  );
};

export default InformationPage;
