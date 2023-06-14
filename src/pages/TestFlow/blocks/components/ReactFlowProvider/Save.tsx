import { useModel } from '@umijs/max';
import { Button } from 'antd';

const Save = () => {
  const { nodes, edges } = useModel('useTestFlowModel');
  const newObj = { source: '', target: '' };
  const newNodeSource: any = [];
  const newNodeTarget: any = [];
  const handleSave = () => {
    console.log('node', nodes);
    console.log('edges', edges);

    // 开始节点name
    const startNodeName = nodes
      .filter((item) => item.type === 'input')
      .map((item) => item.data.label)[0]
      .toUpperCase();

    // 获取单个流程
    nodes.forEach((node) =>
      edges.forEach((edge) => {
        // source
        if (edge.source === node.id) {
          newObj.source = node.data.label;
          return newNodeSource.push(node.data.label);
        }
        // target
        if (edge.target === node.id) {
          return newNodeTarget.push(node.data.label);
        }
      }),
    );
    const newArr = newNodeSource.map((item, index) => ({
      source: item,
      target: newNodeTarget[index],
    }));

    const xxx = `
   et::MainFlow(25QH256CHIQ_SPIFalsh), true,
       et::Unit<${startNodeName}>('${startNodeName}',true, et::Port(0,'IO_ADC_OS'), et::Port(1,'FB1', Bin))
       et::Unit<IO_ADC_OS>('IO_ADC_OS', et::Port(0,'IO_PPMU_OS'), et::Port(1,'FB1', Bin))
   `;
    console.log('xxx', newObj, newNodeSource, newNodeTarget, newArr);
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
