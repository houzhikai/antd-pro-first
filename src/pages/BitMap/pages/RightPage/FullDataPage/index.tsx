import React from 'react';
import EchartsFullPage from './EchartsFullPage';
import InformationPage from './InformationPage';
import { ProviderFunc } from '../../../components/containers';

const FullDataPage = () => {
  const { width } = ProviderFunc();
  return (
    <div style={{ width, height: 'calc(100vh - 40px - 50px - 20px - 25px)' }}>
      <InformationPage />
      <EchartsFullPage />
    </div>
  );
};

export default FullDataPage;
