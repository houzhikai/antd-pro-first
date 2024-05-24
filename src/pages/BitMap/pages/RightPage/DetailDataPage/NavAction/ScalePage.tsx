import { Select } from 'antd';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { scaleNumberOptions } from '@/pages/BitMap/components/initValues';

const ScalePage = () => {
  const { scaleNumber, setScaleNumber, data } = ProviderFunc();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>Scale:</div>
      <Select
        value={scaleNumber}
        disabled={data.length === 0}
        onChange={setScaleNumber}
        style={{ width: 80, marginLeft: 8 }}
        options={scaleNumberOptions}
      />
    </div>
  );
};

export default ScalePage;
