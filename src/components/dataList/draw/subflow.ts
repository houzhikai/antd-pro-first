import demo from '@/icon/draw/subflow/flowchart.png';
import subflowIcon from '@/icon/draw/subflow/stripe-logo-light.svg';
import subflowIcon1 from '@/icon/draw/subflow/subflow1.svg';
import subflowIcon2 from '@/icon/draw/subflow/flowchart.svg';
import subflowIcon3 from '@/icon/draw/subflow/flow chart 2-fill.svg';
import subflowItem1 from '@/icon/draw/AddFlowPng/subflow 1.png';
import subflowItem2 from '@/icon/draw/AddFlowPng/subflow 2.png';
import {
  SubflowNode1,
  SubflowEdge1,
} from '@/pages/Draw/blocks/Flows/AddFlowTemplate/subflow1';
import {
  SubflowNode2,
  SubflowEdge2,
} from '@/pages/Draw/blocks/Flows/AddFlowTemplate/subflow2';

export const subflowIconList = [
  { icon: demo, type: 'custom-subflow', name: 'subflow 1' },
  { icon: subflowIcon, type: 'custom-subflow', size: 32, name: 'subflow 2' },
  { icon: subflowIcon1, type: 'custom-subflow', name: 'subflow 3' },
  { icon: subflowIcon2, type: 'custom-subflow', name: 'subflow 4' },
  { icon: subflowIcon3, type: 'custom-subflow', name: 'subflow 4' },
];
// 添加加号的mainflow模板
export const subFlowItemList = [
  {
    id: 1,
    name: 'subflow 1',
    icon: subflowItem1,
    mainFlowNode: SubflowNode1,
    mainFlowEdges: SubflowEdge1,
  },
  {
    id: 2,
    name: 'subflow 2',
    icon: subflowItem2,
    mainFlowNode: SubflowNode2,
    mainFlowEdges: SubflowEdge2,
  },
];
