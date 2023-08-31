import Save from './NavAction/Save';
import ViewList from './NavAction/ViewList';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <ViewList />
      <Save />
    </div>
  );
};

export default ToolbarContainer;
