import React from 'react';
// import Message from './blocks/Message';
import MyTable from './blocks/Form';
import { Input ,Image} from 'antd';
import logo from '../../icon/test/logo.gif'

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const ComponentsPages = () => {
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sydney No. 1 Lake Park',
    },
  ];
  // const columns = ['name', 'age', 'address', 'number'];
  const columnsObj = [
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
  return (
    <div>
      {/* <Message /> */}
      <MyTable title="111" columns={columnsObj} dataSource={data} />
      <Image src={logo}/>
    </div>
  );
};

export default ComponentsPages;
