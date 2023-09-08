import { useModel } from '@umijs/max';
import softBin from '@/icon/draw/items/softBin.svg';
import { Image } from 'antd';

import styles from './index.less';
import { onDragStart } from './components/onDragStart';

const SoftItemList = () => {
  const { softBinData } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {softBinData.map((item) => (
        <div key={item.Key} className={styles['softBin-item']}>
          <div onDragStart={(event) => onDragStart(event, 'output')}>
            <Image src={softBin} width={24} preview={false} />
            <div>{item.Name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftItemList;
