export const mockTreeData = [
  {
    key: 'item-0',
    title: 'M5000ES',
    ip: '172.16.0.100',
    class: 'Head',
    status: '2',
    children: [
      {
        key: 'item-0-0',
        title: 'Slot 0',
        ip: '172.16.0.100',
        class: 'Slot',
        status: '0',
        type: 'SMU026',
      },
      {
        key: 'item-0-1',
        title: 'Slot 1',
        ip: '172.16.1.100',
        class: 'Slot',
        status: '6',
        type: 'DRU288S',
      },
      {
        key: 'item-0-2',
        title: 'Slot 2',
        ip: '172.16.2.100',
        class: 'Slot',
        status: '0',
        type: 'DRU288S1111111111111',
      },
    ],
  },
];

export const mockDetailData = {
  detail: [
    {
      label: '妲戒綅鍙?',
      value: '0',
    },
    {
      label: '绫诲瀷',
      value: 'SMU026',
    },
    {
      label: '鏉＄爜',
      value: 'BNC03020003D22300001',
    },
    {
      label: '鍋ュ悍鐘舵€?',
      value: '0',
    },
    {
      label: '涓氬姟鐘舵€?',
      value: '0',
    },
    {
      label: '娓╁害鐘舵€?',
      value: '0',
    },
  ],
  firmware: [
    {
      label: 'mOS',
      value: 'V1.28',
    },
    {
      label: 'Uboot',
      value: 'V1.8',
    },
    {
      label: 'WEB',
      value: 'V1.12',
    },
    {
      label: 'ET-SERVER',
      value: 'V1.25',
    },
    {
      label: 'CPLD-M',
      value: 'V1.2',
    },
  ],
};
export const mockHeadData = {
  detail: [
    {
      label: '鏉＄爜',
      value: 'BNC03020006023300004',
    },
    {
      label: '鍨嬪彿',
      value: 'M5000ES',
    },
  ],
  power: [
    {
      label: '鐢垫簮0',
      status: [
        {
          label: '鍋ュ悍鐘舵€?',
          value: '0',
        },
      ],
    },
    {
      label: '鐢垫簮1',
      status: [
        {
          label: '鍋ュ悍鐘舵€?',
          value: '0',
        },
      ],
    },
    {
      label: '鏁存満鐢垫簮鐘舵€?',
      value: '1',
      err: '',
    },
  ],
  fan: [
    {
      label: '椋庢墖0',
      status: [
        {
          label: '鍋ュ悍鐘舵€?',
          value: '0',
        },
      ],
    },
    {
      label: '椋庢墖1',
      status: [
        {
          label: '鍋ュ悍鐘舵€?',
          value: '0',
        },
      ],
    },
  ],
};
