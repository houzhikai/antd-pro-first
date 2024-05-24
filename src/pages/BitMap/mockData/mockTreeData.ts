import {
  comprehensiveInfo,
  comprehensiveInfo1,
  comprehensiveInfo2,
  comprehensiveInfo3,
  comprehensiveInfo4,
  comprehensiveInfo5,
  comprehensiveInfo6,
  comprehensiveInfo7,
} from '../components/initValues';

export const treeDataList = [
  {
    title: 'afmtest_00', // 本地文件名
    location: '/var/partner/xxx/afmtest_00', // 本地文件路径
    key: '0-0',
    children: [
      {
        title: 'Dut_x0y0', // 页面展示
        key: '0-0-0',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x1y0',
        key: '0-0-1',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo1, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x2y0',
        key: '0-0-2',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo2, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x3y0',
        key: '0-0-3',
        isLeaf: true,
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo3, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x4y0',
        key: '0-0-4',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo4, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x5y0',
        key: '0-0-5',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo5, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x6y0',
        key: '0-0-6',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo6, // 综合信息展示，具体内容后端待定
      },
      {
        title: 'Dut_x7y0',
        key: '0-0-7',
        location: '/var/partner/xxx/afmtest_00', // 本地文件路径
        details: comprehensiveInfo7, // 综合信息展示，具体内容后端待定
      },
    ],
  },
  // {
  //   title: 'FailData 2', // 本地文件名
  //   location: '', // 本地文件路径
  //   key: '0-1',
  //   children: [
  //     {
  //       title: 'Dut 0',
  //       key: '0-1-0',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo,
  //     },
  //     {
  //       title: 'Dut 1',
  //       key: '0-1-1',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo1,
  //     },
  //     {
  //       title: 'Dut 2',
  //       key: '0-1-2',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo2,
  //     },
  //     {
  //       title: 'Dut 3',
  //       key: '0-1-3',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo3,
  //     },
  //     {
  //       title: 'Dut 4',
  //       key: '0-1-4',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo4,
  //     },
  //     {
  //       title: 'Dut 5',
  //       key: '0-1-5',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo5,
  //     },
  //     {
  //       title: 'Dut 6',
  //       key: '0-1-6',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo6,
  //     },
  //     {
  //       title: 'Dut 7',
  //       key: '0-1-7',
  //       location: '/var/partner/xxx/FailData 2', // 本地文件路径
  //       details: comprehensiveInfo7,
  //     },
  //   ],
  // },
];
