import { Radio } from 'antd';
import { useState } from 'react';

const TestDemo = () => {
  const [value, setValue] = useState<any>();
  const options = ['A', 'B', 'C', 'D'];
  const onChange = (e) => {
    const checked = e.target.value;
    setValue(checked);
  };
  const handleClick = (e) => {
    console.log(111, e.target.value);
    if (value === e.target.value) {
      setValue(null);
    }
  };
  console.log({ value });

  return (
    <Radio.Group onChange={onChange} value={value}>
      {options.map((item) => (
        <Radio onClick={handleClick} key={item} value={item}>
          {item}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default TestDemo;
