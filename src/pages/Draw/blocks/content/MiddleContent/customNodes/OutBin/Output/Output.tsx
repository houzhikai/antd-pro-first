import { Handle, Position } from 'reactflow';
import styles from './index.less';
import { Popover } from 'antd';
import PopoverButtonList from '../../../PopoverButtonList';
import { useModel } from '@umijs/max';

const OutputNode = () => {
  const { togglePort } = useModel('useDrawModel');
  return (
    <Popover
      placement="right"
      title=""
      content={PopoverButtonList}
      trigger="hover"
    >
      <div>
        <div className={styles.wrapper}>FB1</div>
        <Handle
          position={Position[togglePort]}
          className={styles.top}
          type="target"
          id="a"
        />
      </div>
    </Popover>
  );
};

export default OutputNode;
