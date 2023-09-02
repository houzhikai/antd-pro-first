import NavAction from './NavAction';
import ToolbarContainer from './ToolbarContainer';
import LeftContent from './content/LeftContent';
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
    </div>
  );
};

export default Layout;
