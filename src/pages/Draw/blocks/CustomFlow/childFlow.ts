import { MarkerType } from 'reactflow';

export const childFlowNodes = [
  { id: 'childEdgeA', data: { label: 'node-a' }, position: { x: 100, y: 100 } },
  { id: 'childEdgeB', data: { label: 'node-b' }, position: { x: 100, y: 200 } },
  {
    id: 'childEdgeC',
    type: 'custom-subflow',
    data: { label: 'node-c' },
    position: { x: 100, y: 300 },
    style: {
      width: 200,
      height: 200,
      border: '1px solid red',
      background: 'transparent',
    },
  },
  {
    id: 'childEdgeD',
    data: { label: 'node-d' },
    position: { x: 40, y: 40 },
    parentNode: 'childEdgeC',
    extent: 'parent',
  },
  {
    id: 'childEdgeE',
    data: { label: 'node-e' },
    position: { x: 40, y: 100 },
    parentNode: 'childEdgeC',
    extent: 'parent',
  },
];
export const childFlowEdges = [
  {
    id: 'childEdgeD-E',
    source: 'childEdgeD',
    target: 'childEdgeE',
    label: '0',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  //   { id: 'childEdgeB', label: 'node-b' },
  //   { id: 'childEdgeC', label: 'node-c' },
  //   { id: 'childEdgeD', label: 'node-d', parentNode: 'childEdgeC' },
  // { id: 'childEdgeE', label: 'node-e', parentNode: 'childEdgeC' },
];
