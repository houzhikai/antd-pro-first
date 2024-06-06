export const initScrambleOptions = [
  {
    value: 'convert.cfg',
    label: 'convert.cfg',
    location: '/home/kkuser/public/partner/physical_files',
    disable: true, // 仅对 tag 标签有效，与select 的 option 无关
  },
];

export const initLogicalOptions = [
  // 与列相关
  { location: '', value: 'builtin_col_data', label: 'builtin_col_data' },
  { location: '', value: 'builtin_col_rdata', label: 'builtin_col_rdata' },
  { location: '', value: 'builtin_data_col', label: 'builtin_data_col' },
  { location: '', value: 'builtin_rdata_col', label: 'builtin_rdata_col' },
  //location: '', 与行相关
  { location: '', value: 'builtin_data_row', label: 'builtin_data_row' },
  { location: '', value: 'builtin_row_data', label: 'builtin_row_data' },
  { location: '', value: 'builtin_rdata_row', label: 'builtin_rdata_row' },
  { location: '', value: 'builtin_row_rdata', label: 'builtin_row_rdata' },
];

export const scaleFactor = [
  {
    key: 0.75,
    label: '75%',
  },
  {
    key: 1,
    label: '100%',
  },
  {
    key: 1.5,
    label: '150%',
  },
  {
    key: 2,
    label: '200%',
  },
];

export const scaleNumberOptions = [
  { value: 0.125, label: 0.125 },
  { value: 0.2, label: 0.2 },
  { value: 1, label: 1 },
  { value: 4, label: 4 },
  { value: 16, label: 16 },
  { value: 64, label: 64 },
  { value: 256, label: 256 },
];
