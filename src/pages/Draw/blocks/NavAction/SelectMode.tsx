import { useModel } from '@umijs/max';
import { Switch, Tooltip } from 'antd';

const SelectMode = () => {
  const { isOnLine, setIsOnLine } = useModel('useDrawModel');
  const handleChange = (check: boolean) => {
    setIsOnLine(check);
  };
  return (
    <Tooltip placement="bottomLeft" title="调试按钮">
      <Switch
        checkedChildren="在线"
        unCheckedChildren="离线"
        defaultChecked={isOnLine}
        onChange={handleChange}
      />
    </Tooltip>
  );
};

export default SelectMode;
