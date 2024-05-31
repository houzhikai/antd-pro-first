export const treeDataList = [
  {
    title: 'AFM8_',
    location:
      '/var/easytest/userdata/20240529055402580/ulog/bitmap/WaferId001_202405201908',
    key: '0-0',
    header: {
      device_name: '',
      project_name: '',
      lot_id: '001',
      wafer_id: '001',
      td_serial: '001',
      comment: '',
    },
    test_info: {
      afm_param: {
        x_num: '7',
        y_num: '10',
        width_mode: '8',
        endian: 'little',
        compress_mode: '',
        pin_list: 'IO_Compare',
      },
      start_addr: '0',
    },
    children: [
      {
        title: 'dut_x3y0',
        key: '',
        details: {
          fileName: 'lotid001_waferid001_20240529175414_x3y0.dat',
          x: 3,
          y: 0,
          failCount: 131072,
          status: 'FAIL',
          timeStamp: '20240529175414',
        },
      },
      {
        title: 'dut_x2y0',
        key: '',
        details: {
          fileName: 'lotid001_waferid001_20240529175414_x2y0.dat',
          x: 2,
          y: 0,
          failCount: 131072,
          status: 'FAIL',
          timeStamp: '20240529175414',
        },
      },
      {
        title: 'dut_x1y0',
        key: '',
        details: {
          fileName: 'lotid001_waferid001_20240529175414_x1y0.dat',
          x: 1,
          y: 0,
          failCount: 131072,
          status: 'FAIL',
          timeStamp: '20240529175414',
        },
      },
      {
        title: 'dut_x0y0',
        key: '',
        details: {
          fileName: 'lotid001_waferid001_20240529175413_x0y0.dat',
          x: 0,
          y: 0,
          failCount: 131072,
          status: 'FAIL',
          timeStamp: '20240529175413',
        },
      },
    ],
  },
];
