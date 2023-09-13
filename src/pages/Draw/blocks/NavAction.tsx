import styles from './index.less';
import BinMapIcon from './NavAction/BinMapIcon';
import UserVariable from './NavAction/UserVariable';

const NavAction = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className={styles.nav}>
      <div style={{ display: 'flex', lineHeight: '26px' }}>
        <div className={styles.logo} onClick={handleRefresh} />
        <div>
          <div className={styles.title}>未命名绘图</div>
          <div style={{ display: 'flex' }}>
            <BinMapIcon />
            <UserVariable />
          </div>
        </div>
      </div>

      {/* <Nav /> */}
    </div>
  );
};

export default NavAction;
