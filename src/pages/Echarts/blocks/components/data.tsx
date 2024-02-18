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
export const items = [
  {
    label: 'LotID:',
    children: 'FA85-1282',
  },
  {
    label: 'WaferID',
    children: '1',
  },
  {
    label: 'FlowID:',
    children: '',
  },
  {
    label: 'ProductID:',
    children: '',
  },
  {
    label: 'TestProgram:',
    children: '',
  },
  {
    label: 'TesterID:',
    children: '',
  },
  {
    label: 'OperatorID:',
    children: '',
  },
  {
    label: 'StartTime:',
    children: '2024_01_02_19_39_35',
  },
  {
    label: 'EndTime:',
    children: '2024_01_02_19_40_59',
  },
  {
    label: 'NotchSide:',
    children: '',
  },
  {
    label: 'SortID:',
    children: '',
  },
  {
    label: 'GridXmax:',
    children: '',
  },
  {
    label: 'GridYmax:',
    children: '',
  },
  {
    label: 'FabSite:',
    children: '',
  },
  {
    label: 'TestSite:',
    children: '',
  },
  {
    label: 'ProbeCardID:',
    children: '',
  },
  {
    label: 'LoadBoardID:',
    children: '',
  },
  {
    label: 'CustomerID:',
    children: '',
  },
  {
    label: 'CustomerPartID:',
    children: '',
  },
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

// export const columns = [
//   {
//     title: 'TotalCnt',
//     dataIndex: 'TotalCnt',
//   },
//   {
//     title: 'PassCnt',
//     dataIndex: 'PassCnt',
//   },
//   {
//     title: 'FailCnt',
//     dataIndex: 'FailCnt',
//   },
//   {
//     title: 'Yield',
//     dataIndex: 'Yield',
//   },
// ];
// export const dataSource = [
//   {
//     TotalCnt: 298,
//     PassCnt: 168,
//     FailCnt: 130,
//     Yield: '56.38%',
//   },
// ];
// export const detailColumns: any = [
//   {
//     title: 'SoftBinID',
//     dataIndex: 'SoftBinID',
//     width: '69px',
//   },
//   {
//     title: 'BinName',
//     dataIndex: 'BinName',
//     width: '69px',
//   },
//   {
//     title: 'Count',
//     dataIndex: 'Count',
//     width: '50px',
//   },
//   {
//     title: 'Yield',
//     dataIndex: 'Yield',
//     width: '54px',
//   },
//   {
//     title: 'Color',
//     dataIndex: 'color',
//     width: '55px',
//     align: 'center',
//     render: (text, record, index) => {
//       const handleClick = () => {
//         setIsShowModal((obj) => {
//           return {
//             ...obj,
//             isOpen: true,
//             order: index,
//           };
//         });
//       };
//       return (
//         <div
//           style={{
//             background: changeColor[index],
//             height: 30,
//             cursor: 'pointer',
//           }}
//           onClick={handleClick}
//         />
//       );
//     },
//   },
// ];
// export const detailDataSource = [
//   {
//     SoftBinID: '2001',
//     BinName: 'FB1',
//     Count: '130',
//     Yield: '43.62%',
//   },
//   {
//     SoftBinID: '1002',
//     BinName: 'PB2',
//     Count: '0',
//     Yield: '0%',
//   },
//   {
//     SoftBinID: '2002',
//     BinName: 'FB2',
//     Count: '0%',
//     Yield: '0%',
//   },
//   {
//     SoftBinID: '1001',
//     BinName: 'PB1',
//     Count: '168',
//     Yield: '56.38%',
//   },
// ];
