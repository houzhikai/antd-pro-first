import { Popover, Button, Select } from 'antd';
import { useModel } from '@umijs/max';
import { useState } from 'react';
import { standardColorList } from '@/pages/Echarts/blocks/components/data';

import styles from '../index.less';

const AddHardBin = () => {
  const { setBinMap, binMap } = useModel('useTestFlowModel');
  let [count, setCount] = useState(3);
  const [option, setOption] = useState({ type: 'Pass', bg: 'yellow' });

  const handleSelectColor = (color: string) => {
    setOption((obj) => {
      return {
        ...obj,
        bg: color,
      };
    });
  };
  const handleChange = (value: string) => {
    setOption((obj) => {
      return {
        ...obj,
        type: value,
      };
    });
  };

  const list = (
    <>
      <div>
        Type:
        <Select
          style={{ width: 200 }}
          defaultValue="Pass"
          value={option.type}
          onChange={handleChange}
          size="small"
          options={[
            { value: 'Pass', label: 'Pass' },
            { value: 'Fail', label: 'Fail' },
          ]}
        />
      </div>
      <div>
        Color:{' '}
        <div style={{ display: 'flex', margin: '20px 0' }}>
          {standardColorList.map((item) => (
            <div
              key={item}
              style={{
                margin: '0 10px',
                width: 20,
                height: 20,
                cursor: 'pointer',
                background: item,
              }}
              onClick={() => handleSelectColor(item)}
            />
          ))}
        </div>
      </div>
    </>
  );

  const handleAddOption = () => {
    const xxx = [
      {
        Name: `HB${count}`,
        Number: count,
        Type: option.type,
        Color: option.bg,
      },
    ];
    const yyy = binMap.HardBin.concat(xxx);
    setBinMap((c: any) => {
      return {
        ...c,
        HardBin: yyy,
      };
    });
    setCount((c) => c + 1);
  };
  return (
    <Popover placement="right" title="" content={list} trigger="hover">
      <Button onClick={handleAddOption} className={styles['bottom-item']}>
        add option
      </Button>
    </Popover>
  );
};

export default AddHardBin;
