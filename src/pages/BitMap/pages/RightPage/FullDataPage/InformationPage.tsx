import { Descriptions } from 'antd';
// import { comprehensiveInfo } from '@/pages/BitMap/components/initValues';
import '../../../index.css';
import { ProviderFunc } from '@/pages/BitMap/components/containers';

const InformationPage = () => {
  const { selectedTreeDataList } = ProviderFunc();
  const labelStyle = {
    width: 100,
    background: '#e5f2f8',
    padding: '8px 16px',
    // border: '1px solid #fff',
  };
  const length = selectedTreeDataList.length;

  const getObjConvertList = (obj) => {
    if (typeof obj === 'object' && obj !== null && !(obj instanceof Array)) {
      return (
        Object.keys(obj).map((key) => ({
          key: key,
          label: key,
          children: `${obj[key]}`,
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
          labelStyle={labelStyle}
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
