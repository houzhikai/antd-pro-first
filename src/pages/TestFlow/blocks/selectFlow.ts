import {
  childFlowEdges,
  childFlowNodes,
} from '@/pages/Draw/blocks/CustomFlow/childFlow';
import {
  customNode,
  customEdge,
} from './components/ReactFlowProvider/CustomFlow/customFlow';
import {
  initFlowEdges,
  initFlowNode,
} from './components/ReactFlowProvider/CustomFlow/initFlow';
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
      value = { node: initFlowNode, edge: initFlowEdges };
      break;
    case 'test2':
      value = { node: mainFlowNode, edge: mainFlowEdges };
      break;
    case 'test3':
      value = { node: subflowNode, edge: subflowEdge };
      break;
    case 'test4':
      value = { node: customNode, edge: customEdge };
      break;
    case 'test5':
      value = { node: childFlowNodes, edge: childFlowEdges };
      break;
    default:
      value = { node: mainFlowNode, edge: mainFlowEdges };
  }
  return value;
};
