import BinMapIcon from './NavAction/BinMapIcon';
import DefaultArrowStyle from './NavAction/DefaultArrowStyle';
import Save from './NavAction/Save';
import ViewList from './NavAction/ViewList';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <ViewList />
      <BinMapIcon />
      <DefaultArrowStyle />
      <Save />
    </div>
  );
};

export default ToolbarContainer;
