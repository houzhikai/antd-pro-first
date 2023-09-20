import { Handle, Position } from 'reactflow';
import styles from './index.less';
import { Popover } from 'antd';
import PopoverButtonList from '../../../PopoverButtonList';
import { useModel } from '@umijs/max';

const OutputNode = ({ data }) => {
  const { togglePort, getId } = useModel('useDrawModel');
  return (
    <Popover
      placement="right"
      title=""
      content={PopoverButtonList}
      trigger="hover"
    >
      <div>
        <div className={styles.wrapper}>{data.label}</div>
        <Handle
          style={{ background: '#FFF', border: '1px solid #1a192b' }}
          position={Position[togglePort]}
          className={styles.top}
          type="target"
          id={getId()}
        />
      </div>
    </Popover>
  );
};

export default OutputNode;
