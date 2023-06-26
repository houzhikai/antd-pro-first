import { useModel } from '@umijs/max';
import { Button } from 'antd';

const Save = () => {
  const { title, mergeArrList } = useModel('useTestFlowModel');

  const handleSave = () => {
    // ` `换行也可以使console表示换行
    const startNote = [
      `et::MainFlow('${title}'), true,
    `,
    ];

    const outputTestFlowList = mergeArrList.map(
      (item: any, index) =>
        `et::Unit<${item.source}>('${item.source}'${
          index === 0 ? ', true' : ''
        }, ${item.child.map((p, idx) => `et::Port(${idx}, ${p.target}),`)}
          `,
    );

    const outputTestFlowBuilder = startNote.concat(outputTestFlowList).join('');
    console.log('mergeArrList=======', mergeArrList);
    console.log('outputTestFlowBuilder=======', outputTestFlowBuilder);
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
