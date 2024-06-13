import { mockTestList } from '../../../../mockData/mockTestList';
import { getSeries } from './getSeries';
import { takeMiddleNumber } from '../../../../components/takeMiddleNumber';

export const getOptions = (theme, jumpAddress, echartsDataColor, detailsEchartsAxisValue, scaleNumber) => {
  const maxValue = { xMax: 400, yMax: 200 };
  const xAxisValueList = takeMiddleNumber(detailsEchartsAxisValue.xMin, detailsEchartsAxisValue.xMax);
  const yAxisValueList = takeMiddleNumber(detailsEchartsAxisValue.yMin, detailsEchartsAxisValue.yMax);
  console.log({ scaleNumber });
  return {
    renderer: 'canvas',
    tooltip: {
      position: 'top',
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      textStyle: { color: theme === 'dark' ? '#938c83' : '#1f1f1f' },
      formatter: (params: { data: number[] }) => {
        return `
         X: ${String(params?.data?.[0].toString(16).toUpperCase()) || ''}<br />
         Y: ${String(params?.data?.[1].toString(16).toUpperCase()) || ''}<br />
         Value: ${String(params?.data?.[2]) || ''}<br />
        `;
      },
    },
    animation: false,
    grid: { width: '90%', height: '85%', left: '5%', top: '5%' },
    visualMap: {
      type: 'piecewise',
      show: false,
      pieces: echartsDataColor,
    },
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: 0, // 不要设置其他坐标的index
        filterMode: 'none',
        minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
        realtime: true,
        startValue: jumpAddress.X,
        start: 0,
        end: scaleNumber,
      },
      {
        id: 'dataZoomY',
        type: 'inside',
        yAxisIndex: 0, // 不要设置其他坐标的index
        filterMode: 'none',
        minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
        realtime: true,
        startValue: jumpAddress.Y,
        start: 0,
        end: scaleNumber,
      },
    ],
    xAxis: { type: 'category', data: xAxisValueList, position: 'top' }, // x 轴的坐标： top/bottom
    yAxis: { type: 'category', data: yAxisValueList, inverse: true }, // y 轴是否反转 true/false
    series: getSeries(mockTestList, maxValue, detailsEchartsAxisValue),
  };
};
