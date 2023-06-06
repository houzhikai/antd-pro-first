import styles from '../../index.less';

const FooterPage = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span style={{ fontWeight: 700, color: '#869099' }}>
          Copyright © 2021-2023 智能xxx管理平台.
        </span>
        <span style={{ color: '#a8abbc' }}> All rights reserved.</span>
      </div>
      <div>
        <span style={{ fontWeight: 700, color: '#869099' }}>Version:</span>
        <span style={{ color: '#a8abbc' }}> V1.5</span>
      </div>
    </div>
  );
};

export default FooterPage;
