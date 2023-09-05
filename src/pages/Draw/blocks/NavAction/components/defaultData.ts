export type HardBinDataSourceType = {
  key: React.Key;
  name?: string;
  number?: number;
  type?: string;
  color?: string;
  children?: HardBinDataSourceType[];
};
export type SoftBinDataSourceType = {
  key: number | string;
  name?: string;
  number?: number;
  hardBin?: string;
  maxCount?: number;
  checkOverflow?: boolean;
  color?: string;
  comment?: string;
};

export const defaultHardBinData: HardBinDataSourceType[] = [
  {
    key: 0,
    name: 'HB1',
    number: 0,
    type: 'pass',
    color: '#bfa',
  },
  {
    key: 1,
    name: 'HB2',
    number: 1,
    type: 'fail',
    color: '#fba',
  },
  {
    key: 2,
    name: 'HB1',
    number: 2,
    type: 'fail',
    color: '#fba',
  },
];

export const defaultSoftBinData: SoftBinDataSourceType[] = [
  {
    key: 0,
    name: 'FB1',
    number: 1001,
    hardBin: 'HB1',
    maxCount: 65536,
    checkOverflow: true,
    color: '#bfa',
    comment: '',
  },
  {
    key: 1,
    name: 'FB2',
    number: 1002,
    hardBin: 'HB2',
    maxCount: 65536,
    checkOverflow: false,
    color: '#fba',
    comment: '',
  },
  {
    key: 2,
    name: 'FB1',
    number: 1003,
    hardBin: 'HB1',
    maxCount: 65536,
    checkOverflow: true,
    color: '#abf',
    comment: '',
  },
];
