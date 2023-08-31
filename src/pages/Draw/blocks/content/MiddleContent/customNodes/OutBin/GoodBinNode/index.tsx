import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

interface GoodBinProps {
  margin: string;
  maxWidth?: string | number;
}

const GoodBin = (props: GoodBinProps) => {
  const { margin, maxWidth } = props;
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'good-bin')}
      draggable
      // 为了上下边距
      style={{ margin, maxWidth }}
    >
      <div className={styles.name}>goodBin</div>
    </div>
  );
};

export default GoodBin;
