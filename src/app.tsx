/* eslint-disable react-hooks/rules-of-hooks */
// 运行时配置
import { history, setLocale } from '@umijs/max';
import { Button, ConfigProvider, Switch } from 'antd';
import useUrlState from '@ahooksjs/use-url-state';

import { changeLocale } from './components/changeLocale';
import myFetch from './components/myFetch';
import queryParams from './components/queryParams';
import { routes } from './components/dataList/menu/routes';
import { iconList } from './components/dataList/menu/iconList';
import {
  custom_dark_page,
  custom_dark_component,
  custom_dark_form,
} from './theme/dark';

import logo from './icon/logo.svg';

import '@/styles/index.less';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

const initIp = '192.168.3.233';

export async function getInitialState() {
  let menuData = {};
  try {
    menuData = await myFetch({
      url: `http://${initIp}:28800/sitemgr/dbm/xxx`,
    });
    return menuData;
  } catch (error) {
    return (menuData = routes);
  }
}

export const layout = ({ initialState }) => {
  const [state, setState] = useUrlState({ locale: '', theme: '' });

  const obj = queryParams();

  let params = location.hash.split('?')[1] || '';
  const filterParams = params
    .split('&')
    .filter((item) => !item.includes('site'))
    .join('&');
  const isHideMenu = obj.isHideMenu === 'true' ? false : null;

  // ['en-US', 'zh-CN']
  setLocale(changeLocale(obj.locale));

  return {
    logo: logo,
    menu: {
      request: async () => {
        initialState.menu.forEach((item) => {
          // 需要改的属性值都在这里添加
          item.path = `${item.path}?${filterParams}`;
        });

        let newArr: any = [];
        initialState.menu.map((item) => {
          const iconItem = iconList
            .filter((t) => t.name === item.name)
            .map((e) => e.icon);
          return newArr.push(
            // 后端返回缺少的属性都在这里添加
            Object.assign(
              {},
              {
                ...item,
                menuRender: isHideMenu,
                icon:
                  iconItem.length > 0 ? (
                    iconItem[0]
                  ) : (
                    // 没有icon时的占位符
                    <div style={{ width: 100 }} />
                  ),
              },
            ),
          );
        });

        return newArr;
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
              // location.reload();
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
            components: {
              Form: custom_dark_form,
            },
          }}
        >
          {children}
        </ConfigProvider>
      );
    },
    token: obj.theme === 'dark' ? custom_dark_page : null,
    menuProps: {
      onClick: (item: { key: string }) => {
        setState({ theme: state.theme });
        history.push(`${item.key}?${filterParams}`);
      },
    },
  };
};
