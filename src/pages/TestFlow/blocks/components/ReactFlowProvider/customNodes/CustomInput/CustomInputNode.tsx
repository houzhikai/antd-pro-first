import { Handle, Position } from 'reactflow';
import styles from './index.less';

const CustomInputNode = () => {
  return (
    <div>
      <div className={styles.name1}>开始标签</div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CustomInputNode;
