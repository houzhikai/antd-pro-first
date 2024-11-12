import React from 'react';
import WaferMapDataPage from './ContentPage/WaferMapDataPage';
import WaferMapInfoPage from './ContentPage/WaferMapInfoPage';
import WaferMapNavPage from './WaferMapNavPage';

const WaferMapPages = () => {
  return (
    <div>
      <WaferMapNavPage />
      <div className='wafermap-content-layout'>
        <WaferMapDataPage />
        <WaferMapInfoPage />
      </div>
    </div>
  );
};

export default WaferMapPages;
