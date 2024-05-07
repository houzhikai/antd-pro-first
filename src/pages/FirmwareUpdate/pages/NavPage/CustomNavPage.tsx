import MyLogo from '@/components/MyLogo';
import './customNavPage.css';

const CustomNavPage = ({ logo, title, children }) => {
  return (
    <div className="customNavPage-wrapper">
      <MyLogo src={logo} title={title} />
      {children}
    </div>
  );
};

export default CustomNavPage;
