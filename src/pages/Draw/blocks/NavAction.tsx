import React from 'react';
import styles from './index.less';

const NavAction = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className={styles.nav}>
      <div className={styles.logo} onClick={handleRefresh}></div>
      <div className={styles.title}>未命名绘图</div>
    </div>
  );
};

export default NavAction;
