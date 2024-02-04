import { useState } from 'react';

import { data } from '@/components/dataList/Echarts/data';
import { takeMiddleNumber } from '@/components/takeMiddleNumber';
// interface AxisProp {
//   x: 'top' | 'bottom';
//   y: 'left' | 'right';
// }
// type WaferMapDataProps =
//   | {
//       deviceInfo: {
//         data: { label: string; children: string | number }[];
//         title: string;
//       };
//       summary: {
//         softBinList: any[];
//         title: string;
//         data: any[];
//       };
//       waferMapData: any;
//     }
//   | undefined;
export default () => {
  // const [axis, setAxis] = useState<AxisProp>({ x: 'bottom', y: 'left' }); // x,y轴位置，x：只有上下，y: 只有左右
  // const [isAxisInverse, setIsAxisInverse] = useState({ x: false, y: false }); // x,y轴位置是否反转
  // 坐标轴上的首尾值
  const [axisValue, setAsisValue] = useState({
    xMin: 0,
    xMax: 400,
    yMin: 0,
    yMax: 400,
  });

  const [isShowModal, setIsShowModal] = useState({ isOpen: false, order: 0 }); // 1. 是否打开颜色选择器 2. 点击颜色的序号

  const [changeColor, setChangeColor] = useState([
    '#008000',
    '#fd0003',
    '#f60',
    '#3f6063',
    '#fffd00',
    '#00007e',
    '#ff00ff',
  ]); // 自定义背景颜色

  // 修改横纵轴的name
  const [changeAxisName, setChangeAxisName] = useState({ x: '', y: '' });

  // 拖拽 还是 放大
  const [changeEchartsPosition, setChangeEchartsPosition] = useState({
    drag: 0,
    zoom: 100,
  });

  const xAxisValueList = takeMiddleNumber(axisValue.xMin, axisValue.xMax);
  const yAxisValueList = takeMiddleNumber(axisValue.yMin, axisValue.yMax);
  const [waferMapData, setWaferMapData] = useState<any>();

  let newDataArray: any = [];
  let newDataItemLength = 5000;
  for (let i = 0; i < data.length; i += newDataItemLength) {
    newDataArray.push(data.slice(i, i + newDataItemLength));
  }
  // const dataList = data.map((item) => {
  //   return [
  //     xAxisValueList.indexOf(item[0]),
  //     yAxisValueList.indexOf(item[1]),
  //     item[2],
  //   ];
  // });
  const options = {
    renderer: 'canvas',
    // roam: 'move',
    tooltip: {
      position: 'top',
      formatter: (params) => {
        return `X: ${params?.data?.[0] || ''}，<br />Y: ${
          params?.data?.[1] || ''
        }，<br />Value: ${params?.data?.[2] || ''}`;
      },
    },
    animation: false,
    grid: { height: '90%', width: '90%', left: '5%' },
    //   支持放大缩小， inside在内部放大缩小
    dataZoom: [
      // dataZoom 的运行原理是通过 数据过滤 以及在内部设置轴的显示窗口来达到 数据窗口缩放 的效果。
      // 数据过滤模式（dataZoom.filterMode）的设置不同，效果也不同。
      // 可选值为：
      // 'filter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。
      // 'weakFilter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。
      // 'empty'：当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
      // 'none': 不过滤数据，只改变数轴范围。
      {
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: 0, // 不要设置其他坐标的index
        // yAxisIndex: 0,
        filterMode: 'empty',
        throttle: 0,
        preventDefaultMouseMove: true,
      },
      {
        id: 'dataZoomY',
        type: 'inside',
        // xAxisIndex: 0,
        yAxisIndex: 0, // 不要设置其他坐标的index
        filterMode: 'empty',
        throttle: 0,
        preventDefaultMouseMove: true,
      },
    ],
    xAxis: { type: 'category', data: xAxisValueList },
    yAxis: { type: 'category', data: yAxisValueList },
    visualMap: {
      min: 1,
      max: 7,
      show: false,
      inRange: { color: changeColor },
    },
    series: {
      name: 'WaferMap',
      type: 'heatmap',
      yAxisIndex: 0,
      xAxisIndex: 0,
      data: data,
      large: true, // 启用块状渲染
      largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
      progressive: 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
      progressiveThreshold: 5 * 1000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
      sampling: 'average',
      label: {
        show: false, // 格子上是否要加上数字,数据量大的时候会导致加载过慢
        fontSize: 8,
        // 设置 width 和 overflow 可以将宽度多余的隐藏
        width: 20,
        overflow: 'truncate',
      },
      // roam: true,
      itemStyle: {
        // 格子的边框设置
        borderColor: '#ccc',
        borderWidth: 1,
        borderType: 'solid',
      },
    },
  };
  console.log({ waferMapData });
  return {
    // axis,
    // setAxis,
    // isAxisInverse,
    // setIsAxisInverse,
    axisValue,
    setAsisValue,
    isShowModal,
    setIsShowModal,
    changeColor,
    setChangeColor,
    changeAxisName,
    setChangeAxisName,
    options,
    changeEchartsPosition,
    setChangeEchartsPosition,
    data,
    waferMapData,
    setWaferMapData,
  };
};
