import React, { useState } from 'react';
import { ProviderFunc, BitMapContext } from './components/containers';
import WaferMapLayoutPage from './pages/WaferMapLayoutPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';

const BitMapPage = () => {
  const { bitMapContextValue } = ProviderFunc();
  const [isErrorPage, setIsErrorPage] = useState(false); // ÊÇ·ñ×ªµ½´íÎóÒ³Ãæ

  return (
    <BitMapContext.Provider value={bitMapContextValue}>
      {isErrorPage ? (
        <ErrorPage setIsErrorPage={setIsErrorPage} />
      ) : (
        <WaferMapLayoutPage setIsErrorPage={setIsErrorPage} />
      )}
    </BitMapContext.Provider>
  );
};

export default BitMapPage;
