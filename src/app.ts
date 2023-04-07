// 运行时配置
import { setLocale } from '@umijs/max';

import myFetch from './components/myFetch';
import logo from '@/icon/logo.svg';

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

  console.log(obj);
  // ['en-US', 'zh-CN']
  setLocale(obj.locale === 'en-US' ? 'en-US' : 'zh-CN');

  return {
    logo,
    menu: {
      locale: {
        default: 'zh-CN',
        antd: true,
        title: false,
        baseNavigator: true,
        baseSeparator: '-',
      },
      request: async () => {
        // name 都是国际化语言
        return [
          {
            path: '/',
            redirect: '/home',
          },
          {
            name: 'home',
            path: '/home',
            component: './Home',
          },
          {
            name: 'dbm',
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
            name: 'access',
            path: '/access',
            component: './Access',
          },
          {
            name: 'crud',
            path: '/table',
            menuRender: isHideMenu,
            component: './Table',
          },
          {
            name: 'fu',
            path: '/fu',
            menuRender: isHideMenu,
            component: './FU',
          },
        ];
      },
    },
  };
};
