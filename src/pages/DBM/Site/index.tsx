import { useLocation, useModel } from '@umijs/max';
import { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import styles from './index.less';
import extraButtonList from './components/extraButtonList';
import tabList from './components/tabList';
import FooterProCard from './components/FooterProCard';
import ErrorPage from './ErrorPage';

const DBMPage = () => {
  const { search, pathname } = useLocation();
  const { setIsRequest, dbmParams, setDbmParams, isErrorPage } =
    useModel('useGetDBMDataList');

  useEffect(() => {
    const paramas = search.split('=')[1];
    if (pathname.includes('dbm')) {
      setIsRequest(true);
      setDbmParams(paramas);
    }
  }, [search, dbmParams]);

  const items = ['DBM', dbmParams];
  return (
    <>
      {isErrorPage ? (
        <ErrorPage />
      ) : (
        <PageContainer
          breadcrumbRender={() => (
            <div className={styles.breadcrumb}> {items.join(' / ')} </div>
          )}
          header={{
            title: dbmParams,
            extra: extraButtonList,
          }}
          tabBarExtraContent="我的第一次设置"
          tabList={tabList}
          tabProps={{
            type: 'editable-card',
            hideAdd: true,
            onEdit: (e, action) => console.log(e, action),
          }}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <FooterProCard />
        </PageContainer>
      )}
    </>
  );
};
export default DBMPage;
