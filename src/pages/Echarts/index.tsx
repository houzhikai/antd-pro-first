import Echarts from './blocks/Echarts';
import NavAction from './blocks/NavAction';
import DataStatistics from './blocks/DataStatistics';

const WaferMap = () => {
  return (
    <>
      <NavAction />
      <div style={{ display: 'flex' }}>
        <Echarts />
        <DataStatistics />
      </div>
    </>
  );
};
export default WaferMap;
