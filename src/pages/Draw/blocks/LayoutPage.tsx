import TestUnit from './Modal/TestUnit';
import NavAction from './NavAction';
// import BinMapForm from './Modal/BinMapForm';
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
import BinMapFormModal from './Modal/BinMapFormModal';
import myFetch from '@/components/myFetch';
import { useAsyncEffect } from 'ahooks';

const Layout = () => {
  useAsyncEffect(async () => {
    try {
      // Argument of type 'Date' is not assignable to parameter of type 'string'.ts(2345)

      const timestamp = new Date(Date.now()).valueOf();
      const res = await myFetch({
        url: `http://192.168.3.37:27700/toolmgr/xxx`,
        // url: `http://192.168.3.37:27700/toolmgr/startflowedit `,
        params: {
          device: [{ server: '123456798', sites: '0' }],
          special: {
            editmode: 'OnLine',
            timestamp,
            extension: '7884',
            project: '451',
            location: '7432',
          },
          isExceptionHand: true,
        },
      });
      if (res.result === '0') {
      }
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  }, []);
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
      {/* <BinMapForm /> */}
      <BinMapFormModal />
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
