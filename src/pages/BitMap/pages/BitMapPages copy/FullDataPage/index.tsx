import React from 'react';
import EchartsFullPage from './EchartsFullPage';
import InfoAndColorTabsPage from './InfoAndColorTabsPage';
import { ProviderFunc } from '../../../components/containers';

const FullDataPage = () => {
  const { width } = ProviderFunc();
  return (
    <div style={{ width, height: 'calc(100vh - 60px - 25px)' }}>
      <InfoAndColorTabsPage />
      {/* <EchartsFullPage /> */}
    </div>
  );
};

export default FullDataPage;
