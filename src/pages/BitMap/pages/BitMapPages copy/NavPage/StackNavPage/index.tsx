import React from 'react';
import SelectDutsPage from './SelectDutsPage';
import BaseConversion from '../components/BaseConversion';
import ScalePage from '../components/ScalePage';
import ColorSettingModal from '../components/ColorSettingsPage';
import MultiDuts from '../components/MultiDutsPage';
import '../../../../index.css';
import RotatePage from '../components/RotatePage';

const StackNavActionPage = () => {


  return (
    <div className='bitmap-Drawer-layout '>
      {/* <SelectDutsPage /> */}
      <MultiDuts />
      <ScalePage />
      <BaseConversion />
      <ColorSettingModal />
      <RotatePage />
    </div>
  );
};

export default StackNavActionPage;
