import React from 'react';
import { useLowCodePlatformProvider } from '../../components/container';
import { Input } from 'antd';
import '../../index.less';

const RightPage = () => {
  const { selectedItem } = useLowCodePlatformProvider();

  const SelectedItem = (name) => {
    const xxx = typeof name !== 'object' ? name : null;
    return (
      <div className="right-page-item">
        <span className="label">name: </span>
        <Input placeholder="please input name" value={xxx} />
      </div>
    );
  };

  return (
    <div className="right-page">
      {Object.keys(selectedItem || {}).length > 0 ? (
        <>
          <SelectedItem name={selectedItem || 'name'} />
        </>
      ) : null}
    </div>
  );
};

export default RightPage;
