import { defineConfig } from '@umijs/max';

export default defineConfig({
  mfsu: {},
  chainWebpack: (config) => {
    config.cache(true);
    // config.plugin('cache').use(HardSourceWebpackPlugin);
  },
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
      name: '接口使用文档',
      path: `/interfaceDoc`,
      component: './InterfaceDoc',
    },
    {
      name: '拖拽',
      path: `/draggable`,
      component: './Draggable',
    },
    {
      name: '汇总',
      path: `/summary`,
      component: './Summary',
    },
    {
      name: '流程图',
      path: `/testFlow`,
      component: './TestFlow',
    },
    {
      name: '画图工具',
      path: `/draw`,
      component: './Draw',
    },
    {
      name: '详情页',
      path: `/detail`,
      component: './Detail',
    },
    {
      name: 'redux',
      path: `/redux`,
      component: './Redux',
    },
    {
      name: 'components',
      path: `/components`,
      component: './Components',
    },
    {
      path: '*',
      layout: false,
      component: './404',
    },
  ],
  npmClient: 'npm',
});
