export const AddMainflowNode1: any = [
  {
    id: 'test-method-0',
    type: 'test-method',
    position: {
      x: 590,
      y: 45,
    },
    data: {
      label: 'Leakage',
      id: 'Leakage',
    },
    TestNumber: null,
    LoopCount: 1,
    Class: 'Leakage',
    width: 150,
    height: 110,
  },
  {
    id: 'test-method-1',
    type: 'test-method',
    position: {
      x: 206.18433742872935,
      y: 252.46603587796616,
    },
    data: {
      label: 'LoadAllCfgRegFromFile',
      id: 'LoadAllCfgRegFromFile',
    },
    TestNumber: null,
    LoopCount: 2,
    Class: 'LoadAllCfgRegFromFile',
    width: 150,
    height: 129,
    selected: false,
    positionAbsolute: {
      x: 206.18433742872935,
      y: 252.46603587796616,
    },
    dragging: false,
  },
  {
    id: 'test-method-2',
    type: 'test-method',
    position: {
      x: 605.5756527042191,
      y: 263.07605184353883,
    },
    data: {
      label: 'MeasActiveCurrent',
      id: 'MeasActiveCurrent',
    },
    TestNumber: null,
    LoopCount: 3,
    Class: 'MeasActiveCurrent',
    width: 150,
    height: 110,
    selected: false,
    positionAbsolute: {
      x: 605.5756527042191,
      y: 263.07605184353883,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-3',
    type: 'fen-bin',
    position: {
      x: 150.10282446784453,
      y: 466.4074563160141,
    },
    data: {
      label: 'PB3',
      id: '',
    },
    TestNumber: null,
    LoopCount: 3,
    Class: '',
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 150.10282446784453,
      y: 466.4074563160141,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-4',
    type: 'fen-bin',
    position: {
      x: 338.05167871513373,
      y: 466.4074563160142,
    },
    data: {
      label: 'FB1',
      id: '',
    },
    TestNumber: null,
    LoopCount: 3,
    Class: '',
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 338.05167871513373,
      y: 466.4074563160142,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-5',
    type: 'fen-bin',
    position: {
      x: 532.063399228465,
      y: 464.8917397495038,
    },
    data: {
      label: 'PB3',
      id: '',
    },
    TestNumber: null,
    LoopCount: 3,
    Class: '',
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 532.063399228465,
      y: 464.8917397495038,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB2-6',
    type: 'fen-bin',
    position: {
      x: 721.5279700422648,
      y: 464.89173974950376,
    },
    data: {
      label: 'FB2',
      id: '',
    },
    TestNumber: null,
    LoopCount: 3,
    Class: '',
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 721.5279700422648,
      y: 464.89173974950376,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-7',
    type: 'fen-bin',
    position: {
      x: 1053.469898108042,
      y: 311.8043665319536,
    },
    data: {
      label: 'FB1',
      id: '',
    },
    TestNumber: null,
    LoopCount: 3,
    Class: '',
    width: 82,
    height: 82,
  },
];
export const AddMainflowEdge1: any = [
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '0',
    source: 'test-method-0',
    sourceHandle: null,
    target: 'test-method-1',
    targetHandle: null,
    id: 'reactflow__edge-test-method-0-test-method-1',
  },
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '0',
    source: 'test-method-1',
    sourceHandle: null,
    target: 'fen-bin-PB3-3',
    targetHandle: null,
    id: 'reactflow__edge-test-method-1-fen-bin-PB3-3',
  },
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '1',
    source: 'test-method-1',
    sourceHandle: null,
    target: 'fen-bin-FB1-4',
    targetHandle: null,
    id: 'reactflow__edge-test-method-1-fen-bin-FB1-4',
    selected: false,
  },
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '1',
    source: 'test-method-0',
    sourceHandle: null,
    target: 'test-method-2',
    targetHandle: null,
    id: 'reactflow__edge-test-method-0-test-method-2',
    selected: false,
  },
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '0',
    source: 'test-method-2',
    sourceHandle: null,
    target: 'fen-bin-PB3-5',
    targetHandle: null,
    id: 'reactflow__edge-test-method-2-fen-bin-PB3-5',
  },
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '1',
    source: 'test-method-2',
    sourceHandle: null,
    target: 'fen-bin-FB2-6',
    targetHandle: null,
    id: 'reactflow__edge-test-method-2-fen-bin-FB2-6',
    selected: true,
  },
  {
    style: {
      strokeWidth: 1,
      stroke: 'black',
    },
    type: 'floating',
    markerEnd: {
      type: 'arrowclosed',
      color: 'black',
    },
    label: '2',
    source: 'test-method-0',
    sourceHandle: null,
    target: 'fen-bin-FB1-7',
    targetHandle: null,
    id: 'reactflow__edge-test-method-0-fen-bin-FB1-7',
    selected: false,
  },
];
