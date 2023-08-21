import { Handle, Position } from 'reactflow';
import styles from './index.less';
import InputToolTip from '@/components/InputToolTip';

const MiddleNode = ({ data }) => {
  return (
    <div>
      {/* <div className={styles.name}>{data.label}</div> */}
      <InputToolTip
        defaultValue={data.label}
        background="#4c85d9"
        className={styles.name1}
      />
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

export default MiddleNode;
