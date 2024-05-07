import { useState } from 'react';
import LayoutPage from './pages/LayoutPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';

const BitMapPage = () => {
  const [isErrorPage, setIsErrorPage] = useState(false); // 是否转到错误页面

  return (
    <>
      {isErrorPage ? (
        <ErrorPage setIsErrorPage={setIsErrorPage} />
      ) : (
        <LayoutPage />
      )}
    </>
  );
};

export default BitMapPage;
