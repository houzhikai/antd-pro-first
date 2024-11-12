import { Select } from 'antd';
import React from 'react';
import { ProviderFunc } from '../../../../components/containers';
import { rotateOptions } from '../../../../components/initValues';

const RotatePage = () => {
  const { bitmapData, rotateNumber, setRotateNumber } = ProviderFunc();
  const handleChange = (value) => {
    setRotateNumber(value);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
      <div>Rotate: </div>
      <Select
        value={rotateNumber}
        disabled={bitmapData.data.length === 0}
        onChange={handleChange}
        style={{ width: 80, marginLeft: 8 }}
        options={rotateOptions}
      />
    </div>
  );
};

export default RotatePage;
