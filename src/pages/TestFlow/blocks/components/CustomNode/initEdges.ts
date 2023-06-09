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
];
