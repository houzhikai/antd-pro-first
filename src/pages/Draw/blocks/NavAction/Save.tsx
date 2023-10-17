import { useModel } from '@umijs/max';
import { Button, Tooltip } from 'antd';
// import save from '@/icon/draw/save.svg';

import styles from '../index.less';

const Save = () => {
  const { title, mergeArrList, nodes, edges } = useModel('useTestFlowModel');

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
    console.log('mergeArrList=======', mergeArrList, nodes, edges);
    console.log('outputTestFlowBuilder=======', outputTestFlowBuilder);
  };

  return (
    <Tooltip placement="bottomLeft" title="Save">
      <div className={styles.gap}>
        {/* <Image
          src={save}
          preview={false}
          width={16}
          className={styles.save}
          onClick={handleSave}
        /> */}
        <Button type="primary" size="small" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Tooltip>
  );
};

export default Save;
