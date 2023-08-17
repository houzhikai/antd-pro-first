import { Handle, Position } from 'reactflow';
import styles from './index.less';

const Subflow = ({ data }) => {
  return (
    <div>
      <div className={styles.name}>{data.label}-11</div>
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

export default Subflow;
