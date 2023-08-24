import { mainFlowEdges } from './components/CustomNode/initEdges';
import { mainFlowNode } from './components/CustomNode/initNodes';
import { subflowEdge } from './components/ReactFlowProvider/customNodes/subflow/edges';
import { subflowNode } from './components/ReactFlowProvider/customNodes/subflow/node';

export const selectFlowNodeEdge = (val: string) => {
  let value: any = { node: [], edge: [] };
  switch (val) {
    case 'test1':
      value = { node: mainFlowNode, edge: mainFlowEdges };
      break;
    case 'test2':
      value = { node: subflowNode, edge: subflowEdge };
      break;
    default:
      value = { node: mainFlowNode, edge: mainFlowEdges };
  }
  return value;
};

// export const selectFlowEdge = (val: string) => {
//   let value;
//   switch (val) {
//     case 'test1':
//       value.e = mainFlowEdges;
//       break;
//     case 'test2':
//       value = subflowEdge;
//       break;
//     default:
//       value = mainFlowEdges;
//   }
//   return value;
// };
