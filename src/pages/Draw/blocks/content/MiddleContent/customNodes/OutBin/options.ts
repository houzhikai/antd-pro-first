export const options = {
  HardBin: [
    { Name: 'HB1', Number: 1, Type: 'Pass', Color: '#bfa' },
    { Name: 'HB2', Number: 2, Type: 'Fail', Color: '#fba' },
  ],
  SoftBin: [
    {
      Name: 'FB1',
      Number: 1001,
      HardBin: 'HB2',
      MaxCount: 65536,
      CheckOverflow: true,
      Color: 'Green',
      Comment: '',
    },
    {
      Name: 'FB2',
      Number: 1002,
      HardBin: 'HB2',
      MaxCount: 65536,
      CheckOverflow: true,
      Color: '#3CF',
      Comment: '',
    },
    {
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
