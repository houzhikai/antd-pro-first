import React from 'react';
import { Button } from 'antd';
import { ProviderFunc } from '../../../../components/containers';

const Convert = () => {
  const { setConvertModalObj } = ProviderFunc();
  const handleClick = async () => {
    setConvertModalObj((obj) => ({ ...obj, open: true }));
  };
  return (
    <Button
      style={{ marginLeft: 10 }}
      onClick={handleClick}
      type="primary"
      size="small"
    >
      Convert
    </Button>
  );
};

export default Convert;
