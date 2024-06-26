import React from 'react';
import NavPages from './NavPages';
import WaferMapDataPage from './ContentPage/WaferMapDataPage';
import WaferMapInfoPage from './ContentPage/WaferMapInfoPage';

const WaferMapPages = () => {
  return (
    <div>
      <NavPages />
      <div className='wafermap-content-layout'>
        <WaferMapDataPage />
        <WaferMapInfoPage />
      </div>
    </div>
  );
};

export default WaferMapPages;
