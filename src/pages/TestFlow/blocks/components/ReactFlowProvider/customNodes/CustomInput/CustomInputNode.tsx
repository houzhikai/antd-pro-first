import { Handle, Position } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import styles from './index.less';

const CustomInputNode = () => {
  return (
    <div>
      <InputToolTip
        defaultValue="开始标签"
        background="#fda98d"
        className={styles.name1}
      />
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CustomInputNode;
