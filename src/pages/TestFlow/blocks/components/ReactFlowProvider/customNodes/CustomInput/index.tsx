import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

interface CustomInputProps {
  maxWidth?: number;
}

const CustomInput = (props: CustomInputProps) => {
  // const handleStyle = { left: 10 };
  return (
    <div
      style={{ maxWidth: props.maxWidth }}
      onDragStart={(event) => onDragStart(event, 'custom-input')}
      draggable
    >
      <div className={styles.name}>开始标签</div>
    </div>
  );
};

export default CustomInput;
