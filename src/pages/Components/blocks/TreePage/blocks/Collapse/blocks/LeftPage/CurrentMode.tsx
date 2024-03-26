import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';
import styles from '../../index.less';

const CurrentMode = () => {
  const [value, setValue] = useState('AC');
  const [valueAC, setValueAC] = useState('');
  const handleChange = (e: RadioChangeEvent) => {
    console.log({ xxx: e.target.value });
    setValue(e.target.value);
  };
  const handleChangeAC = (e) => {
    console.log('radio checked', e.target.value);
    setValueAC(e.target.value);
  };
  return (
    <>
      <div>
        <Radio.Group
          options={['AC', 'DC', 'DIAG']}
          onChange={handleChange}
          value={value}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      {value === 'AC' && (
        <div className={styles['left-Radio-group']}>
          <Radio.Group
            options={['Auto-adjustment', 'Standard', 'Verify Only', 'TDR']}
            onChange={handleChangeAC}
            value={valueAC}
          />
        </div>
      )}
      {value === 'DC' && (
        <div className={styles['left-Radio-group']}>
          <Radio.Group
            options={['Standard', 'Verify Only']}
            onChange={handleChangeAC}
            value={valueAC}
          />
        </div>
      )}
      {value === 'DIAG' && (
        <div className={styles['left-Radio-group']}>
          <Radio.Group
            options={['Standard']}
            onChange={handleChangeAC}
            value={valueAC}
          />
        </div>
      )}
    </>
  );
};

export default CurrentMode;
