export interface TestUnitDataListProps {
  key: React.Key;
  testMethod: string;
  isFlowUnit: boolean;
  isStartUnit: boolean;
  name: string;
  number: string;
  loopCount: number;
  targetFlowName: string;
  variables?: {
    key?: React.Key;
    param: string;
    value: string;
  }[];
}
export const testUnitDataList: TestUnitDataListProps[] = [
  {
    key: 0,
    testMethod: 'Leakage',
    isFlowUnit: false,
    isStartUnit: true,
    name: 'Leakage',
    number: '000',
    loopCount: 1,
    targetFlowName: '',
    variables: [{ param: '2324', value: '232' }],
  },
  {
    key: 1,
    testMethod: 'LoadAllCfgRegFromFile',
    isFlowUnit: false,
    isStartUnit: true,
    name: 'LoadAllCfgRegFromFile',
    number: '001',
    loopCount: 2,
    targetFlowName: '',
    variables: [],
  },
  {
    key: 2,
    testMethod: 'MeasActiveCurrent',
    isFlowUnit: false,
    isStartUnit: true,
    name: 'MeasActiveCurrent',
    number: '001',
    loopCount: 3,
    targetFlowName: '',
    variables: [],
  },
  {
    key: 3,
    testMethod: 'MeasDeepModeCurrent',
    isFlowUnit: false,
    isStartUnit: true,
    name: 'MeasDeepModeCurrent',
    number: '001',
    loopCount: 4,
    targetFlowName: '',
    variables: [],
  },
];
