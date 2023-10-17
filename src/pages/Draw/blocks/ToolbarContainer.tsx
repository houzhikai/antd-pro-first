// import DefaultArrowStyle from './NavAction/DefaultArrowStyle';
import Save from './NavAction/Save';
import SelectMode from './NavAction/SelectMode';
import ViewList from './NavAction/ViewList';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <div style={{ display: 'flex' }}>
        <ViewList />
        {/* <DefaultArrowStyle /> */}
      </div>
      {/* 分隔符 */}
      {/* <div className={styles.geSeparator} />
      <div className={styles.geSeparator} /> */}
      <div style={{ display: 'flex' }}>
        <SelectMode />
        <Save />
      </div>
    </div>
  );
};

export default ToolbarContainer;
