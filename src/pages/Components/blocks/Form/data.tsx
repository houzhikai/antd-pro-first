import { Input } from 'antd';
export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  number: string;
  test: string;
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
];

export const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    number: '1',
    test: '3',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    number: '2',
    test: '3',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    number: '3',
    test: '3',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
    number: '4',
    test: '3',
  },
  {
    key: '5',
    name: 'John Brown1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    number: '1',
    test: '3',
  },
];
