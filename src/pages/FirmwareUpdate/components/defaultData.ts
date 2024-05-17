import { statusShow } from './statusShow';

export const columns = [
  {
    key: 'firmware',
    width: '25%',
    dataIndex: 'firmware',
    title: '固件',
  },
  {
    key: 'version',
    width: '25%',
    dataIndex: 'version',
    title: '版本',
  },
  {
    key: 'newVersion',
    width: '25%',
    dataIndex: 'newVersion',
    title: '新版本',
  },
  {
    key: 'status',
    width: '25%',
    dataIndex: 'status',
    title: '状态',
    render: (text) => {
      return statusShow(text);
    },
  },
];
export const options = [
  {
    value: 'auto',
    label: '自动',
  },
  {
    value: 'manual',
    label: '手动',
  },
];
