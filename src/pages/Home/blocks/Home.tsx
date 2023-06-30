import React from 'react';
import { Image } from 'antd';
import LeftNews from './components/LeftNews';
import RightDetail from './components/RightDetail';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '90%' }}>
      <div
        style={{
          padding: '16px 10px 30px',
          background: '#fff',
          width: 1070,
        }}
      >
        <Image
          style={{ width: 1050, position: 'relative' }}
          src="http://www.sandtekcorp.com.cn/sandtekc/templates/sandtek/Banner.png"
          preview={false}
        />
        <Image
          style={{
            position: 'absolute',
            width: 349,
            height: 79,
            right: 655,
            top: -40,
          }}
          src="http://www.sandtekcorp.com.cn/sandtekc/images/logo_blue_s.png"
          preview={false}
        />
        <div
          style={{ display: 'flex', width: 1050, padding: '16px 20px 100px' }}
        >
          <LeftNews />
          <RightDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;
