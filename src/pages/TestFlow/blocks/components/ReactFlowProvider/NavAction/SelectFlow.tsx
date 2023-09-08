import { useModel } from '@umijs/max';
import { Select } from 'antd';

const SelectFlow = () => {
  const { setSelectFlow } = useModel('useTestFlowModel');

  const options = [
    { value: 'test1', label: 'test1' },
    { value: 'test2', label: 'test2' },
    { value: 'test3', label: 'test3' },
    { value: 'test4', label: 'test4' },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectFlow(value);
  };
  return (
    <div>
      请选择您的流程图：
      <Select
        defaultValue="test1"
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectFlow;
