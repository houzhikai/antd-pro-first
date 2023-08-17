import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

interface BadBinProps {
  maxWidth?: number;
  marginLeft?: number;
}

const BadBin = (prop: BadBinProps) => {
  const { maxWidth, marginLeft } = prop;
  return (
    <div
      style={{ maxWidth, marginLeft }}
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'bad-bin')}
      draggable
    >
      <div className={styles.name}>BadBin</div>
    </div>
  );
};

export default BadBin;
