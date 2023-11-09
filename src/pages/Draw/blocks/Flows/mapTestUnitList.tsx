export const arr = Array.from({ length: 300 }, (_, index) => ({
  id: `test-method-Leakage-${index}`,
  type: 'test-method',
  position: {
    x: 381,
    y: 83 + index * 150,
  },
  data: {
    label: `start-${index}`,
  },
  width: 156,
  height: 109,
  params: {
    testMethod: 'Leakage',
    isFlowUnit: false,
    isStartUnit: true,
    name: 'start',
    number: `${index}`,
    targetFlowName: '',
    variables: [
      {
        key: '8533',
        param: '2324',
        value: '232',
      },
    ],
  },
  selected: false,
  dragging: false,
}));
console.log('arr', arr);
