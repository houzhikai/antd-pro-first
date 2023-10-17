import styles from './index.less';
import BinMapIcon from './NavAction/BinMapIcon';
// import Nav from './NavAction/Nav';
import UserVariable from './NavAction/UserVariable';
import { Image } from 'antd';
import Logo from '@/icon/testflowLogo.svg';

const NavAction = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className={styles.nav}>
      <div
        style={{ display: 'flex', lineHeight: '26px', alignItems: 'center' }}
      >
        <div className={styles.logo} style={{ margin: '0 10px' }}>
          <Image
            src={Logo}
            preview={false}
            width={32}
            onClick={handleRefresh}
          />
        </div>
        {/* <div className={styles.logo} onClick={handleRefresh} /> */}
        <div>
          <div className={styles.title}>TestFlow</div>
          <div style={{ display: 'flex', margin: '0 0 5px' }}>
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
