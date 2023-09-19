import { Tooltip, Input } from 'antd';

import styles from './index.less';
import { useModel } from '@umijs/max';

interface InputTooltipProps {
  defaultValue: string;
  background?: string;
  className: string;
}

const InputToolTip = (props: InputTooltipProps) => {
  const { selectedNode, testUnitItem, setTestUniItem } =
    useModel('useDrawModel');
  const { background, className, defaultValue } = props;

  const handleChange = (e) => {
    setTestUniItem((obj) => {
      return {
        ...obj,
        Name: e.target.value,
      };
    });
  };

  return (
    <Tooltip
      title={selectedNode?.Name?.length > 10 ? selectedNode?.Name : null}
    >
      <div style={{ background }} className={className}>
        <Input
          value={testUnitItem.Name || defaultValue}
          onChange={handleChange}
          bordered={false}
          className={styles['input-label']}
        />
      </div>
    </Tooltip>
  );
};

export default InputToolTip;
