import TestUnit from './Modal/TestUnit';
import NavAction from './NavAction';
import BinMapForm from './NavAction/components/BinMapForm';
import ToolbarContainer from './ToolbarContainer';
import LeftContent from './content/LeftContent';
import AddMainFlowModal from './content/LeftContent/components/AddMainFlowModal';
import MiddleContent from './content/MiddleContent';
import RightContent from './content/RightContent';
import styles from './index.less';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavAction />
      {/* 用来存放图片icon栏 */}
      <ToolbarContainer />
      <div className={styles.content}>
        <LeftContent />
        <MiddleContent />
        <RightContent />
      </div>
      <BinMapForm />
      <AddMainFlowModal />
      <TestUnit />
    </div>
  );
};

export default Layout;
