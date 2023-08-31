import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

interface BadBinProps {
  maxWidth?: number;
  marginLeft?: number;
}

const BadBin = (prop: BadBinProps) => {
  const { maxWidth, marginLeft } = prop;
  return (
    // 之前的写法，但是有一个问题就是隐藏的border三角形也能占空间
    // <div
    //   style={{ maxWidth, marginLeft }}
    //   // className={styles.wrapper}
    //   onDragStart={(event) => onDragStart(event, 'bad-bin')}
    //   draggable
    // >
    //   <div className={styles.test}>BadBin</div>
    // </div>
    <div
      style={{ maxWidth, marginLeft }}
      // className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'bad-bin')}
      draggable
    >
      <div className={styles.test}></div>
      <div className={styles.name}>BadBin</div>
    </div>
  );
};

export default BadBin;
