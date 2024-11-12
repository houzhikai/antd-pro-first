import React from 'react';
import ScalePage from './ScalePage';
import BaseConversion from './BaseConversion';
import NavAction from './NavAction';
import '../../../../index.css';

const NavPage = () => {
  return (
    <div className='bitmap-Drawer-layout'>
      <ScalePage />
      <BaseConversion />
      <NavAction />
    </div>
  );
};

export default NavPage;
