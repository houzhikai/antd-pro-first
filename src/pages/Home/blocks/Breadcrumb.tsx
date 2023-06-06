import { Breadcrumb } from 'antd';

const BreadcrumbPage = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '首页',
        },
        {
          title: '我的桌面',
        },
      ]}
    />
  );
};

export default BreadcrumbPage;
