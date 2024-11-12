import React from 'react';
import { Table } from 'antd';
// import type { TableColumnsType } from 'antd';

// interface DataType {
//   key: React.Key;
//   failName: string;
//   failCount: number;
//   x10y19: string;
//   x10y20: string;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     key: '1',
//     title: 'Fail Name',
//     dataIndex: 'failName',
//     width: 100,
//     fixed: 'left',
//   },
//   {
//     key: '2',
//     title: 'Fail Count',
//     dataIndex: 'failCount',
//     width: 100,
//     fixed: 'left',
//   },
//   {
//     key: '3',
//     title: 'x10y20',
//     dataIndex: 'x10y20',
//   },
//   {
//     key: '4',
//     title: 'x10y19',
//     dataIndex: 'x10y19',
//   },
// ];

const columns = [
  {
    key: 'failType',
    title: 'Fail Type',
    dataIndex: 'failType',
    width: 80,
  },
  {
    key: 'failCount',
    title: 'Fail Count',
    dataIndex: 'failCount',
    width: 80,
  },
  {
    key: 'singleBit',
    title: 'Single Bit',
    dataIndex: 'singleBit',
    width: 80,
  },
  {
    key: 'DbBitCol',
    title: 'Double Bit Col',
    dataIndex: 'DbBitCol',
    width: 80,
  },
  {
    key: 'dbBitRow',
    title: 'Double Bit Row',
    dataIndex: 'dbBitRow',
    width: 80,
  },
  {
    key: 'quadBit',
    title: 'Quad Bit',
    dataIndex: 'quadBit',
    width: 80,
  },
  {
    key: 'allBL',
    title: 'All BL',
    dataIndex: 'allBL',
    width: 80,
  },
  {
    key: 'allWL',
    title: 'All WL',
    dataIndex: 'allWL',
    width: 80,
  },
];
const dataSource: any[] = Array.from({ length: 100 }, (_, index) => ({
  key: (index + 1).toString(),
  failType: index === 0 ? 'Total' : `0, ${index}`,
  failCount: 60,
  singleBit: 10,
  DbBitCol: 10,
  dbBitRow: 10,
  quadBit: 10,
  allBL: 10,
  allWL: 10,
}));
const FailDutTablesPage: React.FC = () => {
  const [firstData, ...restData] = dataSource;
  return (
    <>
      <Table
        style={{ width: 640 }}
        bordered
        columns={columns}
        dataSource={[firstData]}
        pagination={false}
        showHeader={true}
      />
      <Table
        style={{ width: 640 }}
        showHeader={false}
        bordered
        columns={columns}
        dataSource={restData}
        scroll={{ x: 'max-content', y: 350 }}
        pagination={false}
      />
    </>
  );
};

export default FailDutTablesPage;
