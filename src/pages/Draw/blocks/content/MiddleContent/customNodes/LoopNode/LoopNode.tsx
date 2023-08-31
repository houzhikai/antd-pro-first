import { Handle, Position } from 'reactflow';
import styles from './index.less';

const LoopNode = () => {
  return (
    <div className={styles.wrapper}>
      {/* rhomboid：菱形,使用通过z轴旋转得到，后续添加节点时有margin问题 */}
      {/* <div className={styles.rhomboid}></div>
      <div className={styles.name}>LoopNode</div> */}

      <div className={styles.box}>
        <span>标题</span>
      </div>
      <Handle
        className={styles.top}
        type="source"
        position={Position.Top}
        id="a"
      />
      <Handle
        className={styles.left}
        type="source"
        position={Position.Left}
        id="b"
      />
      <Handle
        className={styles.right}
        type="source"
        position={Position.Right}
        id="c"
      />
      <Handle
        className={styles.bottom}
        type="source"
        position={Position.Bottom}
        id="d"
      />
    </div>
  );
};

export default LoopNode;
