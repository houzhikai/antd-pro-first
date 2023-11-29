export interface DataType {
  key: string;
  SoftBin: string;
  SoftBinNum: number;
  HardBin: string;
  HardBinNum: number;
  Type: 'Pass' | 'Fail';
  MaxCount: number;
  CheckOverFlow: boolean;
  Color: string;
  Comment: string;
}
// 添加一行新的softBin数据
export const newData = {
  key: Math.floor(Math.random() * 10000),
  SoftBin: '',
  SoftBinNum: undefined,
  HardBin: '',
  HardBinNum: undefined,
  Type: 'Pass',
  MaxCount: undefined,
  CheckOverFlow: false,
  Color: '#87d068',
  Comment: '',
};

export const colorList = [
  {
    label: '主题颜色',
    colors: [
      '#000000',
      '#000000E0',
      '#000000A6',
      '#00000073',
      '#00000040',
      '#00000026',
      '#0000001A',
      '#00000012',
      '#0000000A',
      '#00000005',
      '#F5222D',
      '#FA8C16',
      '#FADB14',
      '#8BBB11',
      '#52C41A',
      '#13A8A8',
      '#1677FF',
      '#2F54EB',
      '#722ED1',
      '#EB2F96',
      '#F5222D4D',
      '#FA8C164D',
      '#FADB144D',
      '#8BBB114D',
      '#52C41A4D',
      '#13A8A84D',
      '#1677FF4D',
      '#2F54EB4D',
      '#722ED14D',
      '#EB2F964D',
    ],
  },
  {
    label: '标准色',
    colors: [],
  },
];
