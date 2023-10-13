import { useModel } from '@umijs/max';
import { Image } from 'antd';
import { onDragStart } from './components/onDragStart';
import softBin from '@/icon/draw/items/ashbin.svg';
import softBin1 from '@/icon/draw/items/softBin.svg';

import styles from './index.less';

const SoftItemList = () => {
  const { softBinData, isOnLine, setSoftBinItem } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {softBinData.map((item, index) => (
        <div key={item.key} className={styles['softBin-item']}>
          <div
            onDragStart={(event) => {
              setSoftBinItem(item);
              return !isOnLine ? onDragStart(event, 'fen-bin') : null;
            }}
          >
            <Image
              src={index === 0 ? softBin1 : softBin}
              width={24}
              preview={false}
              // style={{
              //   transform: 'translateX(-200px)',
              //   filter: `drop-shadow(${item.Color} 200px 0)`,
              // }}
            />
            <div>{item.Name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftItemList;
