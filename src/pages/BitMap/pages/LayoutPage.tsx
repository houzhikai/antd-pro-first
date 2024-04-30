import LeftPage from './LeftPage';
import NavPage from './NavPage';
import RightPage from './RightPage';
import { ProviderFunc, BitMapContext } from '../components/containers';
import '../index.css';

const LayoutPage = () => {
  const { bitMapContextValue } = ProviderFunc();

  return (
    <BitMapContext.Provider value={bitMapContextValue}>
      <NavPage />
      <div className="content-page">
        <LeftPage />
        <RightPage />
      </div>
    </BitMapContext.Provider>
  );
};

export default LayoutPage;
