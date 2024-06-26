import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '../../../components/containers';
import SingleModePages from '../../SingleModePages';
import DetailNavActionPage from '../../SingleModePages/DetailDataPage/NavAction';

const SingleModeModal = () => {
  const { isSingleModalOpen, setSingleIsModalOpen, setScaleNumber, setSingleModeData } = ProviderFunc();

  const handleCloseDrawer = () => {
    setSingleModeData({ data: [], info: {} });
    setSingleIsModalOpen(false);
    setScaleNumber(256);
  };
  return (
    <Drawer
      styles={{ header: { padding: '8px 16px' }, body: { padding: '0 16px' } }}
      width='100vw'
      title={
        <div className='bitmap-Drawer-layout'>
          <div>Single Mode</div>
          <DetailNavActionPage />
          <div />
        </div>
      }
      closeIcon={null}
      destroyOnClose
      open={isSingleModalOpen}
      onClose={handleCloseDrawer}
      maskClosable={false}
      extra={<CloseOutlined style={{ cursor: 'pointer' }} onClick={handleCloseDrawer} onMouseDown={undefined} />}
    >
      <SingleModePages />
    </Drawer>
  );
};

export default SingleModeModal;
