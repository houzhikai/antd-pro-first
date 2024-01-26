import { useState } from 'react';

import { data } from '@/components/dataList/Echarts/data';
import { takeMiddleNumber } from '@/components/takeMiddleNumber';
// interface AxisProp {
//   x: 'top' | 'bottom';
//   y: 'left' | 'right';
// }
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

  const xAxisValueList = takeMiddleNumber(axisValue.xMin, axisValue.xMax);
  const yAxisValueList = takeMiddleNumber(axisValue.yMin, axisValue.yMax);

  const dataList = data.map((item) => {
    return [
      xAxisValueList.indexOf(item[0]),
      yAxisValueList.indexOf(item[1]),
      item[2],
    ];
  });

  const options = {
    tooltip: {
      position: 'top',
      formatter: (params) => {
        return `X: ${params.data[0]}，<br />Y: ${params.data[1]}，<br />Value: ${params.data[2]}`;
      },
    },
    grid: {
      height: '90%',
      width: '90%',
      left: '5%',
    },
    //   支持放大缩小， inside在内部放大缩小
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: [0],
        filterMode: 'filter',
      },
      {
        id: 'dataZoomY',
        type: 'inside',
        yAxisIndex: [0],
        filterMode: 'empty',
      },
    ],
    xAxis: {
      type: 'category',
      data: xAxisValueList,
    },
    yAxis: {
      type: 'category',
      data: yAxisValueList,
    },
    visualMap: {
      min: 1,
      max: 7,
      calculable: false,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      show: false,
      inRange: {
        color: changeColor,
      },
    },
    series: [
      {
        name: 'WaferMap',
        type: 'heatmap',
        data: dataList,
        label: {
          // 格子上是否要加上数字,数据量大的时候会导致加载过慢
          show: false,
        },
        itemStyle: {
          // 格子的边框设置
          borderColor: '#ccc',
          borderWidth: 1,
          borderType: 'solid',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

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
  };
};
