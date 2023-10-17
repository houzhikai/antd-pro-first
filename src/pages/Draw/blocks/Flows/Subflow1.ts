import { MarkerType, Position } from 'reactflow';

export const SubflowNode1: any = [
  {
    id: '1',
    data: { label: 'start' },
    position: { x: 100, y: 100 },
    type: 'test-method',
  },

  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 250 },
    type: 'test-method',
  },
  {
    id: '3',
    data: { label: '自定义节点', edge: 2 },
    position: { x: 100, y: 400 },
    type: 'test-method',
    targetPosition: Position.Top,
    deletable: true,
  },
  {
    id: '4',
    data: { label: 'stop' },
    position: { x: 400, y: 420 },
    targetPosition: 'left', // 目标位置
    type: 'fen-bin',
  },
  {
    id: '5',
    data: { label: 'FBin' },
    position: { x: 150, y: 550 },
    type: 'fen-bin',
  },
];

export const SubflowEdge1 = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'floating',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '3',
    type: 'floating',
    label: 'Pass',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'floating',
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
    type: 'floating',
  },
];
