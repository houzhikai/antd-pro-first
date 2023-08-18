import { onDragStart } from '@/components/onDragStart';
import styles from './index.less';

const LoopNode = () => {
  return (
    <div
      className={styles.wrapper}
      onDragStart={(event) => onDragStart(event, 'custom-loop')}
      draggable
    >
      {/* rhomboid：菱形,使用通过z轴旋转得到，后续添加节点时有margin问题 */}
      {/* <div className={styles.rhomboid}></div>
      <div className={styles.name}>LoopNode</div> */}
      {/* 正方形转菱形，不占用多余空间 */}
      <div className={styles.box}>
        <span>标题</span>
      </div>
    </div>
  );
};

export default LoopNode;
