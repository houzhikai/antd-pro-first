import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { Button } from 'antd';
import React from 'react';

const Convert = () => {
  const { switchObj, selectedTreeDataList, modeSelectedOptions } =
    ProviderFunc();
  const handleClick = () => {
    const xxx = {
      mode: switchObj.isStack ? 'stack' : 'single',
      bitmapmode: switchObj.isLogical ? 'logical' : 'physical',
      selectedDuts: selectedTreeDataList.map((item) => ({
        dut: item.dut,
        location: item.location,
      })), // 勾选的DUTS+路径
      xxx: {
        logicalname: modeSelectedOptions.logical.label,
        logicallocation: modeSelectedOptions.logical.location,
        physicalname: modeSelectedOptions.physical.label,
        physicallocation: modeSelectedOptions.physical.location,
      }, // 模板名称+模板路径 + 配置名称+配置路径
    };
    console.log(111, xxx);
  };
  return (
    <Button style={{ marginLeft: 30 }} onClick={handleClick} type="primary">
      Convert
    </Button>
  );
};

export default Convert;
