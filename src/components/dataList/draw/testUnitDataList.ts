export interface TestUnitDataListProps {
  key: React.Key;
  Class: string;
  Name: string;
  LoopCount: number;
}
export const testUnitDataList: TestUnitDataListProps[] = [
  {
    key: 0,
    Class: 'Leakage',
    Name: 'Leakage',
    LoopCount: 1,
  },
  {
    key: 1,
    Class: 'LoadAllCfgRegFromFile',
    Name: 'LoadAllCfgRegFromFile',
    LoopCount: 2,
  },
  {
    key: 2,
    Class: 'MeasActiveCurrent',
    Name: 'MeasActiveCurrent',
    LoopCount: 3,
  },
  {
    key: 3,
    Class: 'MeasDeepModeCurrent',
    Name: 'MeasDeepModeCurrent',
    LoopCount: 4,
  },
];
