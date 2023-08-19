import { Position } from 'reactflow';

export const mainFlowNode: any = [
  {
    id: '1',
    data: { label: 'start' },
    position: { x: 100, y: 100 },
    type: 'input',
  },

  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 200 },
  },
  {
    id: '3',
    data: { label: '自定义节点', edge: 2 },
    position: { x: 100, y: 300 },
    type: 'custom',
    targetPosition: Position.Top,
    deletable: true,
  },
  {
    id: '4',
    data: { label: 'stop' },
    position: { x: 400, y: 300 },
    targetPosition: 'left', // 目标位置
    type: 'output',
  },
  {
    id: '5',
    data: { label: 'FBin' },
    position: { x: 100, y: 400 },
    type: 'output',
  },
   {
    id: 'A',
    type: 'group',
    data: { label: null },
    position: { x: 400, y: 100 },
    style: {
      width: 170,
      height: 140,
    },
  },
  {
    id: 'B',
    type: 'input',
    data: { label: 'child node 1' },
    position: { x: 10, y: 10 }, // position 是相对于父级的定位
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'C',
    data: { label: 'child node 2' },
    position: { x: 10, y: 90 }, // position 是相对于父级的定位
    parentNode: 'A',
    extent: 'parent',
  },
];
