import React from 'react';
import { Button } from 'antd';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { otherColor } from '@/pages/BitMap/icons/base64/otherColor';
import SelectDutsPage from './SelectDutsPage';
import '../../../index.css';
import BaseConversion from '../../SingleModePages/DetailDataPage/NavAction/BaseConversion';
import ScalePage from '../../SingleModePages/DetailDataPage/NavAction/ScalePage';

const StackNavAction = () => {
  const { setModifyColorModalObj } = ProviderFunc();
  // 打开 颜色选择 弹窗
  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };
  return (
    <div className="flex-layout ">
      <SelectDutsPage />
      <ScalePage />
      <BaseConversion />
      <Button
        className="bit-map-nav-gap"
        type="text"
        icon={<img width={20} src={otherColor} />}
        onClick={handleOpenColorListModal}
      />
    </div>
  );
};

export default StackNavAction;
