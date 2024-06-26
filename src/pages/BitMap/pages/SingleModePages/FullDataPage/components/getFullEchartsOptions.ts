import { takeMiddleNumber } from '../../../../components/takeMiddleNumber';
import { getSeries } from './getFullEchartsSeries';

export const getFullEchartsOptions = (
  theme,
  data,
  singleColor,
  detailsEchartsAxisValue,
  baseConversion,
  dots,
  scaleNumber,
  isStackModalOpen,
  echartsDataColor,
) => {
  const xAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.xMin,
    detailsEchartsAxisValue.xMax,
    baseConversion,
    scaleNumber,
  );
  const yAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.yMin,
    detailsEchartsAxisValue.yMax,
    baseConversion,
    scaleNumber,
  );

  return {
    renderer: 'canvas',
    tooltip: { show: false },
    animation: false,
    grid: { width: '100%', height: '100%', left: '0%', top: '0%' },
    xAxis: {
      show: false,
      type: 'category',
      data: xAxisValueList,
      position: 'top',
      inverse: dots === 'top_right' || dots === 'bottom_right',
    },
    yAxis: {
      show: false,
      type: 'category',
      data: yAxisValueList,
      inverse: dots === 'top_left' || dots === 'top_right',
    },
    visualMap: {
      show: false,
      type: 'piecewise',
      pieces: isStackModalOpen ? echartsDataColor : singleColor,
    }, // heatmap 必须有visualMap属性
    series: getSeries(data),
  };
};
