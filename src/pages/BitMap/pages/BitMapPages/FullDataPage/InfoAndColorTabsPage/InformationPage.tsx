import React from 'react';
import { Descriptions, Tabs } from 'antd';
import { ProviderFunc } from '../../../../components/containers';
import '../../../../index.css';

const InformationPage = () => {
  const { bitmapData, width } = ProviderFunc();

  // show select dut details, show two duts info
  // const infoList = (Object.keys(bitmapData.info).length > 0 ? bitmapData.info : []).map((item) => {
  //   return Object.keys(item).map((key) => ({
  //     key: key,
  //     label: key,
  //     children: String(item[key]),
  //   }));
  // });

  const labelStyle = {
    padding: '1px 8px',
  };

  const items = (Object.keys(bitmapData.info).length > 0 ? bitmapData.info : []).map((item, index) => {
    const children = Object.keys(item).map((key) => ({
      key: key,
      label: key,
      children: String(item[key]),
    }));
    return {
      key: index + 1,
      label: `Dut ${index + 1}`,
      children: <Descriptions
        key={index}
        // title={`dut${index + 1}`}
        labelStyle={labelStyle}
        contentStyle={labelStyle}
        column={1}
        bordered
        items={children}
        size='small'
      />
    }
  })

  return (
    <>
      {/* <div style={{ margin: '0', fontSize: 18, width }}>Info</div> */}
      <div className='information-page'>
        <Tabs defaultActiveKey='1' items={items} />
        {/* {infoList.map((item, index) => (
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
        ))} */}
      </div>
    </>
  );
};

export default InformationPage;
