import { MarkerType, Position } from 'reactflow';

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

export const mainFlowEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#b1b1b7',
    },
  },
  {
    id: 'e2-5',
    source: '2',
    target: '3',
    type: 'step',
    // animated: true, // 虚线
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: 'Pass',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    // animated: true, // 虚线
    sourceHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: '1',
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    type: 'smoothstep',
    // animated: true, // 虚线
    sourceHandle: 'c',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: '0',
    labelStyle: { fill: 'red', fillOpacity: 0.7, paddingLeft: 20 },
    labelBgStyle: { fill: 'transparent' },
  },
  { id: 'b-c', source: 'B', target: 'C' },
];
