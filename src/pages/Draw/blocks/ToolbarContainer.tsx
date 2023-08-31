import Save from './NavAction/Save';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <Save />
    </div>
  );
};

export default ToolbarContainer;
