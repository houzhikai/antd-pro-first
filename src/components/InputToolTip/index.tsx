import { Tooltip, Input } from 'antd';
import { useModel } from '@umijs/max';

import styles from './index.less';

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
      <div
        style={{
          background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className={className}
      >
        <span>Name：</span>
        <Input
          style={{ textAlign: 'start', padding: '5px 0' }}
          // value={defaultValue}
          // onChange={handleChange}
          defaultValue={defaultValue}
          onPressEnter={handleChange}
          onBlur={handleChange}
          bordered={false}
          className={styles['input-label']}
        />
      </div>
    </Tooltip>
  );
};

export default InputToolTip;
