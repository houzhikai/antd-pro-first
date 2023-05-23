import { ProCard } from '@ant-design/pro-components';
import styles from '../../index.less';

interface InterfaceDataProps {
  type?: 'GET' | 'POST';
  url: string;
}

const InterfaceData = (data: InterfaceDataProps) => {
  const type = data.type || 'GET';
  const url = data.url;
  const isGetType = data.type === 'GET';
  const bodyStyle = isGetType
    ? {
        background: '#f2f7ff',
        padding: '8px',
        border: '2px solid #b7d2fb',
        borderRadius: '6px',
      }
    : {
        background: '#f2faf4',
        padding: '8px',
        border: '2px solid #b6ddbf',
        borderRadius: '6px',
      };
  const handleClick = (url) => {
    console.log(11, url);
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <ProCard type="inner" bordered bodyStyle={bodyStyle}>
        <div className={styles.content} onClick={() => handleClick(url)}>
          <div className={isGetType ? styles.get : styles.post}>{type}</div>
          <div style={{ marginLeft: 20 }}>{url}</div>
        </div>
      </ProCard>
    </div>
  );
};

export default InterfaceData;
