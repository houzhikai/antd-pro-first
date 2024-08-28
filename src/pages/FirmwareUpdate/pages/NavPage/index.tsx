import React from 'react';
import CustomNavPage from './CustomNavPage';
import { fuLogo } from '../../icons/base64/logo';
import NavActive from './NavActive';
import UpgradePage from './UpgradePage';

const NavPage = () => {
  /**
   * 可以拆成一个公有组件，导航栏都是类似的布局
   * logo 和 title 都是必有的，所以封装到组件中，api 形式输入
   * 其他都是自定义，样式以  justify-content: space-between; 展示
   * 内容自定义
   */
  return (
    <CustomNavPage logo={fuLogo} title='Firmware Upgrade'>
      <NavActive />
      <UpgradePage />
    </CustomNavPage>
  );
};

export default NavPage;
