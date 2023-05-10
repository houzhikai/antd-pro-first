import { Table } from 'antd';
import { columns } from './components/columns';
import { data } from './components/data';

import styles from '../index.less';

const DataStatistics = () => {
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
