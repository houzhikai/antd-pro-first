import React from 'react';
import SiderPage from './pages/SiderPage';
import ContentPage from './pages/ContentPage';
import RightPage from './pages/RightPage';
import {
  LowCodePlatformContext,
  useLowCodePlatformProvider,
} from './components/container';
import './index.less';
import MyLayoutPage from '@/components/commons/MyLayoutPage';
import logo from '@/icon/logo.svg';

const LowCodePlatform = () => {
  const { defaultPageValues } = useLowCodePlatformProvider();
  return (
    <LowCodePlatformContext.Provider value={defaultPageValues}>
      <MyLayoutPage
        logo={logo}
        title="LowCodePlatform"
        theme="light"
        navExtra={null}
      >
        <div className="layout-page">
          <SiderPage />
          <ContentPage />
          <RightPage />
        </div>
      </MyLayoutPage>
    </LowCodePlatformContext.Provider>
  );
};

export default LowCodePlatform;
