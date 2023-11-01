export const SubflowNode2: any = [
  {
    id: 'test-method-Leakage-0',
    type: 'test-method',
    position: {
      x: 557.8352601156068,
      y: 15.626589595375734,
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
  },
  {
    id: 'subflow-SubFlow1-1',
    type: 'subflow',
    position: {
      x: 557.8352601156068,
      y: 181.06531791907514,
    },
    data: {
      label: 'SubFlow1-1',
    },
    width: 150,
    height: 110,
    params: {
      testMethod: 'Test4',
      isFlowUnit: true,
      isStartUnit: false,
      name: 'SubFlow1-1',
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
      x: 557.8352601156068,
      y: 181.06531791907514,
    },
    dragging: false,
  },
  {
    id: 'test-method-LoadAllCfgRegFromFile-2',
    type: 'test-method',
    position: {
      x: 559.7046242774567,
      y: 336.2225433526012,
    },
    data: {
      label: 'LoadAllCfgRegFromFile-2',
    },
    width: 150,
    height: 129,
    params: {
      testMethod: 'LoadAllCfgRegFromFile',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'LoadAllCfgRegFromFile-2',
      number: '001',
      targetFlowName: '',
      variables: [],
    },
    selected: false,
    positionAbsolute: {
      x: 559.7046242774567,
      y: 336.2225433526012,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-3',
    type: 'fen-bin',
    position: {
      x: 850.3907514450866,
      y: 40.86300578034684,
    },
    data: {
      label: 'FB1',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 850.3907514450866,
      y: 40.86300578034684,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-4',
    type: 'fen-bin',
    position: {
      x: 847.5867052023121,
      y: 204.43236994219646,
    },
    data: {
      label: 'FB1',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 847.5867052023121,
      y: 204.43236994219646,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB2-5',
    type: 'fen-bin',
    position: {
      x: 858.8028901734103,
      y: 363.328323699422,
    },
    data: {
      label: 'FB2',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 858.8028901734103,
      y: 363.328323699422,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-6',
    type: 'fen-bin',
    position: {
      x: 596.1572254335259,
      y: 525.4021965317919,
    },
    data: {
      label: 'PB3',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 596.1572254335259,
      y: 525.4021965317919,
    },
    dragging: false,
  },
];
export const SubflowEdge2: any = [
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
    label: '1',
    source: 'subflow-SubFlow1-1',
    sourceHandle: null,
    target: 'fen-bin-FB1-4',
    targetHandle: null,
    id: 'reactflow__edge-subflow-SubFlow1-1-fen-bin-FB1-4',
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
    source: 'subflow-SubFlow1-1',
    sourceHandle: null,
    target: 'test-method-LoadAllCfgRegFromFile-2',
    targetHandle: null,
    id: 'reactflow__edge-subflow-SubFlow1-1-test-method-LoadAllCfgRegFromFile-2',
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
    target: 'fen-bin-PB3-6',
    targetHandle: null,
    id: 'reactflow__edge-test-method-LoadAllCfgRegFromFile-2-fen-bin-PB3-6',
  },
];
