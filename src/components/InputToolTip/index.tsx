import { Tooltip, Input } from 'antd';
import { useModel } from '@umijs/max';

import styles from './index.less';

interface InputTooltipProps {
  defaultValue: string;
  background?: string;
  className: string;
  setIsEdit?: any;
}

const InputToolTip = (props: InputTooltipProps) => {
  const { nodes, setNodes } = useModel('useTestFlowModel');
  const { background, className, defaultValue, setIsEdit } = props;

  const handleEnter = (e) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        return { ...item, data: { label: e.target.value, id: item.data.id } };
      }
      return item;
    });
    setNodes(newData);
    setIsEdit(false);
  };
  return (
    <Tooltip title={defaultValue.length > 10 ? defaultValue : null}>
      <div
        style={{
          background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className={className}
      >
        <Input
          style={{ textAlign: 'start' }}
          // value={defaultValue}
          // onChange={handleChange}
          defaultValue={defaultValue}
          onPressEnter={handleEnter}
          onBlur={handleEnter}
          bordered={false}
          className={styles['input-label']}
        />
      </div>
    </Tooltip>
  );
};

export default InputToolTip;
