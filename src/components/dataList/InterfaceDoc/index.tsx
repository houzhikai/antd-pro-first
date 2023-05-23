// interface ContentProps {
//   type?: 'get' | 'post';
//   url: string;
// }

interface InterfaceDocDataListProps {
  // 主要为了约束 type 类型
  title: string;
  content: {
    type?: 'GET' | 'POST';
    url: string;
  }[];
}
export const interfaceDocDataList: InterfaceDocDataListProps[] = [
  {
    title: 'DBM',
    content: [
      {
        type: 'GET',
        url: '/api/dbm/site/reader1',
      },
      {
        type: 'POST',
        url: '/api/dbm/site/reader2',
      },
    ],
  },
  {
    title: '固件升级',
    content: [
      {
        type: 'POST',
        url: '/api/dbm/site/writer1',
      },
      {
        type: 'POST',
        url: '/api/dbm/site/writer2',
      },
    ],
  },
];
