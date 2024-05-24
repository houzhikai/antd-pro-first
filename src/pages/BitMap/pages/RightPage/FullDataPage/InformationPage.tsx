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
  const infoList = selectedTreeDataList[length - 1]?.details || [];
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
