import React from 'react';
import { Button } from 'antd';
import { useTestPageProvider } from '../components/container';

const NavPage = () => {
  const { name1, getLocaleValue } = useTestPageProvider();
  return (
    <div>
      <Button type="primary">{getLocaleValue('testLayout.name1')}</Button>
      <Button>{name1}</Button>
    </div>
  );
};

export default NavPage;
