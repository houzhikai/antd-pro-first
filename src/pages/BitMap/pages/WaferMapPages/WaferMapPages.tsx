import React from 'react';
import { ProviderFunc } from '../../components/containers';
import ErrorPage from '../ErrorPage';
import NavPages from './NavPages';
import WaferMapDataPage from './ContentPage/WaferMapDataPage';
import WaferMapInfoPage from './ContentPage/WaferMapInfoPage';

const WaferMapPages = () => {
  const { isErrorPage, setIsErrorPage } = ProviderFunc();

  return (
    <div>
      {isErrorPage ? (
        <ErrorPage setIsErrorPage={setIsErrorPage} />
      ) : (
        <>
          <NavPages />
          <div className="wafermap-content-layout">
            <WaferMapDataPage />
            <WaferMapInfoPage />
          </div>
        </>
      )}
    </div>
  );
};

export default WaferMapPages;
