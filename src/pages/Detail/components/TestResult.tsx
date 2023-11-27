import { Table, Typography } from 'antd';
import styles from '../index.less';
import { dataSource } from '../dataList';
export interface ISummary {
  total: number;
  pass: number;
  fail: number;
  yield: string;
}

const DUTS = () => {
  const columns = [
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'Total',
    },
    {
      title: 'Pass',
      dataIndex: 'Pass',
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
  const connectColumns = dataSource.CASE.map((item) =>
    Object.keys(item.duts),
  )[0].map((item) => {
    return {
      title: item,
      dataIndex: item,
      key: item,
    };
  });
  const newColumns = columns.concat(connectColumns);
  const dutsList = dataSource.CASE.map((item, index) => {
    return {
      ...item.duts,
      key: index,
    };
  });
  const newDataSource = [...dataSource.CASE, ...dutsList].reduce(
    (result: any, obj) => {
      const existingObj = result.find((item) => item.key === obj.key);

      if (existingObj) {
        Object.assign(existingObj, obj);
      } else {
        result.push(obj);
      }

      return result;
    },
    [],
  );
  return (
    <div className={styles['item-layout']}>
      <Typography.Title style={{ margin: '0 6px 1vh' }} level={4}>
        TestResult
      </Typography.Title>
      <Table
        className={styles.table}
        bordered
        columns={newColumns}
        dataSource={newDataSource}
        pagination={false}
        scroll={{ y: `calc(45vh - 70px)` }}
      />
    </div>
  );
};

export default DUTS;
