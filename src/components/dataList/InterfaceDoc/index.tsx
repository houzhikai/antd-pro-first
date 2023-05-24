// interface ContentProps {
//   type?: 'get' | 'post';
//   url: string;
// }

interface InterfaceDocDataListProps {
  // 主要为了约束 type 类型
  title: string;
  content: {
    id: string;
    type?: 'GET' | 'POST';
    url: string;
    interfaceDataDetail?: any;
  }[];
}
export const interfaceDocDataList: InterfaceDocDataListProps[] = [
  {
    title: 'DBM',
    content: [
      {
        id: '1-1',
        type: 'GET',
        url: '/api/dbm/site/reader1',
        interfaceDataDetail: {
          process: 'sitemgred',
          module: 'DBM',
          person: 'soma',
          beforeInterface: '无1',
        },
      },
      {
        id: '1-2',
        type: 'POST',
        url: '/api/dbm/site/reader2',
        interfaceDataDetail: {
          process: 'sitemgred',
          module: 'DBM',
          person: 'soma',
          beforeInterface: '无2',
        },
      },
    ],
  },
  {
    title: '固件升级',
    content: [
      {
        id: '2-1',
        type: 'POST',
        url: '/api/dbm/site/writer1',
      },
      { id: '2-2', type: 'POST', url: '/api/dbm/site/writer2' },
    ],
  },
];
