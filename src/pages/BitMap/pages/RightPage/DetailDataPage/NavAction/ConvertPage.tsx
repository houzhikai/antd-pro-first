import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { generateData } from '@/pages/BitMap/mockData/getGenerateData';
import { Button, message } from 'antd';
import React from 'react';

const Convert = () => {
  const { switchObj, selectedTreeDataList, modeSelectedOptions, setData } =
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
        logicalname: '', // modeSelectedOptions.logical.label,
        logicallocation: modeSelectedOptions.logical.location,
        physicalname: modeSelectedOptions.physical.label,
        physicallocation: modeSelectedOptions.physical.location,
      }, // 模板名称+模板路径 + 配置名称+配置路径
    };
    console.log(111, xxx, generateData(5000, switchObj.isStack));
    if (xxx.selectedDuts.length <= 0) {
      message.error('请选择Duts');
    } else if (xxx.xxx.physicalname === '' || xxx.xxx.physicallocation === '') {
      message.error('请选择 physical 文件');
    } else {
      setData(generateData(5000, switchObj.isStack));
    }
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
