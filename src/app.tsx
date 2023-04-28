/* eslint-disable react-hooks/rules-of-hooks */
// 运行时配置
import logo from './icon/logo.svg';
import { changeLocale } from './components/changeLocale';
import { setLocale } from '@umijs/max';
import { Button, ConfigProvider, Switch } from 'antd';
import { custom_dark_page, custom_dark_component } from './theme/dark';

import queryParams from './components/queryParams';

import useUrlState from '@ahooksjs/use-url-state';
import '@/styles/index.less';
import myFetch from './components/myFetch';
import { routes } from './components/dataList/routes';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

const initIp = '192.168.3.233';

export async function getInitialState() {
  let menuData = {};
  try {
    menuData = await myFetch({
      url: `http://${initIp}:28800/sitemgr/dbm/sites1`,
    });
    return menuData;
  } catch (error) {
    return (menuData = routes);
  }
}

export const layout = ({ initialState }) => {
  const [state, setState] = useUrlState({ locale: '', theme: '' });
  // let params = location.hash.split('?')[1] || '';

  // const filterParams = params
  //   .split('&')
  //   .filter((item) => !item.includes('site'))
  //   .join('&');

  const obj = queryParams();
  // const isHideMenu = obj.isHideMenu === 'true' ? false : null;

  // ['en-US', 'zh-CN']
  setLocale(changeLocale(obj.locale));

  return {
    logo: logo,
    menu: {
      request: async () => {
        console.log({ initialState }, initialState.menu);
        return initialState.menu;
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
