import React from 'react';
import ScalePage from '../components/ScalePage';
import BaseConversion from '../components/BaseConversion';
// import ColorSettingModal from '../components/ColorSettingsPage';
import RotatePage from '../components/RotatePage';
import MultiDuts from '../components/MultiDutsPage';

const SingleNavPage = () => {
  return (
    <div className='bitmap-Drawer-layout '>
      <MultiDuts />
      <ScalePage />
      <BaseConversion />
      {/* <ColorSettingModal /> */}
      <RotatePage />
    </div>
  );
};

export default SingleNavPage;
