import React, { useEffect } from 'react';
import { useLocation, useModel } from '@umijs/max';
import { Image, Result } from 'antd';

import welcome from '../../icon/welcome.png';

const HomePage: React.FC = () => {
  const { setIsRequest } = useModel('useGetDBMDataList');
  const { search, pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes('home')) {
      setIsRequest(false);
    }
  }, [search]);
  return (
    <>
      <Result
        icon={
          <Image src={welcome} preview={false} width="60vw" height="76vh" />
        }
        subTitle="欢迎来到tools页面!"
      />
    </>
  );
};

export default HomePage;
