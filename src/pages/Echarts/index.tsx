import Echarts from './blocks/Echarts';
import NavAction from './blocks/NavAction';
import DataStatistics from './blocks/DataStatistics';
import ColorListModal from './blocks/ColorListModal';

const WaferMap = () => {
  return (
    <>
      <NavAction />
      <div style={{ display: 'flex' }}>
        <Echarts />
        <DataStatistics />
      </div>
      <ColorListModal />
    </>
  );
};
export default WaferMap;
