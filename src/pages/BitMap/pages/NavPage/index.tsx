import React from 'react';
import NavActionPage from './NavActionPage';
import MyLogo from '@/components/MyLogo';
import NavAction from '../SingleModePages/DetailDataPage/NavAction';
import { logo } from '../../icons/base64/logo';
import '../../index.css';

const NavPage = () => {
  return (
    // className="bit-map-nav"
    <div className="bit-map-nav">
      <MyLogo src={logo} title="BitMap" />
      <NavActionPage />
      <NavAction />
    </div>
  );
};

export default NavPage;
