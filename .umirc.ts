import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  history: {
    type: 'hash',
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
      routes: [
        {
          key: 1,
          name: 'Site6.0',
          path: '/dbm/site?site=Site6.0',
          component: './DBM/Site',
        },
        {
          key: 2,
          name: 'Site2.0',
          path: '/dbm/site?site=Site2.0',
          component: './DBM/Site',
        },
      ],
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
  ],
  npmClient: 'npm',
});
