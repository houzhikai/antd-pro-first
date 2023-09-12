import DefaultArrowStyle from './NavAction/DefaultArrowStyle';
import Save from './NavAction/Save';
import ViewList from './NavAction/ViewList';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <div style={{ display: 'flex' }}>
        <ViewList />
        <DefaultArrowStyle />
      </div>
      {/* 分隔符 */}
      {/* <div className={styles.geSeparator} />
      <div className={styles.geSeparator} /> */}
      <Save />
    </div>
  );
};

export default ToolbarContainer;
