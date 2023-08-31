import styles from './index.less';
import Nav from './NavAction/Nav';

const NavAction = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className={styles.nav}>
      <div style={{ display: 'flex', lineHeight: '52px' }}>
        <div className={styles.logo} onClick={handleRefresh}></div>
        <div className={styles.title}>未命名绘图</div>
      </div>
      <Nav />
    </div>
  );
};

export default NavAction;
