import React, { useEffect } from 'react';
import { useLocation, useModel } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import FooterPage from './blocks/components/FooterPage';
import Home from './blocks/Home';
// import WelcomePage from './blocks/WelcomePage';

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
      <PageContainer
        header={{
          title: '',
          // breadcrumb: {
          //   items: [
          //     {
          //       path: '',
          //       title: '首页',
          //     },
          //     {
          //       path: '',
          //       title: '我的桌面',
          //     },
          //   ],
          // },
        }}
        footer={[<FooterPage key={1} />]}
      >
        {/* <WelcomePage /> */}
        <Home />
      </PageContainer>
    </>
  );
};

export default HomePage;
