import React from 'react';
import { useFUProviderModule } from '../../components/containers';
import './customNavPage.css';
import MyLogo from '@/components/MyLogo';

const CustomNavPage = ({ logo, title, children }) => {
  const { theme } = useFUProviderModule();
  return (
    <div
      style={{
        background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
        borderBottom: `1px solid ${theme === 'dark' ? '#2c2b2b' : '#ccc'}`,
      }}
      className="customNavPage-wrapper"
    >
      <MyLogo src={logo} title={title} />
      {children}
    </div>
  );
};

export default CustomNavPage;
