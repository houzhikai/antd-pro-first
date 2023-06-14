import { useModel } from '@umijs/max';
import { Button } from 'antd';

const Save = () => {
  const { nodes, newArr } = useModel('useTestFlowModel');
  const handleSave = () => {
    // 开始节点name
    const startNodeName = nodes
      .filter((item) => item.type === 'input')
      .map((item) => item.data.label)[0]
      .toUpperCase();

    const xxx = `
   et::MainFlow(25QH256CHIQ_SPIFalsh), true,
       et::Unit<${startNodeName}>('${startNodeName}',true, et::Port(0,'IO_ADC_OS'), et::Port(1,'FB1', Bin))
       et::Unit<IO_ADC_OS>('IO_ADC_OS', et::Port(0,'IO_PPMU_OS'), et::Port(1,'FB1', Bin))
   `;
    console.log('xxx', newArr);
    return xxx;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'end', marginBottom: 20 }}>
      <Button type="primary" onClick={handleSave}>
        保存
      </Button>
    </div>
  );
};

export default Save;
