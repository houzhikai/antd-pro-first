import { Handle, Position } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';

const CustomInputNode = () => {
  return (
    <div>
      <InputToolTip defaultValue="开始标签" background="#fda98d" />
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CustomInputNode;
