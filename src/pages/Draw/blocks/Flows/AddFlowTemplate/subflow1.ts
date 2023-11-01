export const SubflowNode1: any = [
  {
    id: 'test-method-Leakage-7',
    type: 'test-method',
    position: {
      x: 420.2736618580589,
      y: 57.85908197804446,
    },
    data: {
      label: 'Start',
    },
    width: 150,
    height: 110,
    params: {
      testMethod: 'Leakage',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'Start',
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
      x: 420.2736618580589,
      y: 57.85908197804446,
    },
    dragging: false,
  },
  {
    id: 'test-method-Leakage-8',
    type: 'test-method',
    position: {
      x: 418.85694874358074,
      y: 256.19891800499477,
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
    positionAbsolute: {
      x: 418.85694874358074,
      y: 256.19891800499477,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB1-9',
    type: 'fen-bin',
    position: {
      x: 721.6109318167174,
      y: 63.8755527273475,
    },
    data: {
      label: 'FB1',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 721.6109318167174,
      y: 63.8755527273475,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-FB2-10',
    type: 'fen-bin',
    position: {
      x: 725.3496601404165,
      y: 263.8975180452666,
    },
    data: {
      label: 'FB2',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 725.3496601404165,
      y: 263.8975180452666,
    },
    dragging: false,
  },
  {
    id: 'fen-bin-PB3-11',
    type: 'fen-bin',
    position: {
      x: 456.1612208340582,
      y: 462.050119201336,
    },
    data: {
      label: 'PB3',
    },
    params: {},
    width: 82,
    height: 82,
    selected: false,
    positionAbsolute: {
      x: 456.1612208340582,
      y: 462.050119201336,
    },
    dragging: false,
  },
];
export const SubflowEdge1: any = [
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
    source: 'test-method-Leakage-7',
    sourceHandle: null,
    target: 'test-method-Leakage-8',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-7-test-method-Leakage-8',
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
    source: 'test-method-Leakage-7',
    sourceHandle: null,
    target: 'fen-bin-FB1-9',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-7-fen-bin-FB1-9',
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
    source: 'test-method-Leakage-8',
    sourceHandle: null,
    target: 'fen-bin-FB2-10',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-8-fen-bin-FB2-10',
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
    source: 'test-method-Leakage-8',
    sourceHandle: null,
    target: 'fen-bin-PB3-11',
    targetHandle: null,
    id: 'reactflow__edge-test-method-Leakage-8-fen-bin-PB3-11',
  },
];
