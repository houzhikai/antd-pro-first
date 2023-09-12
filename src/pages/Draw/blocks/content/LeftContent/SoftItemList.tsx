import { useModel } from '@umijs/max';
import softBin from '@/icon/draw/items/ashbin.svg';
import { Image } from 'antd';

import styles from './index.less';
import { onDragStart } from './components/onDragStart';

const SoftItemList = () => {
  const { softBinData, isOnLine } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {softBinData.map((item) => (
        <div key={item.key} className={styles['softBin-item']}>
          <div
            onDragStart={(event) =>
              !isOnLine ? onDragStart(event, 'custom-output') : null
            }
          >
            <Image src={softBin} width={24} preview={false} />
            <div>{item.Name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftItemList;
