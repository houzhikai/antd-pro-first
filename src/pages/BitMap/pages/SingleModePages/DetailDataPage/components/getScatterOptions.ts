import { getAxisLabelInterval } from '../../../../components/getAxisLabelInterval';
import { getTooltipDutDetailsInfo } from '../../../../components/getTooltipDutDetailsInfo';
import { getAxisValueObj } from '../../../../components/takeMiddleNumber';
import { getSingleGraphic } from './getGraphic';
import getScatterSeries from './getScatterSeries';
export const getScatterOptions = (
  theme,
  data,
  singleColor,
  detailsEchartsAxisValue, // 详情数据最小/最大值
  baseConversion,
  configInfo,
  scaleNumber,
  detailsValues,
  isStackModalOpen,
  echartsDataColor,
  detailLayout
) => {
  const { xAxisValueList, yAxisValueList } = getAxisValueObj(detailsEchartsAxisValue, baseConversion, scaleNumber);
  const dots = configInfo.layoutConfig.dots;
  const axisLabelInterval = getAxisLabelInterval(scaleNumber);
  const borderColor = theme === 'dark' ? '#35393b' : '#f4f4f4';
  // 合并 dataZoom 相同的参数
  const commonDataZoomConfig = {
    type: 'slider',
    filterMode: 'filter',
    // minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
    realtime: false,
    // end: axisLabelInterval.end.xEnd,
    zoomLock: true, // 只能平移，不可放大缩小
    brushSelect: false, //是否开启刷选功能。在下图的 brush 区域你可以按住鼠标左键后框选出选中部分
    showDetail: false, // 拖拽时候显示详细数值信息
  };
  // 显示边框颜色
  // const splitLine =
  //   scaleNumber === 0.125 ? { show: true, lineStyle: { color: '#eee' } } : {};

  return {
    renderer: 'canvas',
    tooltip: {
      show: true,
      position: 'left',
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      textStyle: { color: theme === 'dark' ? '#938c83' : '#1f1f1f' },
      formatter: (params: { data: number[] }) => {
        // 不展示 markLine.emphasis的值
        if (!Array.isArray(params.data)) {
          return;
        }
        // show tooltip info
        const tooltipInfo = getTooltipDutDetailsInfo(scaleNumber, params, baseConversion, configInfo);
        return tooltipInfo;
      },
    },
    animation: false,
    grid: { width: '94%', height: '90%', left: 50, top: 30 },
    graphic: getSingleGraphic(scaleNumber, detailLayout),
    dataZoom: [
      {
        id: 'dataZoomX',
        xAxisIndex: 0, // 不要设置其他坐标的index
        height: 14,
        start: detailsValues.xStart,
        end: detailsValues.xEnd,
        ...commonDataZoomConfig,
      },
      {
        id: 'dataZoomY',
        yAxisIndex: 0, // 不要设置其他坐标的index
        width: 14,
        start: detailsValues.yStart,
        end: detailsValues.yEnd,
        ...commonDataZoomConfig,
      },
    ],
    xAxis: {
      type: 'category',
      data: xAxisValueList,
      position: 'top',
      // splitArea: { show: true, areaStyle: { color: 'rgba(0,0,0,0)' } }, // 坐标轴在 grid 区域中的分隔区域，默认不显示。透明度改为0，不显示边框
      inverse: dots === 'top_right' || dots === 'bottom_right',
      // 显示坐标轴刻度。
      axisTick: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel: true,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisTick.xInterval,
      },
      // 显示刻度标签，坐标刻度上的数字
      axisLabel: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel: false,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisLabel.xInterval,
      },
      // splitLine, // 显示边框颜色
    },

    yAxis: {
      type: 'category',
      data: yAxisValueList,
      // splitArea: { show: true, areaStyle: { color: 'rgba(0,0,0,0)' } },
      inverse: dots === 'top_left' || dots === 'top_right',
      // 显示坐标轴刻度。
      axisTick: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel: true,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisTick.yInterval,
      },
      // 显示刻度标签，坐标刻度上的数字
      axisLabel: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel: false,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisLabel.yInterval,
      },
      // splitLine, // 显示边框颜色
    },
    visualMap: {
      show: false,
      type: 'piecewise',
      pieces: isStackModalOpen ? echartsDataColor : singleColor,
    }, // heatmap 必须有visualMap属性
    series: getScatterSeries(data, scaleNumber, borderColor, configInfo),
  };
};
