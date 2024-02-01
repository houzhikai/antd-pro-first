interface DataType {
  key: string;
  name: string;
  code: string;
  color: string;
  count: string;
  percent: string;
}
export const data: DataType[] = [
  {
    key: '1',
    name: 'PassRepaired',
    code: '1',
    color: '#04b200',
    count: '51',
    percent: '30.10%',
  },
  {
    key: '2',
    name: 'PassNoRepair',
    code: '2',
    color: '#03ff01',
    count: '37',
    percent: '21.89%',
  },
  {
    key: '3',
    name: 'ContunuityFail',
    code: '3',
    color: '#fd0003',
    count: '32',
    percent: '10.93%',
  },
  {
    key: '4',
    name: 'LeakageFail',
    code: '4',
    color: '#3f6063',
    count: '26',
    percent: '15.30%',
  },
  {
    key: '5',
    name: 'DynIddFail',
    code: '5',
    color: '#fffd00',
    count: '10',
    percent: '5.92%',
  },
  {
    key: '6',
    name: 'StaticIddFail',
    code: '6',
    color: '#00007e',
    count: '0',
    percent: '4.73%',
  },
  {
    key: '7',
    name: 'RepairFail',
    code: '7',
    color: '#ff00ff',
    count: '5',
    percent: '2.96%',
  },
  {
    key: '8',
    name: 'Total',
    code: '',
    color: '',
    count: '169',
    percent: '100%',
  },
];

export const colorList = [
  { name: '科技蓝', color: '#1677ff' },
  { name: '明清', color: '#13c2c2' },
  { name: '日暮', color: '#faad14' },
  { name: '火山', color: '#f6531c' },
  { name: '暗绿', color: '#84af9b' },
  { name: '灰色', color: '#d0d0d0' },
];
export const standardColorList = [
  '#c00000',
  '#ff0000',
  '#ffff00',
  '#92d050',
  '#00b050',
  '#00b0f0',
  '#0070c0',
  '#002060',
  '#7030a0',
];
// export const series = [
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data1,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data2,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data3,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data4,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data5,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data6,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data7,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data8,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data9,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data10,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data11,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data12,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data13,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data14,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data15,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data16,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data17,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
//   {
//     name: 'WaferMap',
//     type: 'heatmap',
//     data: data18,
//     sampling: 'average',
//     samplingThreshold: 3,
//     label: {
//       // 格子上是否要加上数字,数据量大的时候会导致加载过慢
//       show: false,
//     },
//     itemStyle: {
//       // 格子的边框设置
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderType: 'solid',
//     },
//     emphasis: {
//       itemStyle: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.5)',
//       },
//     },
//   },
// ];
