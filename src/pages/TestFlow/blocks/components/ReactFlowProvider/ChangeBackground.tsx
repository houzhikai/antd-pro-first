import { useModel } from '@umijs/max';
import { Select } from 'antd';

const ChangeBackground = () => {
  const { setVariant } = useModel('useTestFlowModel');
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setVariant(value);
  };
  return (
    <div>
      流程图背景色：
      <Select
        defaultValue="cross"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'cross', label: 'cross' },
          { value: 'dots', label: 'dots' },
          { value: 'lines', label: 'lines' },
        ]}
      />
    </div>
  );
};

export default ChangeBackground;
