import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '../../../components/containers';
import StackNavAction from '../../StackModalPages/NavAction/StackNavAction';
import StackModalPages from '../../StackModalPages/indx';

const StackModeModalPage = () => {
  const { isStackModalOpen, setIsStackModalOpen, setScaleNumber, setSingleModeData, singleModeData } = ProviderFunc();

  const handleCloseDrawer = () => {
    setSingleModeData({ data: [], info: {} });
    setIsStackModalOpen(false);
    setScaleNumber(256);
  };

  return (
    <Drawer
      styles={{ header: { padding: '8px 16px' }, body: { padding: '0 16px' } }}
      width='100vw'
      title={
        <div className='bitmap-Drawer-layout'>
          <div>Stack Mode</div>
          <StackNavAction />
          <div />
        </div>
      }
      closeIcon={null}
      open={isStackModalOpen}
      onClose={handleCloseDrawer}
      extra={<CloseOutlined style={{ cursor: 'pointer' }} onClick={handleCloseDrawer} onMouseDown={undefined} />}
    >
      <StackModalPages />
    </Drawer>
  );
};

export default StackModeModalPage;
