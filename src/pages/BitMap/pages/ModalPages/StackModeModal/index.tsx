import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '@/pages/BitMap/components/containers';

const StackModeModalPage = () => {
  const { isStackModalOpen, setIsStackModalOpen } = ProviderFunc();

  const handleCloseDrawer = () => {
    setIsStackModalOpen(false);
  };

  return (
    <Drawer
      width="100vw"
      title={
        <div className="bitmap-Drawer-layout">
          <div>Stack Mode</div>
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
        />
      }
    >
      stack UI
    </Drawer>
  );
};

export default StackModeModalPage;
