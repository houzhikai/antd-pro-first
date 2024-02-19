import NavAction from './blocks/NavAction';
import ColorListModal from './blocks/ColorListModal';
import LeftPage from './blocks/ContentPage/LeftPage';
import RightPage from './blocks/ContentPage/RightPage';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { WarningOutlined } from '@ant-design/icons';
import AlertPrompt from './blocks/NavAction/AlertPrompt';
// import WorkerComponent from './blocks/ContentPage/RightPage/WorkerComponent';

const WaferMap = () => {
  const { waferMapData } = useModel('useEchartsModel');

  return (
    <>
      <NavAction />
      {waferMapData ? (
        <>
          <AlertPrompt waferMapData={waferMapData} />
          <div style={{ display: 'flex' }}>
            <LeftPage />
            <RightPage />
          </div>
        </>
      ) : (
        <div className={styles.desc}>
          <WarningOutlined style={{ color: '#fab429', marginRight: 4 }} />
          暂无选择可用的summary的excel表格
        </div>
      )}

      <ColorListModal />
      {/* <WorkerComponent /> */}
    </>
  );
};
export default WaferMap;
