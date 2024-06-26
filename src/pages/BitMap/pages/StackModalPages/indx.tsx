import React from 'react';
import { ProviderFunc } from '../../components/containers';
import FullDataPage from '../SingleModePages/FullDataPage';
import DetailDataPage from '../SingleModePages/DetailDataPage/DetailDataPage';

const StackModalPages = () => {
  const { width } = ProviderFunc();
  return (
    <div className='bit-map-right-page'>
      <FullDataPage />
      <div
        style={{
          flexGrow: 1,
          // border: '1px solid #eee',
          width: `calc(100vw - 20px - 150px - ${width}px)`,
          height: 'calc(100vh - 50px - 20px)',
        }}
      >
        <DetailDataPage />
      </div>
    </div>
  );
};

export default StackModalPages;
