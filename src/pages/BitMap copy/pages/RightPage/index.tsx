import FullDataPage from './FullDataPage';
import { Resizable } from 'react-resizable';
import { ProviderFunc } from '../../components/containers';
// import DetailDataNavPage from './DetailDataPage/NavAction';
import DetailDataPage from './DetailDataPage/DetailDataPage';

import 'react-resizable/css/styles.css';

const RightPage = () => {
  const { width, setWidth } = ProviderFunc();
  return (
    <div className="bit-map-right-page">
      <Resizable
        width={width}
        height={100}
        axis="x"
        minConstraints={[100, 100]}
        maxConstraints={[300, 300]}
        onResize={(e, { size }) => setWidth(size.width)}
        handle={<div className="bit-map-page-resizable" />}
        resizeHandles={['e']}
      >
        <FullDataPage />
      </Resizable>
      <div
        style={{
          flexGrow: 1,
          // border: '1px solid #eee',
          width: `calc(100vw - 80px - 150px - ${width}px)`,
        }}
      >
        {/* <DetailDataNavPage /> */}
        <DetailDataPage />
      </div>
    </div>
  );
};

export default RightPage;
