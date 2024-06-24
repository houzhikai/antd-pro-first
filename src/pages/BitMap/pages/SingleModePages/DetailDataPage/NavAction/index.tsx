import React from 'react';
import NavAction from './NavAction';
import '../../../../index.css';
import BaseConversion from './BaseConversion';
import ScalePage from './ScalePage';

const DetailNavActionPage = () => {
  return (
    <div className="flex-layout ">
      <ScalePage />
      <BaseConversion />
      <NavAction />
    </div>
  );
};

export default DetailNavActionPage;
