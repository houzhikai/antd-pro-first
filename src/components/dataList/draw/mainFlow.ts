import subflowIcon from '@/icon/draw/subflow/stripe-logo-light.svg';
// import subflowIcon1 from '@/icon/draw/subflow/subflow1.svg';
// import subflowIcon2 from '@/icon/draw/subflow/flowchart.svg';
// import subflowIcon3 from '@/icon/draw/subflow/flow chart 2-fill.svg';
import mainFlowItem1 from '@/icon/draw/subflow/reactflow2.png';
import {
  mainFlowNode,
  mainFlowEdges,
} from '@/pages/Draw/blocks/CustomFlow/mainFlow';

// 左侧的mainflow 模板
export const mainFlowIconList = [
  //   { icon: filletCorner, type: 'custom-input', size: 54 },
  //   { icon: ellipse, type: 'default' },
  //   { icon: round, type: 'output' },
  { icon: subflowIcon, type: 'subflow', name: 'mainflow 1' },
  // { icon: subflowIcon, type: 'subflow', name: 'mainflow 2' },
  // { icon: subflowIcon1, type: 'subflow', name: 'mainflow 3' },
  // { icon: subflowIcon2, type: 'subflow', name: 'mainflow 4' },
  // { icon: subflowIcon3, type: 'subflow', name: 'mainflow 5' },
];
// 添加加号的mainflow模板
export const mainFlowItemList = [
  {
    id: 1,
    name: 'mainflow 1',
    icon: mainFlowItem1,
    mainFlowNode: mainFlowNode,
    mainFlowEdges: mainFlowEdges,
  },
];
