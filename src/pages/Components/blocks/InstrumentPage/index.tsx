import React from 'react';
import MyLayoutPage from '@/components/commons/MyLayoutPage';
import {
  InstrumentPageContext,
  useInstrumentPageProvider,
} from './components/container';
import logo from '@/icon/InstrumentLogo.svg';
import InsNavExtraPage from './pages/InsNavExtraPage';
import InsContentPage from './pages/InsContentPage';
import './index.css';

const InstrumentPage = () => {
  const { InstrumentPageValues, isErrorPage } = useInstrumentPageProvider();
  return (
    <InstrumentPageContext.Provider value={InstrumentPageValues}>
      <MyLayoutPage
        logo={logo}
        errorTitle="Please refresh the page"
        title="Instrument"
        theme={'dark'}
        defaultLocale="zh-CN"
        navExtra={<InsNavExtraPage />}
        isShowErrorPage={isErrorPage}
      >
        <InsContentPage />
      </MyLayoutPage>
    </InstrumentPageContext.Provider>
  );
};

export default InstrumentPage;
