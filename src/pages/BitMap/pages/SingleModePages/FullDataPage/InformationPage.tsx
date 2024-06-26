import React from 'react';
import { Descriptions } from 'antd';
import { ProviderFunc } from '../../../components/containers';
import '../../../index.css';

const InformationPage = () => {
  const { singleModeData } = ProviderFunc();

  // show select dut details, show two duts info
  const infoList = (Object.keys(singleModeData.info).length > 0 ? singleModeData.info : []).map((item) => {
    return Object.keys(item).map((key) => ({
      key: key,
      label: key,
      children: String(item[key]),
    }));
  });

  const labelStyle = {
    padding: '1px 8px',
  };

  return (
    <>
      <div style={{ margin: '0', fontSize: 18 }}>Info</div>
      <div className='information-page'>
        {infoList.map((item, index) => (
          <Descriptions
            key={index}
            title={`dut${index + 1}`}
            labelStyle={labelStyle}
            contentStyle={labelStyle}
            column={1}
            bordered
            items={item}
            size='small'
          />
        ))}
      </div>
    </>
  );
};

export default InformationPage;
