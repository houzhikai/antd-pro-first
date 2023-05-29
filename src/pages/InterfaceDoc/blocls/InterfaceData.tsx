import { ProCard } from '@ant-design/pro-components';
import styles from '../index.less';
import { useState } from 'react';
import DetailsData from './components/DetailsData';

const InterfaceData = (value) => {
  const data = value.data;
  const [openList, setOpenList] = useState<string[]>([]);
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
  const handleClick = (id) => {
    if (openList.includes(id)) {
      const idList = openList.filter((item) => item !== id);
      setOpenList(idList);
    } else {
      setOpenList((oldOpenList) => [...oldOpenList, id]);
    }
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <ProCard type="inner" bordered bodyStyle={bodyStyle}>
        <div className={styles.content} onClick={() => handleClick(data.id)}>
          <div className={isGetType ? styles.get : styles.post}>{type}</div>
          <div style={{ marginLeft: 20 }}>{url}</div>
          <div className={styles.describe}>{data.describe}</div>
        </div>
      </ProCard>
      {openList.includes(data.id) ? (
        <DetailsData data={data.interfaceDataDetail} />
      ) : null}
    </div>
  );
};

export default InterfaceData;
