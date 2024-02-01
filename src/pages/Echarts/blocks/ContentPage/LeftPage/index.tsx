// import DataStatistics from './DataStatistics';
import DeviceInfo from './DeviceInfo';
import SummaryTables from './SummaryTables';

const index = () => {
  return (
    <div style={{ width: 350 }}>
      <DeviceInfo />
      <SummaryTables />
      {/* <DataStatistics /> */}
    </div>
  );
};

export default index;
