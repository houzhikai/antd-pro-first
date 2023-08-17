import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const GoodBin = () => {
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'good-bin')}
      draggable
      // 为了上下边距
    >
      <div className={styles.name}>goodBin</div>
    </div>
  );
};

export default GoodBin;
