import styles from './index.less';
import { Handle, Position } from 'reactflow';

const GoodBin = () => {
  return (
    <div>
      <div className={styles.name1}>开始标签</div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default GoodBin;
