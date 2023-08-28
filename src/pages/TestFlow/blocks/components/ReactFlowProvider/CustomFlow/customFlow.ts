import { Position } from 'reactflow';

export const customNode: any = [
  {
    id: 'customFlow',
    data: { label: 'subflow' },
    // type: 'custom-subflow',
    type: 'group',
    position: { x: 0, y: 0 },
    style: {
      background: 'rgb(255,204,204)',
      width: 500,
      height: 500,
      zIndex: -1,
    },
  },
  {
    id: 'customNode-1',
    type: 'custom-input',
    data: { label: '开始标签' },
    position: { x: 100, y: 10 },
    parentNode: 'customFlow',
    extent: 'parent',
  },
  {
    id: 'customNode-2',
    type: 'custom-middleNode',
    data: { label: 'MiddleNode' },
    position: { x: 80, y: 100 },
    parentNode: 'customFlow',
    extent: 'parent',
  },
  {
    id: 'goodBin',
    type: 'good-bin',
    data: { label: 'goodBin' },
    position: { x: 120, y: 200 },
    parentNode: 'customFlow',
    extent: 'parent',
  },
  {
    id: 'badBin',
    type: 'bad-bin',
    targetPosition: Position.Top,
    data: { label: 'BadBin' },
    position: { x: 300, y: 200 },
    parentNode: 'customFlow',
    extent: 'parent',
  },
];

export const customEdge = [
  {
    id: 'customNode-1-customNode-2',
    source: 'customNode-1',
    target: 'customNode-2',
    targetHandle: 'a',
  },
  {
    id: 'customNode-2-goodBin',
    source: 'customNode-2',
    target: 'goodBin',
    sourceHandle: 'c',
    targetHandle: 'a',
  },
  {
    id: 'customNode-2-badBin',
    source: 'customNode-2',
    target: 'badBin',
    sourceHandle: 'd',
    targetHandle: 'a',
    type: 'smoothstep',
  },
];
