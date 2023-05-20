import { ProCard } from '@ant-design/pro-components';
import styles from '../index.less';

const InterfaceStyle = () => {
  return (
    <div>
      <ProCard
        title=""
        type="inner"
        bordered
        bodyStyle={{
          background: '#f2f7ff',
          padding: '8px',
          border: '1px solid #b7d2fb',
          borderRadius: '6px',
        }}
      >
        <div className={styles.content}>
          <div className={styles.get}>GET</div>
          <div style={{ marginLeft: 20 }}>/api/dbm/site/reader</div>
        </div>
      </ProCard>
      <ProCard
        style={{ margin: '20px 0' }}
        title=""
        type="inner"
        bordered
        bodyStyle={{
          background: '#f2faf4',
          padding: '8px',
          border: '1px solid #b7d2fb',
          borderRadius: '6px',
        }}
      >
        <div className={styles.content}>
          <div className={styles.post}>POST</div>
          <div style={{ marginLeft: 20 }}>/api/dbm/site/reader</div>
        </div>
      </ProCard>
    </div>
  );
};

export default InterfaceStyle;
