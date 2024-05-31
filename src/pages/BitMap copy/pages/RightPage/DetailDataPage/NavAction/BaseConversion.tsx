import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { RadioChangeEvent, Radio } from 'antd';

const BaseConversion = () => {
  const { baseConversion, setBaseConversion, data } = ProviderFunc();
  const options = [
    { value: 'Hex', label: 'Hex' },
    { value: 'Dec', label: 'Dec' },
    { value: 'Oct', label: 'Oct' },
  ];

  const onChange = (e: RadioChangeEvent) => {
    setBaseConversion(e.target.value);
  };
  return (
    <Radio.Group
      disabled={data.length === 0}
      style={{ margin: '0 10px' }}
      value={baseConversion}
      onChange={onChange}
      options={options}
    />
  );
};

export default BaseConversion;
