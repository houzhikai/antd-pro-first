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
    describe?: string;
    inputParams?: {
      [key: string]: any;
    }; // 参数不确定的对象
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
        describe: '获取site中的DBM1',
        interfaceDataDetail: {
          process: 'sitemgred',
          module: 'DBM',
          person: 'soma',
          beforeInterface: '无1',
        },
        inputParams: {
          page: 0,
        },
      },
      {
        id: '1-2',
        type: 'POST',
        url: '/api/dbm/site/reader2',
        describe: '获取site中的DBM2',
        interfaceDataDetail: {
          process: 'sitemgred',
          module: 'DBM',
          person: 'soma',
          beforeInterface: '无2',
        },
        inputParams: {},
      },
    ],
  },
  {
    title: '固件升级',
    content: [
      {
        id: '2-1',
        type: 'POST',
        url: '/api/fu/site/heartbeat',
        describe: '心跳接口，每5秒轮询一次',
        interfaceDataDetail: {
          process: 'sitemgred',
          module: 'DBM',
          person: 'soma',
          beforeInterface: '无1',
        },
        inputParams: {},
      },
      {
        id: '2-2',
        type: 'POST',
        url: '/api/fu/site/upload',
        describe: '上传文件接口',
        interfaceDataDetail: {
          process: 'sitemgred',
          module: 'DBM',
          person: 'soma',
          beforeInterface: '无1',
        },
        inputParams: {
          page: 0,
          filename: ['111', '222', '333'],
        },
      },
    ],
  },
];
