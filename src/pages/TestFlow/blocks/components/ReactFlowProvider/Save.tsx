import { useModel } from '@umijs/max';
import { Button } from 'antd';

const Save = () => {
  const { newArr, title } = useModel('useTestFlowModel');
  const handleSave = () => {
    // ` `换行也可以使console表示换行
    const startNote = [
      `et::MainFlow('${title}'), true,
    `,
    ];
    //   const xxx = `
    //  et::MainFlow(25QH256CHIQ_SPIFalsh), true,
    //      et::Unit<${startNodeName}>('${startNodeName}',true, et::Port(0,'IO_ADC_OS'), et::Port(1,'FB1', Bin))
    //      et::Unit<IO_ADC_OS>('IO_ADC_OS', et::Port(0,'IO_PPMU_OS'), et::Port(1,'FB1', Bin))
    //  `;
    // console.log('xxx', newArr);
    // return xxx;
    const xxx = newArr.map(
      (item, index) =>
        `et::Unit<${item.source}>('${item.source}'${
          index === 0 ? ', true' : ''
        }, et::Port(0, ${item.target}), et::Port(1, 'FB1', Bin)) 
        `,
    );
    const splitArr = startNote.concat(xxx).join('');
    console.log('xxx', xxx, splitArr);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'end',
        marginBottom: 20,
        marginLeft: 20,
      }}
    >
      <Button type="primary" onClick={handleSave}>
        保存流程图
      </Button>
    </div>
  );
};

export default Save;
