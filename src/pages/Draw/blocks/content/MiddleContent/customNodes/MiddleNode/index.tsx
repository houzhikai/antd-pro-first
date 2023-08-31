import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

interface MiddleNodeProps {
  maxWidth?: number;
}

const MiddleNode = (prop: MiddleNodeProps) => {
  return (
    <div
      style={{ maxWidth: prop.maxWidth }}
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'custom-middleNode')}
      draggable
    >
      <div className={styles.name}>MiddleNode</div>
    </div>
  );
};

export default MiddleNode;
