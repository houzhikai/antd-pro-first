import React from 'react';
import MyLogo from '@/components/MyLogo';
import { logo } from '../../icons/base64/logo';
import NavActionPage from '../NavPage/NavActionPage';
import '../../index.css';
import { Button } from 'antd';
import { ProviderFunc } from '../../components/containers';

const NavPages = () => {
  const { setIsStackModalOpen } = ProviderFunc();
  const handleOpenStackPage = () => {
    setIsStackModalOpen(true);
  };
  return (
    <div className="bit-map-nav">
      <MyLogo src={logo} title="BitMap" />
      <NavActionPage />
      <Button size="small" type="primary" onClick={handleOpenStackPage}>
        Composite
      </Button>
    </div>
  );
};

export default NavPages;
