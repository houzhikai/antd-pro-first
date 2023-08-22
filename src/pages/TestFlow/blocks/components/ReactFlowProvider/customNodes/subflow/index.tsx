import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';
import CustomInput from '../CustomInput';
import MiddleNode from '../MiddleNode';
import BadBin from '../OutBin/BadBinNode';
import GoodBin from '../OutBin/GoodBinNode';

const Subflow = () => {
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'custom-subflow')}
      draggable
    >
      <div className={styles.content}>
        <div className={styles.title}>subflow:</div>
        <div className={styles.item}>
          <CustomInput maxWidth={115} />
          {/* 向下的箭头 */}
          <div
            className={`${styles.arrow} ${styles['arrow-hor']} ${styles.right}`}
          />
        </div>
        <div className={styles.item}>
          <MiddleNode maxWidth={115} />
        </div>
        <div className={styles.item}>
          {/* 向下的箭头 */}
          <div
            className={` ${styles.arrow} ${styles['arrow-hor']} ${styles.right}`}
          />
          <GoodBin maxWidth={102} margin="10px 0" />
        </div>
        <div className={styles.item}>
          {/* 横线 */}
          <div className={`${styles['arrow-cross']}`} />
          {/* 向下的箭头 */}
          <div
            className={`${styles.arrow1} ${styles['arrow-hor1']} ${styles.right1}`}
          />
          <BadBin maxWidth={102} marginLeft={102} />
        </div>
      </div>
    </div>
  );
};

export default Subflow;
