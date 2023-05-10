import { Table } from 'antd';
// import { columns } from './components/columns';
import { data } from './components/data';
import { useModel } from '@umijs/max';

import styles from '../index.less';

const DataStatistics = () => {
  const { setIsShowModal } = useModel('useEchartsModel');

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
        const handleClick = () => {
          setIsShowModal(true);
        };
        return (
          <div
            style={{ background: text, height: 30, cursor: 'pointer' }}
            onClick={handleClick}
          />
        );
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
