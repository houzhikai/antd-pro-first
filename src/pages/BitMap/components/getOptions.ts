import { mockOptions } from '../mockData/mockOptions';
import { takeMiddleNumber } from './takeMiddleNumber';

export const getOptions = (theme, jumpAddress) => {
  console.log('jumpAddress', jumpAddress);
  const maxValue = { xMax: 200, yMax: 200 };
  const xAxisValueList = takeMiddleNumber(0, maxValue.xMax);
  const yAxisValueList = takeMiddleNumber(140, maxValue.yMax);
  return {
    renderer: 'canvas',
    tooltip: {
      position: 'top',
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      textStyle: {
        color: theme === 'dark' ? '#938c83' : '#1f1f1f',
      },
      formatter: (params: { data: number[] }) => {
        return `X: ${params?.data?.[0] || ''}<br />
        Y: ${params?.data?.[1] || ''}`;
      },
    },
    xAxis: { type: 'category', data: xAxisValueList, position: 'top' }, // x 轴的坐标： top/bottom
    yAxis: { type: 'category', data: yAxisValueList, inverse: true }, // y 轴是否反转 true/false
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
        filterMode: 'none',
        // preventDefaultMouseMove: true,
        minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
        realtime: true,
      },
      {
        id: 'dataZoomY',
        type: 'inside',
        // xAxisIndex: 0,
        yAxisIndex: 0, // 不要设置其他坐标的index
        filterMode: 'none',
        // preventDefaultMouseMove: true,
        minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
        realtime: true,
      },
    ],
    grid: { width: '90%', height: '80%', left: '5%' },
    visualMap: { type: 'piecewise', show: false }, //pieces: changeColorList
    series: [
      {
        type: 'scatter',
        symbol: 'rect',
        symbolSize: 10, // 设置散点大小
        // prettier-ignore
        data: mockOptions,
      },
    ],
  };
};
