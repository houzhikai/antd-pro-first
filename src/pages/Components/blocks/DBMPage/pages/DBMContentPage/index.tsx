import React from 'react';
import { Menu } from 'antd';
import MyErrorPage from '@/components/commons/MyErrorPage';
import { useDBMPageProvider } from '../../components/container';
import VirtualTablePage from './VirtualTablePage';
import ActionBarPage from './ActionBarPage';
import '../../index.css';

const DBMContentPage = () => {
  const {
    sites,
    isTablePage,
    setChangeMenu,
    setIsTablePage,
    setPage,
    setPageVal,
  } = useDBMPageProvider();

  const handleClick = (e) => {
    setChangeMenu(e.key); // 点击菜单时触发reader接口
    setIsTablePage(false); // 避免错误页面时不触发reader接口
    setPage(0);
    setPageVal('0');
  };

  const defaultSelectedKeys = sites.map(
    (item: { label: string }) => item.label,
  )[0];

  return (
    <div className="wrapper">
      <Menu
        style={{ minWidth: 156, height: '76vh', marginTop: 20 }}
        defaultSelectedKeys={[defaultSelectedKeys]}
        onClick={handleClick}
        items={sites}
      />
      <div className="content">
        {/* 错误页面不会影响site的切换 */}
        {isTablePage ? <MyErrorPage /> : <VirtualTablePage />}
        <ActionBarPage />
      </div>
    </div>
  );
};

export default DBMContentPage;
