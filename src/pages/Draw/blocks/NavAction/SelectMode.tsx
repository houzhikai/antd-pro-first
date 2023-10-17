import { useModel } from '@umijs/max';
import { Switch, Tooltip } from 'antd';

const SelectMode = () => {
  const { isOnLine, setIsOnLine } = useModel('useDrawModel');
  const handleChange = (check: boolean) => {
    setIsOnLine(check);
  };
  return (
    <Tooltip placement="bottomLeft" title="Debug button">
      <Switch
        checkedChildren="Online"
        unCheckedChildren="Offline"
        defaultChecked={isOnLine}
        onChange={handleChange}
      />
    </Tooltip>
  );
};

export default SelectMode;
