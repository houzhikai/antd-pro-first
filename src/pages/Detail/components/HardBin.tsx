import { Table, Typography } from 'antd';
import styles from '../index.less';
import { dataSource } from '../dataList';

export interface IHBIN {
  BINID: number;
  total: number;
  pass: number;
  fail: number;
  yield: string;
}

const DUTS = () => {
  const columns = [
    {
      title: 'BinId',
      dataIndex: 'BINID',
      key: 'BinId',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'Total',
    },
    {
      title: 'Pass',
      dataIndex: 'pass',
      key: 'Pass',
    },
    {
      title: 'Fail',
      dataIndex: 'fail',
      key: 'Fail',
    },
    {
      title: 'Yield（%）',
      dataIndex: 'yield',
      key: 'Yield',
    },
  ];
  return (
    <div className={styles['item-layout']}>
      <Typography.Title style={{ margin: '0 6px 1vh' }} level={4}>
        HardBin
      </Typography.Title>
      <Table
        className={styles.table}
        bordered
        columns={columns}
        dataSource={dataSource.HBIN}
        pagination={false}
        scroll={{ y: `calc(45vh - 70px)` }}
      />
    </div>
  );
};

export default DUTS;
