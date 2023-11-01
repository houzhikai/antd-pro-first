export const AddMainflowNode2: any = [
  {
    id: 'test-method-Leakage-0',
    type: 'test-method',
    position: {
      x: 476.5179190751445,
      y: 18.4306358381503,
    },
    data: {
      label: 'Leakage',
    },
    width: 150,
    height: 110,
    params: {
      testMethod: 'Leakage',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'Leakage',
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
    dragging: false,
  },
  {
    id: 'subflow-SubFlow1-1',
    type: 'subflow',
    position: {
      x: 473.7138728323698,
      y: 181.0653179190751,
    },
    data: {
      label: 'SubFlow1',
    },
    width: 150,
    height: 110,
    params: {
      testMethod: 'Test4',
      isFlowUnit: true,
      isStartUnit: false,
      name: 'SubFlow1',
      number: '10000',
      targetFlowName: 'SubFlow1',
      variables: [
        {
          param: 'Vaa',
          value: '3',
        },
        {
          param: 'Vhh',
          value: '3.5',
        },
        {
          param: 'Load_from_File',
          value: '',
        },
      ],
    },
    selected: false,
    positionAbsolute: {
      x: 473.7138728323698,
      y: 181.0653179190751,
    },
    dragging: false,
  },
  {
    id: 'test-method-LoadAllCfgRegFromFile-2',
    type: 'test-method',
    position: {
      x: 476.5179190751445,
      y: 341.83063583815033,
    },
    data: {
      label: 'LoadAllCfgRegFromFile',
    },
    width: 150,
    height: 129,
    params: {
      testMethod: 'LoadAllCfgRegFromFile',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'LoadAllCfgRegFromFile',
      number: '001',
      targetFlowName: '',
      variables: [],
    },
    selected: false,
    positionAbsolute: {
      x: 476.5179190751445,
      y: 341.83063583815033,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-3',
    type: 'fen-bin',
    position: {
      x: 798.9832369942195,
      y: 40.86300578034684,
    },
    data: {
      label: 'PB3',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 798.9832369942195,
      y: 40.86300578034684,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-4',
    type: 'fen-bin',
    position: {
      x: 800.8526011560692,
      y: 196.02023121387285,
    },
    data: {
      label: 'PB3',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 800.8526011560692,
      y: 196.02023121387285,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB2-5',
    type: 'fen-bin',
    position: {
      x: 801.7872832369942,
      y: 372.6751445086705,
    },
    data: {
      label: 'FB2',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 801.7872832369942,
      y: 372.6751445086705,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-6',
    type: 'fen-bin',
    position: {
      x: 525.6915582753359,
      y: 534.8665372857679,
    },
    data: {
      label: 'FB1',
    },
    params: {},
    width: 82,
    height: 82,
    selected: true,
    positionAbsolute: {
      x: 525.6915582753359,
      y: 534.8665372857679,
    },
    dragging: false,
  },
];
export const AddMainflowEdge2: any = [
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
    target: 'subflow-SubFlow1-1',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-0-subflow-SubFlow1-1',
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
    source: 'test-method-Leakage-0',
    sourceHandle: null,
    target: 'fen-bin-PB3-3',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-0-fen-bin-PB3-3',
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
    source: 'subflow-SubFlow1-1',
    sourceHandle: null,
    target: 'fen-bin-PB3-4',
    targetHandle: null,
    id: 'reactflow__edge-subflow-SubFlow1-1-fen-bin-PB3-4',
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
    source: 'test-method-LoadAllCfgRegFromFile-2',
    sourceHandle: null,
    target: 'fen-bin-FB2-5',
    targetHandle: null,
    id: 'reactflow__edge-test-method-LoadAllCfgRegFromFile-2-fen-bin-FB2-5',
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
    source: 'test-method-LoadAllCfgRegFromFile-2',
    sourceHandle: null,
    target: 'fen-bin-FB1-6',
    targetHandle: null,
    id: 'reactflow__edge-test-method-LoadAllCfgRegFromFile-2-fen-bin-FB1-6',
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
    source: 'subflow-SubFlow1-1',
    sourceHandle: null,
    target: 'test-method-LoadAllCfgRegFromFile-2',
    targetHandle: null,
    id: 'reactflow__edge-subflow-SubFlow1-1-test-method-LoadAllCfgRegFromFile-2',
  },
];
