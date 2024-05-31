import { Button, message } from 'antd';
import myFetch from '@/components/myFetch';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { generateData } from '@/pages/BitMap/mockData/getGenerateData';

const Convert = () => {
  const {
    switchObj,
    selectedTreeDataList,
    modeSelectedOptions,
    setData,
    vscodeParams,
    bitMapPort,
  } = ProviderFunc();
  const handleClick = async () => {
    const params = {
      mode: switchObj.isStack ? 0 : 1, // 'stack' : 0 'single': 1
      bitmapmode: switchObj.isLogical ? 0 : 1, // 0 ->'logical, 1-> physical'
      selectedDuts: selectedTreeDataList.map((item) => ({
        title: item.dut,
        location: item.location,
      })), // 勾选的DUTS+路径
      convertConf: {
        logicalname: '', // modeSelectedOptions.logical.label,
        logicallocation: modeSelectedOptions.logical.location,
        physicalname: modeSelectedOptions.physical.label,
        physicallocation: modeSelectedOptions.physical.location,
      }, // 模板名称+模板路径 + 配置名称+配置路径
    };

    if (params.selectedDuts.length <= 0) {
      message.error('请选择Duts');
    } else if (
      params.convertConf.physicalname === '' ||
      params.convertConf.physicallocation === ''
    ) {
      message.error('请选择 physical 文件');
    } else {
      console.log(111, params, generateData(5000, switchObj.isStack));
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/converbitmapdata`,
          params,
          isExceptionHand: true,
        });

        console.log({ res });
      } catch (error) {}
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
