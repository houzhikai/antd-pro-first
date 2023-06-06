import React from 'react';
import styles from '../index.less';
const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <h1 style={{ color: '#2d77f5', fontWeight: 500 }}>欢迎使用xxx管理平台</h1>
      <div>
        <strong className={styles.welcome}>WELCOME</strong>
        <div style={{ borderBottom: '1px solid #2d77f5', marginTop: 40 }}></div>
      </div>
    </div>
  );
};

export default WelcomePage;
