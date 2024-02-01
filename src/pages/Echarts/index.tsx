import NavAction from './blocks/NavAction';
import ColorListModal from './blocks/ColorListModal';
import LeftPage from './blocks/ContentPage/LeftPage';
import RightPage from './blocks/ContentPage/RightPage';
// import WorkerComponent from './blocks/ContentPage/RightPage/WorkerComponent';

const WaferMap = () => {
  return (
    <>
      <NavAction />
      <div style={{ display: 'flex' }}>
        <LeftPage />
        <RightPage />
      </div>
      <ColorListModal />
      {/* <WorkerComponent /> */}
    </>
  );
};
export default WaferMap;
