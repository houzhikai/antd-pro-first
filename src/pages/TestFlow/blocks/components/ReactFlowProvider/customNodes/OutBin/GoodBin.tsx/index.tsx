import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const GoodBin = () => {
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'good-bin')}
      draggable
    >
      <div className={styles.name}>goodBin</div>
    </div>
  );
};

export default GoodBin;
