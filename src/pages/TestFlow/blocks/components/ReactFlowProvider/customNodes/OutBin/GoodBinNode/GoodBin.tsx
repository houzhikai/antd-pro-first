import styles from './index.less';
import { Handle, Position } from 'reactflow';

interface GoodBinProp {
  maxWidth?: number;
  margin?: string;
}

const GoodBin = (prop: GoodBinProp) => {
  const { maxWidth, margin } = prop;
  return (
    <div style={{ maxWidth, margin }} className={styles.wrapper}>
      <div className={styles.name}>goodBin</div>
      <Handle
        className={styles.top}
        type="source"
        position={Position.Top}
        id="a"
      />
      <Handle
        className={styles.left}
        type="source"
        position={Position.Left}
        id="b"
      />
      <Handle
        className={styles.right}
        type="source"
        position={Position.Right}
        id="c"
      />
      <Handle
        className={styles.bottom}
        type="source"
        position={Position.Bottom}
        id="d"
      />
    </div>
  );
};

export default GoodBin;
