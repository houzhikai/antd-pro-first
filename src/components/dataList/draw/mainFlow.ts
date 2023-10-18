import subflowIcon from '@/icon/draw/subflow/stripe-logo-light.svg';
import mainFlowItem1 from '@/icon/draw/AddFlowPng/mainflow 1.png';
import mainFlowItem2 from '@/icon/draw/AddFlowPng/mainflow 2.png';
import {
  MainflowNode1,
  MainflowEdge1,
} from '@/pages/Draw/blocks/Flows/AddFlowTemplate/Mainflow1';
import {
  MainflowNode2,
  MainflowEdge2,
} from '@/pages/Draw/blocks/Flows/AddFlowTemplate/Mainflow2';

// 左侧的mainflow 模板
export const mainFlowIconList = [
  //   { icon: filletCorner, type: 'custom-input', size: 54 },
  //   { icon: ellipse, type: 'default' },
  //   { icon: round, type: 'output' },
  { icon: subflowIcon, type: 'mainflow', name: 'mainflow 1' },
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
    mainFlowNode: MainflowNode1,
    mainFlowEdges: MainflowEdge1,
  },
  {
    id: 2,
    name: 'mainflow 2',
    icon: mainFlowItem2,
    mainFlowNode: MainflowNode2,
    mainFlowEdges: MainflowEdge2,
  },
];
