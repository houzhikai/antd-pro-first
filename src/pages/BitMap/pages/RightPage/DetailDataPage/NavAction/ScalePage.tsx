import React from 'react';
import { Select, message } from 'antd';
import { ProviderFunc } from '../../../../components/containers';
import { scaleNumberOptions } from '../../../../components/initValues';
import myFetch from '../../../../components/myFetch';

const ScalePage = () => {
  const {
    scaleNumber,
    setScaleNumber,
    data,
    vscodeParams,
    bitMapPort,
    setData,
  } = ProviderFunc();

  const handleChange = async (value) => {
    setScaleNumber(value);

    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getcompressdata?ratio=${value}`,
        isExceptionHand: true,
        timeout: 10,
      });
      if (res.result === 0) {
        setScaleNumber(value);
        setData(JSON.parse(res.data[0].value) || []);
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      message.error('Scale fail');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>Scale:</div>
      <Select
        value={scaleNumber}
        disabled={data.length === 0}
        onChange={handleChange}
        style={{ width: 80, marginLeft: 8 }}
        options={scaleNumberOptions}
      />
    </div>
  );
};

export default ScalePage;
