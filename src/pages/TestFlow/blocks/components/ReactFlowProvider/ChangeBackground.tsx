import { useModel } from '@umijs/max';
import { Select } from 'antd'
import React from 'react'

const ChangeBackground = () => {
    const { setVariant } = useModel('useTestFlowModel');
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
      setVariant(value);
    };
  return (
    <div>
    请选择您的流程图：
    <Select
      defaultValue="cross"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'cross', label: 'cross' },
        { value: 'dots', label: 'dots' },
        { value: 'lines', label: 'lines' },
      ]}
    />
  </div>
  )
}

export default ChangeBackground