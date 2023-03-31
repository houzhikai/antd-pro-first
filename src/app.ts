// 运行时配置
import logo from '@/icon/logo.svg';
// import myFetch from './components/myFetch';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' };
}

const initIp = '192.168.3.233';

export const layout = () => {
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
            // 这里必须由 异步去接收，因为 request 返回的是 promise成功，默认渲染的是data
            routes: await fetch(`http://${initIp}:28800/sitemgr/dbm/sites1`, {
              method: 'Post',
            })
              .then((res) => res.json())
              .then((res) => {
                return res.data;
              })
              .catch(() => {
                const res = [
                  // {
                  //   key: 1,
                  //   name: 'Site9.0',
                  //   path: '/dbm/site?site=Site6.0',
                  //   component: './DBM/Site',
                  // },
                  // {
                  //   key: 2,
                  //   name: 'Site3.0',
                  //   path: '/dbm/site?site=Site3.0',
                  //   component: './DBM/Site',
                  // },
                  {
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
            component: './Table',
          },
        ];
      },
    },
  };
};
