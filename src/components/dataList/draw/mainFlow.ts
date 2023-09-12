import subflowIcon from '@/icon/draw/subflow/stripe-logo-light.svg';
import subflowIcon1 from '@/icon/draw/subflow/subflow1.svg';
import subflowIcon2 from '@/icon/draw/subflow/flowchart.svg';
import subflowIcon3 from '@/icon/draw/subflow/flow chart 2-fill.svg';
import mainFlowItem1 from '@/icon/draw/subflow/reactflow.png';

export const mainFlowIconList = [
  //   { icon: filletCorner, type: 'custom-input', size: 54 },
  //   { icon: ellipse, type: 'default' },
  //   { icon: round, type: 'output' },
  { icon: subflowIcon, type: 'custom-subflow', name: 'subflow 2' },
  { icon: subflowIcon1, type: 'custom-subflow', name: 'subflow 3' },
  { icon: subflowIcon2, type: 'custom-subflow', name: 'subflow 4' },
  { icon: subflowIcon3, type: 'custom-subflow', name: 'subflow 5' },
];

// 左侧的mainflow 模板
export const mainFlowItemList = [
  { id: 1, name: 'mainflow 1', icon: mainFlowItem1 },
];
