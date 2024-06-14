import { mockInfo } from '@/pages/BitMap/mockData/mockInfo';
import { Descriptions } from 'antd';
import React from 'react';

const WaferMapInfoPage = () => {
  const infoList =
    Object.keys(mockInfo).map((key) => ({
      key: key,
      label: key,
      children: String(mockInfo[key]),
    })) || [];

  const labelStyle = {
    padding: '1px 8px',
  };
  return (
    <div>
      <div style={{ margin: '0', fontSize: 18 }}>Wafer Info</div>
      <div className="wafermap-info-page">
        <Descriptions
          labelStyle={labelStyle}
          contentStyle={labelStyle}
          column={1}
          bordered
          items={infoList}
          size="small"
        />
      </div>
    </div>
  );
};

export default WaferMapInfoPage;
