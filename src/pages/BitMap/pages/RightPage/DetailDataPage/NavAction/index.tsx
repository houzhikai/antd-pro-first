import React from 'react';
import BaseConversion from './BaseConversion';
import NavAction from './NavAction';
import ScalePage from './ScalePage';

const DetailNavActionPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
        marginLeft: '5%',
      }}
    >
      <ScalePage />
      <BaseConversion />
      <NavAction />
    </div>
  );
};

export default DetailNavActionPage;
