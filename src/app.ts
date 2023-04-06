// 运行时配置
import logo from '@/icon/logo.svg';
import myFetch from './components/myFetch';
// import myFetch from './components/myFetch';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' };
}

const initIp = '192.168.3.233';

export const layout = () => {
  // isHideMenu 设置菜单栏是否需要隐藏
  const params = location.hash.split('?')[1] || '';

  const result = params.replace(/&/g, '","').replace(/=/g, '":"');
  const reqDataString = '{"' + result + '"}';
  const obj = params === '' ? {} : JSON.parse(reqDataString);

  const isHideMenu = obj.isHideMenu === 'true' ? false : null;
  return {
    logo,
    menu: {
      locale: false,
      request: async () => {
        return [
          {
            path: '/',
            redirect: '/home',
          },
          {
            name: '首页',
            path: '/home',
            component: './Home',
          },
          {
            name: 'DBM',
            path: '/dbm/site',
            component: './DBM/Site',
            routes: await myFetch({
              url: `http://${initIp}:28800/sitemgr/dbm/sites`,
              timeout: 1,
            })
              .then((res) => res.data)
              .catch(() => {
                const res = [
                  {
                    key: 1,
                    name: '获取site失败',
                    path: '/dbm/site?site=Site6.0',
                    component: './DBM/Site',
                  },
                ];
                return res;
              }),
          },
          {
            name: '权限演示',
            path: '/access',
            component: './Access',
          },
          {
            name: ' CRUD 示例',
            path: '/table',
            menuRender: isHideMenu,
            component: './Table',
          },
          {
            name: '固件升级',
            path: '/fu',
            menuRender: isHideMenu,
            component: './FU',
          },
        ];
      },
    },
  };
};
