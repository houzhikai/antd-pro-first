import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const BadBin = () => {
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'bad-bin')}
      draggable
    >
      <div className={styles.name}>BadBin</div>
    </div>
  );
};

export default BadBin;
