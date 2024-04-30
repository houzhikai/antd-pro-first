import MyLogo from '@/components/MyLogo';
import BitMapLogo from '@/icon/logos/bitmap.png';
import '../../index.css';

const NavPage = () => {
  return (
    <div className="bit-map-nav">
      <MyLogo src={BitMapLogo} title="BitMap" />
    </div>
  );
};

export default NavPage;
