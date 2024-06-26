import React from 'react';
import BaseConversion from './BaseConversion';
import NavAction from './NavAction';
import ScalePage from './ScalePage';
import '../../../../index.css';

const DetailNavActionPage = () => {
  return (
    <div className='bitmap-Drawer-layout'>
      <ScalePage />
      <BaseConversion />
      <NavAction />
    </div>
  );
};

export default DetailNavActionPage;
