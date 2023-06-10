import { Position } from 'reactflow';

export const initialNodes: any = [
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
    data: { label: 'drag me around 😎' },
    position: { x: 100, y: 300 },
    type: 'custom',
    targetPosition: Position.Top,
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
];
