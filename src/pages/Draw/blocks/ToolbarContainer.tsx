// import DefaultArrowStyle from './NavAction/DefaultArrowStyle';
import AutoArrange from './NavAction/AutoArrange';
import Save from './NavAction/Save';
import SelectMode from './NavAction/SelectMode';
import ViewList from './NavAction/ViewList';
import styles from './index.less';

const ToolbarContainer = () => {
  return (
    <div className={styles.toolbar}>
      <div style={{ display: 'flex' }}>
        <ViewList />
        <AutoArrange />
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
