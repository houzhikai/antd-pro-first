import { Tooltip, Input } from 'antd';

import styles from './index.less';
import { useModel } from '@umijs/max';

interface InputTooltipProps {
  defaultValue: string;
  background?: string;
  className: string;
}

const InputToolTip = (props: InputTooltipProps) => {
  const { nodes, setNodes } = useModel('useTestFlowModel');
  const { background, className, defaultValue } = props;

  const handleChange = (e) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        return { ...item, data: { label: e.target.value, id: item.data.id } };
      }
      return item;
    });
    setNodes(newData);
  };

  return (
    <Tooltip title={defaultValue.length > 10 ? defaultValue : null}>
      <div style={{ background }} className={className}>
        <Input
          value={defaultValue}
          onChange={handleChange}
          bordered={false}
          className={styles['input-label']}
        />
      </div>
    </Tooltip>
  );
};

export default InputToolTip;
