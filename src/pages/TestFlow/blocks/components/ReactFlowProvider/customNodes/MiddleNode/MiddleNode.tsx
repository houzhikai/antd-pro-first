import { Handle, Position } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import { Popover } from 'antd';
import PopoverButtonList from '../../PopoverButtonList';

import styles from './index.less';

const MiddleNode = ({ data }) => {
  return (
    <Popover
      placement="right"
      title=""
      content={PopoverButtonList}
      trigger="hover"
    >
      <div>
        {/* <div className={styles.name}>{data.label}</div> */}
        <InputToolTip
          defaultValue={data.label}
          background="#4c85d9"
          className={styles.name1}
        />
        <Handle
          type="target"
          className={styles.top}
          position={Position.Top}
          id="a"
        />
        <Handle
          type="source"
          className={styles.left}
          position={Position.Left}
          id="b"
        />
        <Handle
          type="source"
          className={styles.bottom}
          position={Position.Bottom}
          id="c"
        />
        <Handle
          type="source"
          className={styles.right}
          position={Position.Right}
          id="d"
        />
      </div>
    </Popover>
  );
};

export default MiddleNode;
