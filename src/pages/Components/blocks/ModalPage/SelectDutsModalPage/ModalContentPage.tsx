import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import OneDutMultiSelect from './OneDutMultiSelect';
import MultiDutMultiSelect from './MultiDutMultiSelect';

const ModalContentPage = () => {
  const plainOptions = ['One Dut', 'Multi Duts'];
  const [value, setValue] = useState(plainOptions[0]);
  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };
  return (
    <div style={{ padding: '20px 8px' }}>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value} />
      <div style={{ marginTop: 20 }}></div>
      {value === plainOptions[0] && <OneDutMultiSelect />}
      {value === plainOptions[1] && <MultiDutMultiSelect />}
    </div>
  );
};

export default ModalContentPage;
