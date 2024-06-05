import { useState } from 'react';
import LayoutPage from './pages/LayoutPage';
import ErrorPage from './pages/ErrorPage';
import { ProviderFunc, BitMapContext } from './components/containers';
import './index.css';

const BitMapPage = () => {
  const { bitMapContextValue } = ProviderFunc();
  const [isErrorPage, setIsErrorPage] = useState(false); // 是否转到错误页面

  return (
    <BitMapContext.Provider value={bitMapContextValue}>
      {isErrorPage ? (
        <ErrorPage setIsErrorPage={setIsErrorPage} />
      ) : (
        <LayoutPage />
      )}
    </BitMapContext.Provider>
  );
};

export default BitMapPage;
