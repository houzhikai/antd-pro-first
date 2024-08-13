import ErrorPage from './pages/ErrorPage';
import LayoutPage from './pages/LayoutPage';
import {
  FirmwareUpdateContext,
  useFUProviderModule,
} from './components/containers';
import { useState } from 'react';
import AfterUpgradeModal from './pages/Modals/AfterUpgradeModal';

const FirmwareUpdate = () => {
  const [isErrorPage, setIsErrorPage] = useState(false); // 是否转到错误页面
  const { FUContextValue } = useFUProviderModule();

  return (
    <FirmwareUpdateContext.Provider value={FUContextValue}>
      {isErrorPage ? (
        <ErrorPage setIsErrorPage={setIsErrorPage} />
      ) : (
        <>
          <LayoutPage setIsErrorPage={setIsErrorPage} />
          <AfterUpgradeModal />
        </>
      )}
    </FirmwareUpdateContext.Provider>
  );
};

export default FirmwareUpdate;
