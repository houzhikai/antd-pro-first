export const routes = {
  menu: [
    {
      name: 'home',
      path: `/home`,
      component: './Home',
    },
    {
      name: 'dbm',
      path: `/dbm/site`,
      component: './DBM/Site',
    },
    {
      name: 'access',
      path: `/access`,
      component: './Access',
    },
    {
      name: 'table',
      path: `/table`,
      component: './Table',
    },
    {
      name: 'fu',
      path: `/fu`,
      component: './FU',
    },
    {
      name: 'virtualTable',
      path: `/virtualTable`,
      component: './VirtualTable',
    },
    {
      name: 'echarts',
      path: `/echarts`,
      component: './Echarts',
    },
    {
      name: 'interfaceDoc',
      path: `/interfaceDoc`,
      component: './InterfaceDoc',
    },
  ],
  access: {
    canSeeAdmin: false,
    isCanSeevirtualTable: false,
  },
};
