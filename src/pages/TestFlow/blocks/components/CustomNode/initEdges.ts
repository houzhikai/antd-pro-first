import { MarkerType } from 'reactflow';

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#b1b1b7',
    },
  },
  {
    id: 'e2-5',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true, // 虚线
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: 'Pass',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true, // 虚线
    sourceHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: 'Fail',
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true, // 虚线
    sourceHandle: 'c',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: 'Pass',
    labelStyle: { fill: 'red', fillOpacity: 0.7 },
    labelBgStyle: { fill: 'transparent' },
  },
];
