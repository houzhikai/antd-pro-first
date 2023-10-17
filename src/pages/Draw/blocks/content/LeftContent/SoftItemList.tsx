import { useModel } from '@umijs/max';
import { Tag } from 'antd';
import { onDragStart } from './components/onDragStart';
// import softBin from '@/icon/draw/items/ashbin.svg';
// import softBin1 from '@/icon/draw/items/softBin.svg';

import styles from './index.less';

const SoftItemList = () => {
  const { softBinData, isOnLine, setSoftBinItem } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {softBinData.map((item) => (
        <div key={item.key} className={styles['softBin-item']}>
          <div
            onDragStart={(event) => {
              setSoftBinItem(item);
              return !isOnLine ? onDragStart(event, 'fen-bin') : null;
            }}
            draggable
          >
            <Tag className={styles.classToolTip} color={item.Color}>
              <span>{item.Name}</span>
            </Tag>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftItemList;
