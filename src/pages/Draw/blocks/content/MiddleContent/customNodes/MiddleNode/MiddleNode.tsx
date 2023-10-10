import { Handle, Position } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import { useModel } from '@umijs/max';
import { Popover } from 'antd';
import PopoverButtonList from '../../PopoverButtonList';

import styles from './index.less';

const MiddleNode = ({ data }) => {
  const { handleList } = useModel('useTestFlowModel');

  return (
    <Popover
      placement="right"
      title=""
      content={PopoverButtonList}
      trigger="hover"
    >
      <div>
        <InputToolTip defaultValue={data.label} className={styles.name1} />
        {handleList.map((item, index) => (
          <Handle
            key={item.id}
            type={item.type}
            className={styles[item.className]}
            position={Position[item.position]}
            id={`${data.id}.${item.id}.${index}`}
            //@ts-ignore
            test={index}
            style={item?.style}
          />
        ))}
      </div>
    </Popover>
  );
};

export default MiddleNode;
