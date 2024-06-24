import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import StackNavAction from '../../StackModalPages/NavAction/StackNavAction';
import StackModalPages from '../../StackModalPages/indx';

const StackModeModalPage = () => {
  const { isStackModalOpen, setIsStackModalOpen } = ProviderFunc();

  const handleCloseDrawer = () => {
    setIsStackModalOpen(false);
  };

  return (
    <Drawer
      styles={{ header: { padding: '8px 16px' }, body: { padding: '0 16px' } }}
      width="100vw"
      title={
        <div className="bitmap-Drawer-layout">
          <div>Stack Mode</div>
          <StackNavAction />
          <div />
        </div>
      }
      closeIcon={null}
      open={isStackModalOpen}
      onClose={handleCloseDrawer}
      extra={
        <CloseOutlined
          style={{ cursor: 'pointer' }}
          onClick={handleCloseDrawer}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onMouseDown={undefined}
        />
      }
    >
      <StackModalPages />
    </Drawer>
  );
};

export default StackModeModalPage;
