import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const CustomInput = () => {
  // const handleStyle = { left: 10 };
  return (
    <div onDragStart={(event) => onDragStart(event, 'custom-input')} draggable>
      <div className={styles.name}>开始标签</div>
    </div>
  );
};

export default CustomInput;
