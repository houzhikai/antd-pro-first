import MyLogo from '@/components/MyLogo';
import logo from '@/icon/FULogo.svg';
import NavActions from './NavActions';
import styles from '../index.less';

const NavPage = () => {
  return (
    <div className={styles['nav-page']}>
      <MyLogo src={logo} title="TestLogoTitle" />
      <NavActions />
    </div>
  );
};

export default NavPage;
