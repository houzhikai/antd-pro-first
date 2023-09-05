import BinMapIcon from './NavAction/BinMapIcon';
import DefaultArrowStyle from './NavAction/DefaultArrowStyle';
import Save from './NavAction/Save';
import UserVariable from './NavAction/UserVariable';
import ViewList from './NavAction/ViewList';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <ViewList />
      <DefaultArrowStyle />
      <div className={styles.geSeparator} />
      <BinMapIcon />
      <UserVariable />
      <div className={styles.geSeparator} />
      <Save />
    </div>
  );
};

export default ToolbarContainer;
