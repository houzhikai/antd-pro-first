// import { useModel } from '@umijs/max';
import { Button, Tooltip } from 'antd';
// import save from '@/icon/draw/save.svg';

import styles from '../index.less';
// import saveFlow from '@/components/saveFlow';
// import analyzeFlow from '@/components/analyzeFlow';
import { saveJsonFile } from '@/components/saveFlow/saveJsonFle';
import { testFile } from '@/components/analyzeFlow/testFile';
import flow2 from '@/components/dataList/draw/flow2.json';

const Save = () => {
  // const { title, mergeArrList, nodes, edges } = useModel('useTestFlowModel');
  // const { flows } = useModel('useDrawModel');

  const handleSave = () => {
    // ` `换行也可以使console表示换行
    // const xxx = saveFlow(analyzeFlow(flows));
    const xxx = saveJsonFile(testFile(flow2));
    console.log('输出JSON', xxx);
    // const startNote = [
    //   `et::MainFlow('${title}'), true,
    // `,
    // ];

    // const outputTestFlowList = mergeArrList.map(
    //   (item: any, index) =>
    //     `et::Unit<${item.source}>('${item.source}'${
    //       index === 0 ? ', true' : ''
    //     }, ${item.child.map((p, idx) => `et::Port(${idx}, ${p.target}),`)}
    //       `,
    // );

    // const outputTestFlowBuilder = startNote.concat(outputTestFlowList).join('');
    // console.log('mergeArrList=======', mergeArrList, nodes, edges);
    // console.log('outputTestFlowBuilder=======', outputTestFlowBuilder);
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
