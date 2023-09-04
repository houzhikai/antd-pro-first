import { useModel } from '@umijs/max';
import { Select } from 'antd';

const ChangeBackground = () => {
  const { setVariant } = useModel('useTestFlowModel');

  const handleChange = (value: string) => {
    setVariant(value);
  };

  return (
    <div
      style={{
        border: 'none',
        background: '#fff',
        paddingLeft: 6,
        borderRadius: 6,
      }}
    >
      背景图样式：
      <Select
        defaultValue="none"
        style={{ width: 120 }}
        placement="topRight"
        onChange={handleChange}
        options={[
          { value: 'cross', label: 'cross' },
          { value: 'dots', label: 'dots' },
          { value: 'lines', label: 'lines' },
          { value: 'none', label: 'none' },
        ]}
      />
    </div>
  );
};

export default ChangeBackground;
