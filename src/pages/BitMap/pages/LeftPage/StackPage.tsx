import React from 'react';
import { Button, Checkbox } from 'antd';
import { ProviderFunc } from '../../components/containers';

const StackPage = () => {
  const { setIsStack, physicalFileList, setSelectedTreeDataList } =
    ProviderFunc();
  const handleChange = (e) => {
    const checked = e.target.checked;
    if (!checked) {
      setSelectedTreeDataList([]);
    }
    setIsStack(checked);
  };
  return (
    <div style={{ marginLeft: 10 }}>
      <div>
        <span>Composite</span>
        <Checkbox
          style={{ marginLeft: 0, margin: 10 }}
          disabled={physicalFileList.length === 0}
          onChange={handleChange}
        />
      </div>
      <Button
        size="small"
        type="primary"
        disabled={physicalFileList.length === 0}
      >
        Confirm
      </Button>
    </div>
  );
};

export default StackPage;
