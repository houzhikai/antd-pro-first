// import demo from '@/icon/draw/subflow/flowchart.png';
// import subflowIcon from '@/icon/draw/subflow/stripe-logo-light.svg';
// import subflowIcon1 from '@/icon/draw/subflow/subflow1.svg';
// import subflowIcon2 from '@/icon/draw/subflow/flowchart.svg';
// import subflowIcon3 from '@/icon/draw/subflow/flow chart 2-fill.svg';
// import ellipse from '@/icon/draw/items/ellipse.svg';
// import round from '@/icon/draw/items/round.svg';
// import filletCorner from '@/icon/draw/items/filletCorner.svg';
import { SubflowNode1, SubflowEdge1 } from '@/pages/Draw/blocks/Flows/Subflow1';
import { SubflowNode2, SubflowEdge2 } from '@/pages/Draw/blocks/Flows/Subflow2';

export const subflowIconList = [
  //   { icon: filletCorner, type: 'custom-input', size: 54 },
  //   { icon: ellipse, type: 'default' },
  //   { icon: round, type: 'output' },
  {
    name: 'subflow 1',
    type: 'subflow',
    TestNumber: '000',
    subFlowNode: SubflowNode1,
    subFlowEdge: SubflowEdge1,
  },
  {
    name: 'subflow 2',
    type: 'subflow',
    TestNumber: '111',
    subFlowNode: SubflowNode2,
    subFlowEdge: SubflowEdge2,
  },
  // { icon: subflowIcon1, type: 'subflow', name: 'subflow 3', TestNumber: '222' },
  // { icon: subflowIcon2, type: 'subflow', name: 'subflow 4', TestNumber: '333' },
  // { icon: subflowIcon3, type: 'subflow', name: 'subflow 5', TestNumber: '444' },
];
