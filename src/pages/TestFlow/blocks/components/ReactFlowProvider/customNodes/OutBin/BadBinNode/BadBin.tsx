import { Handle, Position } from 'reactflow';
import styles from './index.less';

const BadBin = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>BadBin</div>
      <Handle
        type="target"
        className={styles.top}
        position={Position.Top}
        id="a"
      />
    </div>
  );
};

export default BadBin;
