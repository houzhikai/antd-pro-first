import { Table } from 'antd';

import styles from '../../index.less';

interface DataType {
  key: string;
  name: string;
  code: string;
  color: string;
  count: string;
  percent: string;
}
const DataStatistics = () => {
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
      align: 'center',
    },
    {
      title: 'Code',
      dataIndex: 'code',
      width: 100,
      align: 'center',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      width: 100,
      align: 'center',
      render: (text) => {
        return <div style={{ background: text, height: 30 }}></div>;
      },
    },
    {
      title: 'Count',
      dataIndex: 'count',
      width: 100,
      align: 'center',
    },
    {
      title: 'percent',
      dataIndex: 'percent',
      width: 100,
      align: 'center',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'PassRepaired',
      code: '1',
      color: '#04b200',
      count: '51',
      percent: '30.10%',
    },
    {
      key: '2',
      name: 'PassNoRepair',
      code: '2',
      color: '#03ff01',
      count: '37',
      percent: '21.89%',
    },
    {
      key: '3',
      name: 'ContunuityFail',
      code: '3',
      color: '#fd0003',
      count: '32',
      percent: '10.93%',
    },
    {
      key: '4',
      name: 'LeakageFail',
      code: '4',
      color: '#3f6063',
      count: '26',
      percent: '15.30%',
    },
    {
      key: '5',
      name: 'DynIddFail',
      code: '5',
      color: '#fffd00',
      count: '10',
      percent: '5.92%',
    },
    {
      key: '6',
      name: 'StaticIddFail',
      code: '6',
      color: '#00007e',
      count: '0',
      percent: '4.73%',
    },
    {
      key: '7',
      name: 'RepairFail',
      code: '7',
      color: '#ff00ff',
      count: '5',
      percent: '2.96%',
    },
    {
      key: '8',
      name: 'Total',
      code: '',
      color: '',
      count: '169',
      percent: '100%',
    },
  ];

  return (
    <div className={styles.datastatistics}>
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        bordered
        pagination={false}
      />
    </div>
  );
};

export default DataStatistics;
