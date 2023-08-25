import { useModel } from '@umijs/max';
import { Input } from 'antd';

const TestFlowName = () => {
  const { title, setTitle } = useModel('useTestFlowModel');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <Input
        addonBefore="测试流name："
        placeholder="请输入名称"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
};

export default TestFlowName;
