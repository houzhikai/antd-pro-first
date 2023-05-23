import { ProCard } from '@ant-design/pro-components';
import styles from '../../index.less';

interface InterfaceDataProps {
  type?: 'get' | 'post';
  url: string;
}

const InterfaceData = (data: InterfaceDataProps) => {
  const type = data.type || 'get';
  const url = data.url;
  const bodyStyle =
    data.type === 'get'
      ? {
          background: '#f2f7ff',
          padding: '8px',
          border: '1px solid #b7d2fb',
          borderRadius: '6px',
        }
      : {
          background: '#f2faf4',
          padding: '8px',
          border: '1px solid #b7d2fb',
          borderRadius: '6px',
        };

  return (
    <div style={{ margin: '10px 0' }}>
      <ProCard type="inner" bordered bodyStyle={bodyStyle}>
        <div className={styles.content}>
          <div className={styles.get}>{type}</div>
          <div style={{ marginLeft: 20 }}>{url}</div>
        </div>
      </ProCard>
    </div>
  );
};

export default InterfaceData;
