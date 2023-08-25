import {
  mainFlowEdges,
  mainFlowNode,
} from './components/ReactFlowProvider/CustomFlow/mainFlow';
import {
  subflowEdge,
  subflowNode,
} from './components/ReactFlowProvider/CustomFlow/subflow';

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
