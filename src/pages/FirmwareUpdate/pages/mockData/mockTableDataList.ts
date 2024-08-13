// 设备列表接口
export const mockDeviceListInterface = {
  allow: 0,
  tableList: [
    {
      slot: 0,
      type: 'SMU026',
      slotStatus: 0,
      children: [
        {
          key: '0-1',
          firmware: 'mOS',
          version: 'V1.6',
          newVersion: '',
          status: 1, // 需要后端把枚举值列出来
        },
        {
          key: '0-2',
          firmware: 'Uboot',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 2,
        },
        {
          key: '0-3',
          firmware: 'WEB',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 3,
        },
        {
          key: '0-4',
          firmware: 'ET-SERVER',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 4,
        },
        {
          key: '0-5',
          firmware: 'CPLD-M',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 0,
          children: [
            {
              key: '0-5-0',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-1',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-2',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-3',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
          ],
        },
      ],
    },
    {
      slot: 1,
      type: 'DRU288',
      slotStatus: 3,
      children: [
        {
          key: '1-1',
          firmware: 'mOS',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 1,
        },
        {
          key: '1-2',
          firmware: 'Uboot',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 2,
        },
        {
          key: '1-3',
          firmware: 'WEB',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 3,
        },
        {
          key: '1-4',
          firmware: 'ET-SERVER',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 4,
        },
        {
          key: '1-5',
          firmware: 'CPLD-M',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 5,
          children: [
            {
              key: '0-5-0',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-1',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-2',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-3',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
          ],
        },
      ],
    },
    {
      slot: 2,
      type: 'DRU288',
      slotStatus: 5,
      children: [
        {
          key: '2-1',
          firmware: 'mOS',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 1,
        },
        {
          key: '2-2',
          firmware: 'Uboot',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 2,
        },
        {
          key: '2-3',
          firmware: 'WEB',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 3,
        },
        {
          key: '2-4',
          firmware: 'ET-SERVER',
          version: 'V1.6',
          newVersion: 'V1.7',
          status: 4,
        },
        {
          key: '2-5',
          firmware: 'CPLD-M',
          version: 'V1.6',
          newVersion: 'V1.8',
          status: 0,
          children: [
            {
              key: '0-5-0',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-1',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-2',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
            {
              key: '0-5-3',
              firmware: 'CPLD-M',
              version: 'V1.6',
              newVersion: '-',
              status: 6, // 传一个特定的值，前端用来显示 '-'
            },
          ],
        },
      ],
    },
  ],
};
