import React from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ProviderFunc } from '../../components/containers';
// import StackNavAction from '../StackModalPages/NavAction/StackNavAction';
// import StackModalPages from '../StackModalPages/indx';
import SingleNavPage from './NavPage/SingleNavPage';
import StackNavPage from './NavPage/StackNavPage';
import DrawContentPage from './DrawContentPage';
import { logo } from '../../icons/base64/logo';
import MyLogo from '@/components/MyLogo';

const BitMapModalPages = () => {
  const {
    isStackModalOpen,
    isSingleModalOpen,
    setSingleIsModalOpen,
    setIsStackModalOpen,
    setScaleNumber,
    setBitmapData,
    bitmapData,
  } = ProviderFunc();
  const handleCloseDrawer = () => {
    if (isStackModalOpen) {
      // 堆叠模式
      setIsStackModalOpen(false);
    } else {
      // 单例模式
      setSingleIsModalOpen(false);
    }
    setScaleNumber(256);
    setBitmapData({ data: [], info: {} });
  };

  return (
    <Drawer
      styles={{ header: { padding: '8px 16px' }, body: { padding: '0 16px' } }}
      width="100vw"
      title={
        <div className="bitmap-Drawer-layout">
          <MyLogo src={logo} title="BitMap" />
          {/* <div>{isSingleModalOpen ? 'Single Mode' : 'Stack Mode'}</div> */}
          {/* {isSingleModalOpen ? <SingleNavPage /> : <StackNavPage />} */}
          {/* 目前只保留单例模式的入口，所以只展示 单例模式的导航栏 */}
          <SingleNavPage />
          <div />
        </div>
      }
      closeIcon={null}
      open={isStackModalOpen || isSingleModalOpen}
      onClose={handleCloseDrawer}
      extra={
        <CloseOutlined
          style={{ cursor: 'pointer' }}
          onClick={handleCloseDrawer}
          onMouseDown={undefined}
        />
      }
      destroyOnClose
    >
      {bitmapData.data.length > 0 && <DrawContentPage />}
    </Drawer>
  );
};

export default BitMapModalPages;
