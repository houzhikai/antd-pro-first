import React from 'react';
import { DBMPageContext, useDBMPageProvider } from './components/container';
import MyLayoutPage from '@/components/commons/MyLayoutPage';
import logo from '@/icon/DBMLogo.svg';
import DBMNavExtraPage from './pages/DBMNavExtraPage';
import DBMContentPage from './pages/DBMContentPage';
import './index.css';

const DBMPage = () => {
  const { DBMPageValues, isShowErrorPage } = useDBMPageProvider();
  return (
    <DBMPageContext.Provider value={DBMPageValues}>
      <MyLayoutPage
        logo={logo}
        errorTitle="Please refresh the page"
        title="DBM"
        theme={'dark'}
        navExtra={<DBMNavExtraPage />}
        isShowErrorPage={isShowErrorPage}
      >
        <DBMContentPage />
      </MyLayoutPage>
    </DBMPageContext.Provider>
  );
};

export default DBMPage;
