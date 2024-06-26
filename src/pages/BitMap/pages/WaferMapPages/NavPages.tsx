import React from 'react';
import { Button } from 'antd';
import NavActionPage from '../NavPage/NavActionPage';
import { logo } from '../../icons/base64/logo';
import { ProviderFunc } from '../../components/containers';
import '../../index.css';
import MyLogo from '@/components/MyLogo';

const NavPages = () => {
  const { setIsStackModalOpen } = ProviderFunc();
  const handleOpenStackPage = () => {
    setIsStackModalOpen(true);
  };
  return (
    <div className="bit-map-nav">
      <MyLogo src={logo} title="BitMap" />
      <NavActionPage />
      <div className="bit-map-nav-page">
        <Button size="small" type="primary" onClick={handleOpenStackPage}>
          Composite
        </Button>
      </div>
    </div>
  );
};

export default NavPages;
