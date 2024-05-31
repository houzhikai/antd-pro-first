import { Select } from 'antd';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { scaleNumberOptions } from '@/pages/BitMap/components/initValues';
import myFetch from '@/components/myFetch';

const ScalePage = () => {
  const { scaleNumber, setScaleNumber, data, vscodeParams, bitMapPort } =
    ProviderFunc();

  const handleChange = async (value) => {
    setScaleNumber(value);

    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getcompressdata?ratio=${value}`,
        isExceptionHand: true,
      });
      setScaleNumber(value);
      console.log({ res });
    } catch (error) {}
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>Scale:</div>
      <Select
        value={scaleNumber}
        disabled={data.length === 0}
        onChange={handleChange}
        style={{ width: 80, marginLeft: 8 }}
        options={scaleNumberOptions}
      />
    </div>
  );
};

export default ScalePage;
