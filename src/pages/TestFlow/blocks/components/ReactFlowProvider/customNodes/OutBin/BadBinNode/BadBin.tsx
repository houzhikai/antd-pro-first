import { Handle, Position } from 'reactflow';
import styles from './index.less';

const BadBin = () => {
  return (
    <div>
      <div className={styles.test}></div>
      <div className={styles.name}>BadBin</div>
      <Handle
        type="target"
        className={styles.top}
        position={Position.Top}
        id="a"
      />
      <Handle
        type="target"
        className={styles.left}
        position={Position.Left}
        id="b"
      />
      <Handle
        type="target"
        className={styles.bottom}
        position={Position.Bottom}
        id="c"
      />
      <Handle
        type="target"
        className={styles.right}
        position={Position.Right}
        id="d"
      />
    </div>
  );
};

export default BadBin;
