import { defineConfig } from '@umijs/max';

export default defineConfig({
  // antd: {
  //   dark: true,
  // },
  access: {},
  model: {},
  initialState: {},
  request: {},
  history: {
    type: 'hash',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  layout: {
    title: 'Tools',
  },
  routes: [
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
      // routes: [
      //   {
      //     key: 1,
      //     name: 'Site6.0',
      //     path: '/dbm/site?site=Site6.0',
      //     component: './DBM/Site',
      //   },
      //   {
      //     key: 2,
      //     name: 'Site2.0',
      //     path: '/dbm/site?site=Site2.0',
      //     component: './DBM/Site',
      //   },
      // ],
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: '表格',
      path: '/table',
      component: './Table',
    },
    {
      name: '固件升级',
      path: '/fu',
      component: './FU',
    },
    {
      name: '虚拟表格',
      path: `/virtualTable`,
      component: './VirtualTable',
      access: 'canSeevirtualTable',
    },
    {
      name: 'echarts',
      path: `/echarts`,
      component: './Echarts',
    },
    {
      path: '*',
      layout: false,
      component: './404',
    },
  ],
  npmClient: 'npm',
});
