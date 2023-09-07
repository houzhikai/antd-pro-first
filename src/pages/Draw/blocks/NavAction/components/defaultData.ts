export type HardBinDataSourceType = {
  Key?: React.Key;
  Name?: string;
  Number?: number;
  Type?: string;
  Color?: string;
  children?: HardBinDataSourceType[];
};
export type SoftBinDataSourceType = {
  Key?: number | string;
  Name?: string;
  Number?: number;
  HardBin?: string;
  MaxCount?: number;
  CheckOverflow?: boolean;
  Color?: string;
  Comment?: string;
};
type OptionsProps = {
  HardBin: HardBinDataSourceType[];
  SoftBin: SoftBinDataSourceType[];
};

// export const defaultHardBinData: HardBinDataSourceType[] = [
//   {
//     key: 0,
//     name: 'HB1',
//     number: 0,
//     type: 'pass',
//     color: '#bfa',
//   },
//   {
//     key: 1,
//     name: 'HB2',
//     number: 1,
//     type: 'fail',
//     color: '#fba',
//   },
//   {
//     key: 2,
//     name: 'HB3',
//     number: 2,
//     type: 'fail',
//     color: '#fba',
//   },
// ];

// export const defaultSoftBinData: SoftBinDataSourceType[] = [
//   {
//     key: 0,
//     name: 'FB1',
//     number: 1001,
//     hardBin: 'HB1',
//     maxCount: 65536,
//     checkOverflow: true,
//     color: '#bfa',
//     comment: '',
//   },
//   {
//     key: 1,
//     name: 'FB2',
//     number: 1002,
//     hardBin: 'HB2',
//     maxCount: 65536,
//     checkOverflow: false,
//     color: '#fba',
//     comment: '',
//   },
//   {
//     key: 2,
//     name: 'FB1',
//     number: 1003,
//     hardBin: 'HB1',
//     maxCount: 65536,
//     checkOverflow: true,
//     color: '#abf',
//     comment: '',
//   },
// ];
export const options: OptionsProps = {
  HardBin: [
    { Key: 0, Name: 'HB1', Number: 1, Type: 'Pass', Color: '#bfa' },
    { Key: 1, Name: 'HB2', Number: 2, Type: 'Fail', Color: '#fba' },
  ],
  SoftBin: [
    {
      Key: 0,
      Name: 'FB1',
      Number: 1001,
      HardBin: 'HB2',
      MaxCount: 65536,
      CheckOverflow: true,
      Color: 'Green',
      Comment: '',
    },
    {
      Key: 1,
      Name: 'FB2',
      Number: 1002,
      HardBin: 'HB2',
      MaxCount: 65536,
      CheckOverflow: true,
      Color: '#3CF',
      Comment: '',
    },
    {
      Key: 2,
      Name: 'PB1',
      Number: 2001,
      HardBin: 'HB1',
      MaxCount: 65536,
      CheckOverflow: true,
      Color: 'Red',
      Comment: '',
    },
  ],
};
