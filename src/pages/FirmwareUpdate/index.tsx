import ErrorPage from './pages/ErrorPage';
import LayoutPage from './pages/LayoutPage';
import {
  FirmwareUpdateContext,
  useFUProviderModule,
} from './components/containers';

const FirmwareUpdate = () => {
  const { FUContextValue, isErrorPage } = useFUProviderModule();

  return (
    <FirmwareUpdateContext.Provider value={FUContextValue}>
      {isErrorPage ? <ErrorPage /> : <LayoutPage />}
    </FirmwareUpdateContext.Provider>
  );
};

export default FirmwareUpdate;
