import { mockTestList } from '@/pages/BitMap/mockData/mockTestList';
import { getSeries } from './getFullEchartsSeries';

export const getFullEchartsOptions = (echartsDataColor) => {
  const maxValue = { xMax: 400, yMax: 200 };
  return {
    renderer: 'canvas',
    // TODO, 测试中使用，生产环境 不展示浮动信息
    // tooltip: {
    //   position: 'top',
    //   backgroundColor: '#f5f5f5',
    //   textStyle: { color: '#1f1f1f' },
    //   formatter: (params: { data: number[] }) => {
    //     return `
    //        X: ${String(params?.data?.[0]) || ''}<br />
    //        Y: ${String(params?.data?.[1]) || ''}<br />
    //        Value: ${String(params?.data?.[2]) || ''}<br />
    //       `;
    //   },
    // },
    tooltip: { show: false },
    animation: false,
    grid: { width: '100%', height: '100%', left: '0%', top: '0%' },
    visualMap: {
      type: 'piecewise',
      show: false,
      pieces: echartsDataColor,
    },
    dataZoom: { show: false },
    xAxis: { type: 'category', show: false, position: 'top' }, // x 轴的坐标： top/bottom
    yAxis: { type: 'category', show: false, inverse: true }, // y 轴是否反转 true/false
    series: getSeries(mockTestList, maxValue),
  };
};
