/* eslint-disable react-hooks/rules-of-hooks */
// 运行时配置
import logo from './icon/logo.svg';
import { changeLocale } from './components/changeLocale';
import { setLocale } from '@umijs/max';
import { Button, ConfigProvider, Switch } from 'antd';
import { custom_dark_page, custom_dark_component } from './theme/dark';

import { HomeOutlined } from '@ant-design/icons';
import queryParams from './components/queryParams';

import useUrlState from '@ahooksjs/use-url-state'; 
import '@/styles/index.less';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ name: string }> {
//   return { name: '111' };
export const layout = () => {
  const [state, setState] = useUrlState({ locale: '', theme: '' });
  let params = location.hash.split('?')[1] || '';

  const filterParams = params
    .split('&')
    .filter((item) => !item.includes('site'))
    .join('&');

  const obj = queryParams();
  const isHideMenu = obj.isHideMenu === 'true' ? false : null;

  // ['en-US', 'zh-CN']
  setLocale(changeLocale(obj.locale));

  return {
    logo: logo,
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
            path: `/home?${filterParams}`,
            icon: <HomeOutlined />,
            component: './Home',
            menuRender: isHideMenu,
          },
          {
            name: 'DBM',
            path: `/dbm?${params}`,
            component: './DBM',
            menuRender: isHideMenu,
          },
          {
            name: 'fu',
            path: `/fu?${filterParams}`,
            component: './FU',
            menuRender: isHideMenu,
          },
          {
            name: 'ins',
            path: `/instrument?${filterParams}`,
            component: './Instrument',
            menuRender: isHideMenu,
          },
          {
            path: '*',
            layout: false,
            component: './404',
          },
        ];
      },
    },
    // 展示用户名、头像、退出登录相关组件  initialState 是运行时配置 app.ts(x) 中的 getInitialState 返回的对象。
    rightRender: () => {
      const localeParams = obj.locale === 'en-US' ? 'zh-CN' : 'en-US';

      return (
        <div className="menu-footer">
          <Button
            style={{ marginRight: 10 }}
            size="small"
            ghost={obj.theme === 'dark' ? true : false}
            onClick={() => setState({ locale: localeParams || state.locale })}
          >
            {obj.locale === 'en-US' ? '中文' : 'English'}
          </Button>
          <Switch
            checkedChildren="🌜"
            unCheckedChildren="🌞"
            defaultChecked={obj.theme === 'dark' ? true : false}
            onChange={(checked) => {
              setState({ theme: checked ? 'dark' : 'light' });
              location.reload();
            }}
          />
        </div>
      );
    },
    childrenRender: (children: any) => {
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
    token: obj.theme === 'dark' ? custom_dark_page : null,
    menuProps: {
      onClick: (item: { key: string }) => {
        console.log(item.key);
      },
    },
  };
};
