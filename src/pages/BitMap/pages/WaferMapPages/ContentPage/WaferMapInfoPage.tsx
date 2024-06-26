import React from 'react';
import { Descriptions } from 'antd';
import { ProviderFunc } from '../../../components/containers';

const WaferMapInfoPage = () => {
  const { wafermapData } = ProviderFunc();
  const infoList =
    Object.keys(wafermapData.info).map((key) => ({
      key: key,
      label: key,
      children: String(wafermapData.info[key]),
    })) || [];

  const labelStyle = {
    padding: '1px 8px',
  };
  return (
    <div>
      {infoList.length > 0 && (
        <>
          <div style={{ margin: '0', fontSize: 18 }}>Wafer Info</div>
          <div className='wafermap-info-page'>
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
      )}
    </div>
  );
};

export default WaferMapInfoPage;
