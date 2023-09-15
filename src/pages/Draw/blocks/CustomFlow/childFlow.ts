import { MarkerType } from 'reactflow';

export const childFlowNodes = [
  { id: 'childNodeA', data: { label: 'node-a' }, position: { x: 100, y: 100 } },
  { id: 'childNodeB', data: { label: 'node-b' }, position: { x: 100, y: 200 } },
  {
    id: 'childNodeC',
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
    id: 'childNodeD',
    data: { label: 'node-d' },
    position: { x: 40, y: 40 },
    parentNode: 'childNodeC',
    extent: 'parent',
  },
  {
    id: 'childNodeE',
    data: { label: 'node-e' },
    position: { x: 40, y: 100 },
    parentNode: 'childNodeC',
    extent: 'parent',
  },
];
export const childFlowEdges = [
  { id: 'childNodeA-B', source: 'childNodeA', target: 'childNodeB' },
  { id: 'childNodeB-c', source: 'childNodeB', target: 'childNodeC' },
  {
    id: 'childEdgeD-E',
    source: 'childNodeD',
    target: 'childNodeE',
    label: '0',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  //   { id: 'childEdgeB', label: 'node-b' },
  //   { id: 'childEdgeC', label: 'node-c' },
  //   { id: 'childEdgeD', label: 'node-d', parentNode: 'childEdgeC' },
  // { id: 'childEdgeE', label: 'node-e', parentNode: 'childEdgeC' },
];
