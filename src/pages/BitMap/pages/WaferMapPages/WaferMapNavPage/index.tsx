import { Button } from 'antd';
import React from 'react';
import { ProviderFunc } from '../../../components/containers';
import { logo } from '../../../icons/base64/logo';
import NavActionPage from './NavActionPage';
import '../../../index.css';
import MyLogo from '@/components/MyLogo';

const WaferMapNavPage = () => {
  const { setIsStackModalOpen } = ProviderFunc();
  const handleOpenStackPage = () => {
    setIsStackModalOpen(true);
  };
  return (
    <div className="bit-map-nav">
      <MyLogo src={logo} title="BitMap" />
      <NavActionPage />
      {/* 取消 堆叠按钮 入口 */}
      {/*  <div className='bit-map-nav-page'>
        <Button size='small' type='primary' onClick={handleOpenStackPage}>
          Composite
        </Button>
      </div>*/}
    </div>
  );
};

export default WaferMapNavPage;
