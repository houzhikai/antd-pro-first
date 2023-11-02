import TestUnit from './Modal/TestUnit';
import NavAction from './NavAction';
import BinMapForm from './Modal/BinMapForm';
import ToolbarContainer from './ToolbarContainer';
import LeftContent from './content/LeftContent';
import AddMainFlowModal from './Modal/AddMainFlowModal';
import MiddleContent from './content/MiddleContent';
import RightContent from './content/RightContent';
import SubflowModal from './Modal/SubFlowModal';
import ShowSubflowModal from './Modal/ShowSubflowModal';
import AddTestItemModal from './Modal/AddTestItemModal';
import OpenVariablesModal from './Modal/OpenVariablesModal';
import styles from './index.less';
import AddMainFlowAttribute from './Modal/AddMainFlowAttribute';
import AddSubFlowAttribute from './Modal/AddSubFlowAttribute';
import OpenGlobalVariablesModal from './Modal/OpenGlobalVariablesModal';

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
      <SubflowModal />
      <ShowSubflowModal />
      <AddTestItemModal />
      <OpenVariablesModal />
      <AddMainFlowAttribute />
      <AddSubFlowAttribute />
      <OpenGlobalVariablesModal />
    </div>
  );
};

export default Layout;
