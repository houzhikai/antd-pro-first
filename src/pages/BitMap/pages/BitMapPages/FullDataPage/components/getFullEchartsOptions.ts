import { takeMiddleNumber } from '../../../../components/takeMiddleNumber';
import { getSeries } from './getFullEchartsSeries';

export const getFullEchartsOptions = (
  // theme,
  data,
  // singleColor,
  detailsEchartsAxisValue,
  baseConversion,
  dots,
  scaleNumber,
  bitmapColorModalObj
  // isStackModalOpen,
  // echartsDataColor
) => {
  const xMax = detailsEchartsAxisValue.xMax;
  const yMax = detailsEchartsAxisValue.yMax;
  const xAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.xMin,
    detailsEchartsAxisValue.xMax,
    baseConversion,
    scaleNumber,
    false
  );
  const yAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.yMin,
    detailsEchartsAxisValue.yMax,
    baseConversion,
    scaleNumber,
    false
  );
  const fullEchartsSize =
    detailsEchartsAxisValue.xMax > detailsEchartsAxisValue.yMax
      ? { width: '100%', height: `${((yMax / xMax) * 100).toFixed(0)}%` }
      : { width: `${((xMax / yMax) * 100).toFixed(0)}%`, height: '100%' };
  return {
    backgroundColor: bitmapColorModalObj.colorList[0].color,
    renderer: 'canvas',
    tooltip: { show: false },
    animation: false,
    grid: {
      width: fullEchartsSize.width,
      height: fullEchartsSize.height,
      left: '0%',
      top: '0%',
    },
    xAxis: {
      show: detailsEchartsAxisValue.xMax > detailsEchartsAxisValue.yMax, // width > height length, show xAxis, position bottom
      type: 'category',
      data: xAxisValueList,
      position: 'bottom',
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { lineStyle: { color: '#35393b' } }, // xAxis color
      inverse: dots === 'top_right' || dots === 'bottom_right',
    },
    yAxis: {
      show: detailsEchartsAxisValue.xMax < detailsEchartsAxisValue.yMax,
      type: 'category',
      position: 'right',
      data: yAxisValueList,
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { lineStyle: { color: '#35393b' } },
      inverse: dots === 'top_left' || dots === 'top_right',
    },
    visualMap: {
      show: false,
      type: 'piecewise',
      pieces: bitmapColorModalObj.colorList,
    }, // heatmap 必须有visualMap属性
    series: getSeries(data),
  };
};
