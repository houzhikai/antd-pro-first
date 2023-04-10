// 运行时配置
import { setLocale } from '@umijs/max';

import myFetch from './components/myFetch';
import logo from '@/icon/logo.svg';
import { changeLocale } from './components/changeLocale';

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

  // ['en-US', 'zh-CN']
  setLocale(changeLocale(obj.locale));

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
                    name: 'error',
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
            name: 'table',
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
    // 展示用户名、头像、退出登录相关组件  initialState 是运行时配置 app.ts(x) 中的 getInitialState 返回的对象。
    rightRender: () => {
      return null;
    },
    // token: {
    //   colorBgAppListIconHover: '#bfa',
    //   colorTextAppListIconHover: '#bfa',
    //   colorTextAppListIcon: '#bfa',
    //   colorPrimary: '#bfa',
    //   // 侧边菜单的色值，与顶部菜单不同。
    //   sider: {
    //     colorMenuBackground: '#242525', //menu 的背景颜色
    //     colorTextMenuTitle: '#e5e0d8', //sider 的标题字体颜色
    //     colorMenuItemDivider: '#999', //menuItem 分割线的颜色
    //     colorTextMenu: '#c8c5be', //menuItem 的字体颜色
    //     colorTextMenuSecondary: '#e5dcb1', //menu 的二级字体颜色，
    //     colorTextMenuSelected: '#3990d0', //menuItem 的选中字体颜色
    //     colorTextMenuActive: '#346a92', //menuItem hover 的选中字体颜色
    //     colorTextMenuItemHover: '#409fe7', //menuItem 的 hover 字体颜色
    //     colorBgMenuItemHover: '#242525', //menuItem 的 hover 背景颜色
    //     colorBgMenuItemSelected: '#113545', //menuItem 的选中背景颜色
    //     colorBgMenuItemCollapsedHover: '', //收起 menuItem 的 hover 背景颜色
    //     colorBgMenuItemCollapsedSelected: '', //收起 menuItem 的选中背景颜色
    //     colorBgMenuItemCollapsedElevated: '', //收起 menuItem 的弹出菜单背景颜色
    //     colorBgCollapsedButton: '#1f1f1f', //展开收起按钮背景颜色
    //     colorTextCollapsedButton: '#b1b1b1', //展开收起按钮 hover 字体颜色
    //     colorTextCollapsedButtonHover: '#fff', //展开收起按钮 hover 时字体颜色
    //   },
    //   header: {
    //     colorBgHeader: '#bfa', // header 的背景颜色
    //   },
    //   // 右边内容栏
    //   pageContainer: {
    //     paddingBlockPageContainerContent: '#242525', //pageContainer 自带的 padding block 默认 24
    //     paddingInlinePageContainerContent: '', //pageContainer 自带的 padding inline 默认 40
    //     colorBgPageContainer: '#242525', //pageContainer 的背景颜色 默认 透明
    //     colorBgPageContainerFixed: '', //pageContainer 被固定时的背景颜色 默认 #FFF
    //   },
    // },
  };
};
