import { Tooltip, Input } from 'antd';

import styles from './index.less';
import { useModel } from '@umijs/max';

interface InputTooltipProps {
  defaultValue: string;
  background?: string;
  className: string;
}

const InputToolTip = (props: InputTooltipProps) => {
  const { selectedNode, setSelectedNode } = useModel('useDrawModel');
  const { background, className } = props;

  const handleChange = (e) => {
    setSelectedNode(e.target.value);
  };
  const name = selectedNode?.data?.label;
  return (
    <Tooltip title={name?.length > 10 ? name : null}>
      <div style={{ background }} className={className}>
        <Input
          value={selectedNode?.data?.label || 'test'}
          onChange={handleChange}
          bordered={false}
          className={styles['input-label']}
        />
      </div>
    </Tooltip>
  );
};

export default InputToolTip;
