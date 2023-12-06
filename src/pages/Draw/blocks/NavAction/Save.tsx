import { useModel } from '@umijs/max';
import { Button, Tooltip, message } from 'antd';
// import save from '@/icon/draw/save.svg';

import styles from '../index.less';
import { verifyCloseLoopEdges } from '@/components/verifyClosedLoopEdges';
import { saveJsonFile } from '@/components/saveFlow/saveJsonFle';
// import { testFile } from '@/components/analyzeFlow/testFile';
// import saveFlow from '@/components/saveFlow';
// import analyzeFlow from '@/components/analyzeFlow';
// import { saveJsonFile } from '@/components/saveFlow/saveJsonFle';
import { testFile } from '@/components/analyzeFlow/testFile';
import { saveMainFlow } from '@/components/saveFlow/saveMainFlow';
// import flow2 from '@/components/dataList/draw/flow2.json';

const Save = () => {
  const { nodes, edges } = useModel('useTestFlowModel');
  const { activeTestOrFlowItemParams, activeTestOrFlowItem, flow2 } =
    useModel('useDrawModel');

  const handleSave = () => {
    const verifyCloseLoopEdge = verifyCloseLoopEdges(edges);
    if (verifyCloseLoopEdge) {
      message.error('Save flow fail');
    } else {
      const flows = {
        globalSettings: [{ key: '', value: '' }],
        mainflowList: [
          {
            flowEdges: edges,
            flowNodes: nodes,
            flowName: activeTestOrFlowItem,
            flowParams: activeTestOrFlowItemParams,
          },
        ],
      };
      console.log(
        11,
        saveMainFlow(flows),
        'saveJsonFile',
        saveJsonFile(testFile(flow2)),
      );
      // console.log({
      //   // flowsParams: testFile(flows),
      //   nodes,
      //   units,
      //   xxx: testFile(flow2),
      //   save: saveJsonFile(flows),
      //   flow2,
      //   flows,
      //   activeTestOrFlowItemParams,
      // });
      // console.log('输出JSON', xxx);
      // console.log('校验闭环', verifyCloseLoopEdge, { nodes, edges, flows });
      // const xxx = saveJsonFile(testFile(flow2));
      // console.log(
      //   { xxx, activeTestOrFlowItemParams, activeTestOrFlowItem },
      //   testFile(flow2),
      // );
      // const mainflowList =
      // const flows = {
      //   globalSettings: [{key: '',value: ''}],
      //   testFlows: [...mainflowList, ...subflowList],
      // }
    }
    // ` `换行也可以使console表示换行
    // const xxx = saveFlow(analyzeFlow(flows));
    // const xxx = saveJsonFile(testFile(flow2));
    // const flows = {
    //   globalSettings: [{ key: '', value: '' }],
    //   mainflowList: [
    //     {
    //       flowEdges: edges,
    //       flowNodes: nodes,
    //       flowName: activeTestOrFlowItem,
    //       flowParams: activeTestOrFlowItemParams,
    //     },
    //   ],
    // };
    // console.log({ nodes, edges, flows }, saveJsonFile(flows));
    // console.log('输出JSON', xxx);
    // console.log('校验闭环', verifyCloseLoopEdge);
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
        <Button type="primary" size="small" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Tooltip>
  );
};

export default Save;
