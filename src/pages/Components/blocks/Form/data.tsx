import { Input } from 'antd';
export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  number: string;
  test: string;
  data: string;
}
export const columnsObj = [
  { title: 'name', dataIndex: 'name', width: '10%' },
  { title: 'age', dataIndex: 'age', width: '10%' },
  { title: 'address', dataIndex: 'address', width: '10%' },
  {
    title: 'number',
    dataIndex: 'number',
    width: '10%',
    render: (text) => <Input value={text} />,
  },
  {
    title: 'test',
    dataIndex: 'test',
    width: '10%',
  },
  {
    title: 'data',
    dataIndex: 'data',
    width: '10%',
  },
];

export const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    number: '1',
    test: '3',
    data: '2023-02-07',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    number: '2',
    test: '3',
    data: '2023-03-07',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    number: '3',
    test: '3',
    data: '2023-04-07',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
    number: '4',
    test: '3',
    data: '2023-05-07',
  },
  {
    key: '5',
    name: 'John Brown1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    number: '1',
    test: '3',
    data: '2023-06-07',
  },
];

// const searchList = ['name', 'age', 'address', 'number', 'test'];
// 类型： input， 选择框，多选框，时间选择器（类型不同）
export const searchList = [
  { label: 'name' },
  { label: 'data', type: 'data' },
  {
    label: 'age',
    type: 'select',
    options: [
      { label: '32', value: '32' },
      { label: '42', value: '42' },
    ],
  },
  { label: 'number', type: 'input' },
  { label: 'address', type: 'input' },
];
