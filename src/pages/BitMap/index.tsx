import React, { useState, useEffect } from 'react';
import { ProviderFunc, BitMapContext } from './components/containers';
import WaferMapLayoutPage from './pages/WaferMapLayoutPage';
import './index.css';
import ErrorPage from './pages/ErrorPage';

const BitMapPage = () => {
  const { bitMapContextValue } = ProviderFunc();
  const [isErrorPage, setIsErrorPage] = useState(false); // ÊÇ·ñ×ªµ½´íÎóÒ³Ãæ
  const [theme, setTheme] = useState('');
  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (e.data.command === 'startParams') {
        setTheme(e.data.text.theme);
      } else if (e.data.command === 'params') {
        setTheme(e.data.text.theme);
      }
    });
  }, []);
  return (
    <BitMapContext.Provider value={bitMapContextValue}>
      {isErrorPage ? (
        <ErrorPage theme={theme} setIsErrorPage={setIsErrorPage} />
      ) : (
        <WaferMapLayoutPage setIsErrorPage={setIsErrorPage} />
      )}
    </BitMapContext.Provider>
  );
};

export default BitMapPage;
