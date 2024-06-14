import React from 'react';
import { ProviderFunc, BitMapContext } from './components/containers';
import WaferMapLayoutPage from './pages/WaferMapLayoutPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';

const BitMapPage = () => {
  const { bitMapContextValue, isErrorPage, setIsErrorPage } = ProviderFunc();

  return (
    <BitMapContext.Provider value={bitMapContextValue}>
      {isErrorPage ? (
        <ErrorPage setIsErrorPage={setIsErrorPage} />
      ) : (
        <WaferMapLayoutPage />
      )}
    </BitMapContext.Provider>
  );
};

export default BitMapPage;
