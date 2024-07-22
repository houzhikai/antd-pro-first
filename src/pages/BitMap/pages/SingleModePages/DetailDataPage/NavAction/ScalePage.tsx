import React from 'react';
import { Select, message } from 'antd';
import { ProviderFunc } from '../../../../components/containers';
import { scaleNumberOptions } from '../../../../components/initValues';
import myFetch from '../../../../components/myFetch';
import { GetDetailsViewSize } from '../../../StackModalPages/MultiEcharts/components/GetDetailsViewSize';

const ScalePage = () => {
  const {
    scaleNumber,
    setScaleNumber,
    vscodeParams,
    bitMapPort,
    setSingleModeData,
    singleModeData,
    setEchartsIndex,
    configInfo,
    setSelectSize,
  } = ProviderFunc();

  const handleChange = async (value) => {
    // TODO， 待删除
    setScaleNumber(value);
    setEchartsIndex();

    console.log('handleChange---------------', {
      configInfo,
      scaleNumber,
      setSelectSize,
      setEchartsIndex,
    });
    GetDetailsViewSize(
      false,
      configInfo,
      value,
      setSelectSize,
      setEchartsIndex,
    );
    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getcompressdata?ratio=${value}`,
        isExceptionHand: true,
        timeout: 100,
      });
      if (res.result === 0) {
        setScaleNumber(value);
        setSingleModeData((obj) => ({
          ...obj,
          data: JSON.parse(res.data[0].value) || [],
        }));
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      message.error('Scale fail');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
      <div>Scale:</div>
      <Select
        value={scaleNumber}
        disabled={singleModeData.data.length === 0}
        onChange={handleChange}
        style={{ width: 80, marginLeft: 8 }}
        options={scaleNumberOptions}
      />
    </div>
  );
};

export default ScalePage;
