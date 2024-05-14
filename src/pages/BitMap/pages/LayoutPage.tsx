import LeftPage from './LeftPage';
import NavPage from './NavPage';
import RightPage from './RightPage';
import { ProviderFunc, BitMapContext } from '../components/containers';
import ColorListModalPage from './ModalPages/ColorListModalPage';
import ModeModalPage from './ModalPages/ModeModalPage';
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
      <ModeModalPage />
      <ColorListModalPage />
    </BitMapContext.Provider>
  );
};

export default LayoutPage;
