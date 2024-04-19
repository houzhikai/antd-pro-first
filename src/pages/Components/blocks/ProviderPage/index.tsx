import NavPage from './NavPage';
import TestPageModal from './ModalPage/TestPageModal';
import { MyContext, ProviderFunc } from './commons/containers';

const ProviderPage = () => {
  const { myContextValue } = ProviderFunc();
  return (
    <MyContext.Provider value={myContextValue}>
      <NavPage />
      <TestPageModal />
    </MyContext.Provider>
  );
};

export default ProviderPage;
