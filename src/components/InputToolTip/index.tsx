import { Tooltip, Input } from 'antd';
import { useState } from 'react';
import styles from './index.less';

interface InputTooltipProps {
  defaultValue: string;
  background?: string;
}

const InputToolTip = (props: InputTooltipProps) => {
  const { defaultValue, background } = props;
  const [value, setValue] = useState(defaultValue || '');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Tooltip title={value.length > 10 ? value : null}>
      <div style={{ background }} className={styles.name1}>
        <Input
          defaultValue="开始标签"
          value={value}
          onChange={handleChange}
          bordered={false}
          className={styles['input-label']}
        />
      </div>
    </Tooltip>
  );
};

export default InputToolTip;
