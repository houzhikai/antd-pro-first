import React, { useState } from 'react';
import ErrorPage from './pages/ErrorPage';
import LayoutPage from './pages/LayoutPage';
import { FirmwareUpdateContext, useFUProviderModule } from './components/containers';
import AfterUpgradeModal from './pages/Modals/AfterUpgradeModal';
import { Dropdown } from 'antd';

const FirmwareUpdate = () => {
  const [isErrorPage, setIsErrorPage] = useState(false); // 是否转到错误页面
  const { FUContextValue } = useFUProviderModule();

  return (
    <FirmwareUpdateContext.Provider value={FUContextValue}>
      <Dropdown menu={{ items: [] }} trigger={['contextMenu']}>
        {isErrorPage ? (
          <ErrorPage setIsErrorPage={setIsErrorPage} />
        ) : (
          <>
            <LayoutPage setIsErrorPage={setIsErrorPage} />
            <AfterUpgradeModal />
          </>
        )}
      </Dropdown>
    </FirmwareUpdateContext.Provider>
  );
};

export default FirmwareUpdate;
