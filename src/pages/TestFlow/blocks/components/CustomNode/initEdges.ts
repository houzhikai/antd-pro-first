import { MarkerType } from 'reactflow';

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
    labelStyle: { fill: 'red', fillOpacity: 0.7, paddingLeft: 20 },
    labelBgStyle: { fill: 'transparent' },
  },
];
