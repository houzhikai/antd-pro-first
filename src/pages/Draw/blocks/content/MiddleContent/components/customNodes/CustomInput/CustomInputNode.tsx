import { Handle, Position } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import { Popover } from 'antd';
import PopoverButtonList from '../../PopoverButtonList';

import styles from './index.less';

const CustomInputNode = () => {
  return (
    <Popover
      placement="right"
      title=""
      content={PopoverButtonList}
      trigger="click"
    >
      <div>
        {/* <NodeToolbar position={Position.Right}>
          <Button>test</Button>
        </NodeToolbar> */}
        <InputToolTip
          defaultValue="开始标签"
          background="#fda98d"
          className={styles.name1}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={{ background: '#fff', border: '1px solid #1a192b' }} // 空心的输出，实心的输入
        />
      </div>
    </Popover>
  );
};

export default CustomInputNode;
