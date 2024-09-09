import React, { useState } from 'react';
import logo from '../../../../icon/logos/bitmap.png';
import NavPage from './NavPage';
import ContentPage from './ContentPage';
import MyLayoutPage from '@/components/commons/MyLayoutPage';
import './index.less';
import { TestPageContext, useTestPageProvider } from './components/container';

const TestPage = () => {
  const { testPageValues, locale } = useTestPageProvider();
  const [theme] = useState<'dark' | 'light'>('light');

  const [isErr] = useState(false);

  return (
    <TestPageContext.Provider value={testPageValues}>
      <MyLayoutPage
        logo={logo}
        errorTitle="Please refresh the page"
        title="Firmware Upgrade"
        theme={theme}
        navExtra={<NavPage />}
        isShowErrorPage={isErr}
        defaultLocale={locale}
      >
        <ContentPage />
      </MyLayoutPage>
    </TestPageContext.Provider>
  );
};

export default TestPage;
