import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const BadBin = () => {
  return (
    <div onDragStart={(event) => onDragStart(event, 'bad-bin')} draggable>
      <div className={styles.name}>BadBin11</div>
    </div>
  );
};

export default BadBin;
