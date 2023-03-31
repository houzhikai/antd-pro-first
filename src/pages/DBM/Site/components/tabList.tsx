import Children1 from './Children1';
import Children2 from './Children2';

const tabList = [
  {
    tab: '基本信息',
    key: 'base',
    closable: false,
    children: <Children1 />,
  },
  {
    tab: '详细信息',
    key: 'info',
    children: <Children2 />,
  },
];
export default tabList;
