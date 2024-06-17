import React from 'react';
import { Button, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { otherColor } from '@/pages/BitMap/icons/base64/otherColor';

const StackModeModalPage = () => {
  const { isStackModalOpen, setIsStackModalOpen, setModifyColorModalObj } =
    ProviderFunc();

  const handleCloseDrawer = () => {
    setIsStackModalOpen(false);
  };

  // 打开 颜色选择 弹窗
  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };
  return (
    <Drawer
      styles={{ header: { padding: '8px 16px' }, body: { padding: '0 16px' } }}
      width="100vw"
      title={
        <div className="bitmap-Drawer-layout">
          <div>Stack Mode</div>
          <Button
            className="bit-map-nav-gap"
            type="text"
            icon={<img width={20} src={otherColor} />}
            onClick={handleOpenColorListModal}
          />
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
      stack UI
    </Drawer>
  );
};

export default StackModeModalPage;
