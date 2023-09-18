export interface TestUnitDataListProps {
  key: React.Key;
  Class: string;
  Name: string;
  LoopCount: number;
}
export const testUnitDataList: TestUnitDataListProps[] = [
  {
    key: 0,
    Class: 'test',
    Name: 'test 0',
    LoopCount: 1,
  },
  {
    key: 1,
    Class: 'test',
    Name: 'test 1',
    LoopCount: 1,
  },
  {
    key: 2,
    Class: 'test',
    Name: 'test 2',
    LoopCount: 3,
  },
  {
    key: 3,
    Class: 'test',
    Name: 'test 3',
    LoopCount: 1,
  },
];
