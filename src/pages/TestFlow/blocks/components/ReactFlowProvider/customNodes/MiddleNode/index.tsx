import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const MiddleNode = () => {
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'custom-middleNode')}
      draggable
    >
      <div className={styles.name}>MiddleNode</div>
    </div>
  );
};

export default MiddleNode;
