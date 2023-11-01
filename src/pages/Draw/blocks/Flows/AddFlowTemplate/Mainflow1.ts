export const AddMainflowNode1: any = [
  {
    id: 'test-method-Leakage-0',
    type: 'test-method',
    position: {
      x: 458.7589595375722,
      y: -9.609826589595357,
    },
    data: {
      label: 'Leakage-0',
    },
    width: 150,
    height: 110,
    params: {
      testMethod: 'Leakage',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'Leakage-0',
      number: '000',
      targetFlowName: '',
      variables: [
        {
          param: '2324',
          value: '232',
        },
      ],
    },
    selected: false,
    positionAbsolute: {
      x: 458.7589595375722,
      y: -9.609826589595357,
    },
    dragging: false,
  },
  {
    id: 'test-method-LoadAllCfgRegFromFile-1',
    type: 'test-method',
    position: {
      x: 163.3994219653179,
      y: 160.50231213872834,
    },
    data: {
      label: 'LoadAllCfgRegFromFile-1',
    },
    width: 150,
    height: 129,
    params: {
      testMethod: 'LoadAllCfgRegFromFile',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'LoadAllCfgRegFromFile-1',
      number: '001',
      targetFlowName: '',
      variables: [],
    },
    selected: false,
    positionAbsolute: {
      x: 163.3994219653179,
      y: 160.50231213872834,
    },
    dragging: false,
  },
  {
    id: 'test-method-MeasActiveCurrent-2',
    type: 'test-method',
    position: {
      x: 447.54277456647384,
      y: 168.91445086705198,
    },
    data: {
      label: 'MeasActiveCurrent-2',
    },
    width: 150,
    height: 110,
    params: {
      testMethod: 'MeasActiveCurrent',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'MeasActiveCurrent-2',
      number: '001',
      targetFlowName: '',
      variables: [],
    },
    selected: false,
    positionAbsolute: {
      x: 447.54277456647384,
      y: 168.91445086705198,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-3',
    type: 'fen-bin',
    position: {
      x: 791.5057803468208,
      y: 185.7387283236994,
    },
    data: {
      label: 'FB1',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 791.5057803468208,
      y: 185.7387283236994,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-4',
    type: 'fen-bin',
    position: {
      x: 83.95144508670518,
      y: 359.5895953757226,
    },
    data: {
      label: 'PB3',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 83.95144508670518,
      y: 359.5895953757226,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-5',
    type: 'fen-bin',
    position: {
      x: 244.7167630057803,
      y: 360.5242774566474,
    },
    data: {
      label: 'FB1',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 244.7167630057803,
      y: 360.5242774566474,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-6',
    type: 'fen-bin',
    position: {
      x: 431.65317919075136,
      y: 357.72023121387275,
    },
    data: {
      label: 'PB3',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 431.65317919075136,
      y: 357.72023121387275,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB2-7',
    type: 'fen-bin',
    position: {
      x: 611.1121387283237,
      y: 357.72023121387286,
    },
    data: {
      label: 'FB2',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 611.1121387283237,
      y: 357.72023121387286,
    },
    dragging: false,
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
    label: '1',
    source: 'test-method-Leakage-0',
    sourceHandle: null,
    target: 'test-method-MeasActiveCurrent-2',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-0-test-method-MeasActiveCurrent-2',
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
    source: 'test-method-Leakage-0',
    sourceHandle: null,
    target: 'test-method-LoadAllCfgRegFromFile-1',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-0-test-method-LoadAllCfgRegFromFile-1',
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
    source: 'test-method-Leakage-0',
    sourceHandle: null,
    target: 'fen-bin-FB1-3',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-0-fen-bin-FB1-3',
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
    source: 'test-method-LoadAllCfgRegFromFile-1',
    sourceHandle: null,
    target: 'fen-bin-PB3-4',
    targetHandle: null,
    id: 'reactflow__edge-test-method-LoadAllCfgRegFromFile-1-fen-bin-PB3-4',
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
    source: 'test-method-LoadAllCfgRegFromFile-1',
    sourceHandle: null,
    target: 'fen-bin-FB1-5',
    targetHandle: null,
    id: 'reactflow__edge-test-method-LoadAllCfgRegFromFile-1-fen-bin-FB1-5',
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
    source: 'test-method-MeasActiveCurrent-2',
    sourceHandle: null,
    target: 'fen-bin-PB3-6',
    targetHandle: null,
    id: 'reactflow__edge-test-method-MeasActiveCurrent-2-fen-bin-PB3-6',
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
    source: 'test-method-MeasActiveCurrent-2',
    sourceHandle: null,
    target: 'fen-bin-FB2-7',
    targetHandle: null,
    id: 'reactflow__edge-test-method-MeasActiveCurrent-2-fen-bin-FB2-7',
    selected: false,
  },
];
