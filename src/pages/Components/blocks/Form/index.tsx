import { Typography, Table, Input } from 'antd';
import React from 'react';
interface MyFormProps {
  title?: string;
  columns: string[] | any;
  dataSource: any;
}

const MyTable = ({ title, columns, dataSource }: MyFormProps) => {
  const isStringArray = (arr) => arr.every((item) => typeof item === 'string');
  console.log({ dataSource, columns });
  const myColumns = isStringArray(columns)
    ? columns.map((item) => {
        return {
          title: item,
          dataIndex: item,
        };
      })
    : columns;
  //   const myColumns = [
  //     {
  //       title: 'Name',
  //       dataIndex: 'name',
  //       render: (text: string) => <a>{text}</a>,
  //     },
  //     {
  //       title: 'Age',
  //       dataIndex: 'age',
  //     },
  //     {
  //       title: 'Address',
  //       dataIndex: 'address',
  //     },
  //   ];
  return (
    <div>
      <Typography.Title level={4}>{title}</Typography.Title>
      <div>
        <Input placeholder="查询name" />
      </div>
      <Table columns={myColumns} dataSource={dataSource} />
    </div>
  );
};

export default MyTable;
