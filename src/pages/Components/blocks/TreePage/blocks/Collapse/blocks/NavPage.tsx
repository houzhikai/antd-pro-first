import MyLogo from '@/components/MyLogo';
import logo from '@/icon/caldiag/caldiag.png';
import { Button } from 'antd';
import styles from '../index.less';

const NavPage = ({ socketRef }) => {
  const handleClickStart = () => {
    socketRef.current.sendMsg('abc');
  };
  return (
    <div className={styles['nav-wrapper']}>
      <MyLogo src={logo} title="Cal&Diag" />
      <div>
        <Button
          className={styles['nav-button']}
          type="primary"
          onClick={handleClickStart}
        >
          Start
        </Button>
        <Button type="primary">Stop</Button>
      </div>
    </div>
  );
};

export default NavPage;
