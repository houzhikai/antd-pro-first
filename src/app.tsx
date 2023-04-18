// 运行时配置
import { setLocale } from '@umijs/max';

// import myFetch from './components/myFetch';
import logo from '@/icon/logo.svg';
import { changeLocale } from './components/changeLocale';
// import { SettingDrawer } from '@ant-design/pro-components';
import { custom_dark_page, custom_dark_component } from './theme/dark';
import { ConfigProvider } from 'antd';
import '@/styles/index.less';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ name: string }> {
//   return { name: '' };
// }
export async function getInitialState() {
  return {};
}

// const initIp = '192.168.3.233';

// export const layout = ({ initialState, setInitialState }: any) => {
export const layout = ({ initialState }: any) => {
  // isHideMenu 设置菜单栏是否需要隐藏
  const params = location.hash.split('?')[1] || '';

  const result = params.replace(/&/g, '","').replace(/=/g, '":"');
  const reqDataString = '{"' + result + '"}';
  const obj = params === '' ? {} : JSON.parse(reqDataString);

  const isHideMenu = obj.isHideMenu === 'true' ? false : null;

  // const theme = obj.theme === 'dark' ? custom_dark_page : null;

  // ['en-US', 'zh-CN']
  setLocale(changeLocale(obj.locale));

  // setInitialState((pre: any) => ({
  //   ...pre,
  //   settings: {
  //     navTheme: 'realDark',
  //   },
  // }));

  return {
    logo,
    menu: {
      request: async () => {
        // name 都是国际化语言
        return [
          {
            path: '/',
            redirect: '/home',
          },
          {
            name: 'home',
            path: `/home?${params}`,
            component: './Home',
          },
          {
            name: 'dbm',
            path: `/dbm/site?${params}`,
            component: './DBM/Site',
            // routes: await myFetch({
            //   url: `http://${initIp}:28800/sitemgr/dbm/sites`,
            //   timeout: 1,
            // })
            //   .then((res) => res.data)
            //   .catch(() => {
            //     const res = [
            //       {
            //         key: 1,
            //         name: 'error',
            //         path: `/dbm/site?site=Site6.0&${params}`,
            //         component: './DBM/Site',
            //       },
            //     ];
            //     return res;
            //   }),
          },
          {
            name: 'access',
            path: `/access?${params}`,
            component: './Access',
          },
          {
            name: 'table',
            path: `/table?${params}`,
            menuRender: isHideMenu,
            component: './Table',
          },
          {
            name: 'fu',
            path: `/fu?${params}`,
            menuRender: isHideMenu,
            component: './FU',
          },
        ];
      },
    },
    // 展示用户名、头像、退出登录相关组件  initialState 是运行时配置 app.ts(x) 中的 getInitialState 返回的对象。
    rightRender: () => {
      return null;
    },
    childrenRender: (children: any) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <ConfigProvider
          theme={{
            token: obj.theme === 'dark' ? custom_dark_component : {},
          }}
        >
          {children}
        </ConfigProvider>
      );
    },
    // childrenRender: (children: any, props: any) => {
    //   // if (initialState?.loading) return <PageLoading />;
    //   return (
    //     <>
    //       {children}
    //       {!props.location?.pathname?.includes('/login') && (
    //         <SettingDrawer
    //           enableDarkTheme
    //           settings={initialState?.settings}
    //           onSettingChange={(settings) => {
    //             setInitialState((preInitialState: any) => ({
    //               ...preInitialState,
    //               settings,
    //             }));
    //           }}
    //         />
    //       )}
    //     </>
    //   );
    // },
    ...initialState.settings,
    token: obj.theme === 'dark' ? custom_dark_page : null,
  };
};
