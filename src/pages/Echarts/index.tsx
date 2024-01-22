import NavAction from './blocks/NavAction';
import ColorListModal from './blocks/ColorListModal';
import LeftPage from './blocks/ContentPage/LeftPage';
import RightPage from './blocks/ContentPage/RightPage';

const WaferMap = () => {
  return (
    <>
      <NavAction />
      <div style={{ display: 'flex' }}>
        <LeftPage />
        <RightPage />
      </div>
      <ColorListModal />
    </>
  );
};
export default WaferMap;
