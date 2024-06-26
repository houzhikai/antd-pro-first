import React from 'react';
import { Button } from 'antd';
import SelectDutsPage from './SelectDutsPage';
import ScalePage from '../../SingleModePages/DetailDataPage/NavAction/ScalePage';
import BaseConversion from '../../SingleModePages/DetailDataPage/NavAction/BaseConversion';
import { otherColor } from '../../../icons/base64/otherColor';
import { ProviderFunc } from '../../../components/containers';
import '../../../index.css';

const StackNavActionPage = () => {
  const { setModifyColorModalObj } = ProviderFunc();

  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };

  return (
    <div className='bitmap-Drawer-layout '>
      <SelectDutsPage />
      <ScalePage />
      <BaseConversion />
      <Button
        className='bit-map-nav-gap'
        type='text'
        icon={<img width={20} src={otherColor} />}
        onClick={handleOpenColorListModal}
      />
    </div>
  );
};

export default StackNavActionPage;
