import { getSeries } from './getFullEchartsSeries';
import { takeMiddleNumber } from '@/pages/BitMap/components/takeMiddleNumber';

export const getFullEchartsOptions = (
  theme,
  data,
  echartsDataColor,
  detailsEchartsAxisValue,
  baseConversion,
  dots,
) => {
  //   const maxValue = { xMax: 400, yMax: 200 };
  const xAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.xMin,
    detailsEchartsAxisValue.xMax,
    baseConversion,
  );
  const yAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.yMin,
    detailsEchartsAxisValue.yMax,
    baseConversion,
  );

  return {
    renderer: 'canvas',
    backgroundColor: '#fff',
    tooltip: { show: false },
    // tooltip: {
    //   show: true,
    //   position: 'top',
    //   backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
    //   textStyle: { color: theme === 'dark' ? '#938c83' : '#1f1f1f' },
    //   formatter: (params: { data: number[] }) => {
    //     if (!Array.isArray(params.data)) return; // 不展示 markLine.emphasis的值
    //     return `
    //       X: ${String(params?.data?.[0]) || ''}<br />
    //       Y: ${String(params?.data?.[1]) || ''}<br />
    //       Value: ${String(params?.data?.[2]) || ''}<br />
    //           `;
    //   },
    // },
    animation: false,
    grid: { width: '100%', height: '100%', left: '0%', top: '0%' },
    xAxis: {
      show: false,
      type: 'category',
      data: xAxisValueList,
      position: 'top',
      inverse: dots === 'TopRight' || dots === 'BottomRight',
    },
    yAxis: {
      show: false,
      type: 'category',
      data: yAxisValueList,
      inverse: dots === 'TopLeft' || dots === 'TopRight',
    },
    visualMap: { show: false, type: 'piecewise', pieces: echartsDataColor }, // heatmap 必须有visualMap属性
    series: getSeries(data),
  };
};
