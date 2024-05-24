import MyLogo from '@/components/MyLogo';
import BitMapLogo from '@/icon/logos/bitmap.png';
import NavActionPage from './NavActionPage';
import NavAction from '../RightPage/DetailDataPage/NavAction';
import '../../index.css';

const NavPage = () => {
  return (
    // className="bit-map-nav"
    <div className="bit-map-nav">
      <MyLogo src={BitMapLogo} title="BitMap" />
      <NavActionPage />
      <NavAction />
    </div>
  );
};

export default NavPage;
