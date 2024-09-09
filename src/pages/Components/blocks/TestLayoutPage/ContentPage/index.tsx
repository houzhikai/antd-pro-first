import React from 'react';
import { Pagination } from 'antd';
import { useTestPageProvider } from '../components/container';

const ContentPage = () => {
  const { name1, getLocaleValue } = useTestPageProvider();

  return (
    <>
      <div>{name1}</div>
      <Pagination total={50} showSizeChanger />
      {getLocaleValue('testLayout.name')}
    </>
  );
};

export default ContentPage;
