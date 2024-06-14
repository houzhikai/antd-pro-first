import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '../../../components/containers';
import SingleModePages from '../../SingleModePages';
import DetailNavActionPage from '../../SingleModePages/DetailDataPage/NavAction';

const SingleModeModal = () => {
  const { isSingleModalOpen, setSingleIsModalOpen } = ProviderFunc();

  const handleCloseDrawer = () => {
    setSingleIsModalOpen(false);
  };
  return (
    <Drawer
      styles={{ header: { padding: '8px 16px' }, body: { padding: '0 16px' } }}
      width="100vw"
      title={
        <div className="bitmap-Drawer-layout">
          <div>Single Mode</div>
          <DetailNavActionPage />
          <div />
        </div>
      }
      closeIcon={null}
      destroyOnClose
      open={isSingleModalOpen}
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
      <SingleModePages />
    </Drawer>
  );
};

export default SingleModeModal;
