import { Table, Typography } from 'antd';
import styles from '../index.less';
import { dataSource } from '../dataList';
export interface IDUTSummary {
  DUTID: number;
  site: string;
  pass: number;
  fail: number;
  total: number;
  yield: string;
}
const DUTS = () => {
  const columns = [
    {
      title: 'DutId',
      dataIndex: 'DUTID',
      key: 'DutId',
    },
    {
      title: 'Site',
      dataIndex: 'site',
      key: 'Site',
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
      title: 'Total',
      dataIndex: 'total',
      key: 'Total',
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
        Duts
      </Typography.Title>
      <Table
        style={{ minHeight: 500 }}
        className={styles.table}
        bordered
        columns={columns}
        pagination={false}
        dataSource={dataSource.DUT}
        scroll={{ y: `calc(45vh - 70px)` }}
      />
    </div>
  );
};

export default DUTS;
