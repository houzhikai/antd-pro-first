import { getAxisLabelInterval } from '../../../../../components/getAxisLabelInterval';
import { takeMiddleNumber } from '../../../../../components/takeMiddleNumber';
import getScatterSeries from './getScatterSeries';
export const getScatterOptions = (
  theme,
  data,
  echartsDataColor,
  detailsEchartsAxisValue, // 详情数据最小/最大值
  baseConversion,
  configInfo,
  scaleNumber,
  detailsValues,
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
  const dots = configInfo.layoutConfig.dots;
  const axisLabelInterval = getAxisLabelInterval(scaleNumber);
  return {
    renderer: 'canvas',
    tooltip: {
      show: true,
      position: 'top',
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      textStyle: { color: theme === 'dark' ? '#938c83' : '#1f1f1f' },
      formatter: (params: { data: number[] }) => {
        if (!Array.isArray(params.data)) return; // 不展示 markLine.emphasis的值
        let baseNumberList: any = [];
        if (baseConversion === 'Hex') {
          baseNumberList = params.data.map((item, index) =>
            index < 2 ? item.toString(16).toUpperCase() : item,
          );
        } else if (baseConversion === 'Oct') {
          baseNumberList = params.data.map((item, index) =>
            index < 2 ? item.toString(8) : item,
          );
        } else {
          baseNumberList = params.data;
        }
        return `
          XY: ${baseNumberList?.[0] || ''}, ${baseNumberList?.[1] || ''} <br />
          Block_XY: ${String(Math.floor(params?.data?.[0] / 1024)) || ''}, ${
          String(Math.floor(params?.data?.[1] / 1024)) || ''
        } <br />
          Page_XY: ${String(Math.floor(params?.data?.[0] / 128)) || ''}, ${
          String(Math.floor(params?.data?.[1] / 1024)) || ''
        }
          `;
      },
    },
    animation: false,
    grid: { width: '94%', height: '90%', left: '3%', top: '3%' },

    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'slider',
        height: 14,
        xAxisIndex: 0, // 不要设置其他坐标的index
        filterMode: 'none',
        // minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
        realtime: true,
        // end: axisLabelInterval.end.xEnd,
        zoomLock: true, // 只能平移，不可放大缩小
        brushSelect: false, //是否开启刷选功能。在下图的 brush 区域你可以按住鼠标左键后框选出选中部分
        showDetail: false, // 拖拽时候显示详细数值信息
        start: detailsValues.xStart,
        end: detailsValues.xEnd,
        // startValue: detailsEchartsAxisValue.xMin,
        // endValue: detailsEchartsAxisValue.xMax,
      },
      {
        id: 'dataZoomY',
        type: 'slider',
        width: 14,
        yAxisIndex: 0, // 不要设置其他坐标的index
        filterMode: 'none',
        // minSpan: 10, // 用于限制窗口大小的最小值（百分比值）
        realtime: true,
        // end: axisLabelInterval.end.yEnd,
        zoomLock: true, // 只能平移，不可放大缩小
        brushSelect: false, //是否开启刷选功能。在下图的 brush 区域你可以按住鼠标左键后框选出选中部分
        showDetail: false, // 拖拽时候显示详细数值信息
        start: detailsValues.yStart,
        end: detailsValues.yEnd,
        // startValue: detailsEchartsAxisValue.yMin,
        // endValue: detailsEchartsAxisValue.yMax,
      },
    ],
    xAxis: {
      type: 'category',
      data: xAxisValueList,
      position: 'top',
      // splitArea: { show: true, areaStyle: { color: 'rgba(0,0,0,0)' } }, // 坐标轴在 grid 区域中的分隔区域，默认不显示。透明度改为0，不显示边框
      inverse: dots === 'TopRight' || dots === 'BottomRight',
      // 显示坐标轴刻度。
      axisTick: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel:
          scaleNumber === 0.2 ||
          scaleNumber === 1 ||
          scaleNumber === 4 ||
          scaleNumber === 16,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisTick.xInterval,
      },
      // 显示刻度标签，坐标刻度上的数字
      axisLabel: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel:
          scaleNumber === 0.2 ||
          scaleNumber === 1 ||
          scaleNumber === 4 ||
          scaleNumber === 16,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisLabel.xInterval,
      },
      splitLine:
        scaleNumber === 0.125
          ? { show: true, lineStyle: { color: '#eee' } }
          : {}, // 显示边框颜色
    },

    yAxis: {
      type: 'category',
      data: yAxisValueList,
      // splitArea: { show: true, areaStyle: { color: 'rgba(0,0,0,0)' } },
      inverse: dots === 'TopLeft' || dots === 'TopRight',
      // 显示坐标轴刻度。
      axisTick: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel: scaleNumber === 1,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisTick.yInterval,
      },
      // 显示刻度标签，坐标刻度上的数字
      axisLabel: {
        // 分割线偏移, alignWithLabel: 可以保证刻度线和标签对齐,
        alignWithLabel: scaleNumber === 1 || scaleNumber === 16,
        // interval: 坐标轴刻度的显示间隔，在类目轴中有效。
        interval: axisLabelInterval.axisLabel.yInterval,
      },
      splitLine:
        scaleNumber === 0.125
          ? { show: true, lineStyle: { color: '#eee' } }
          : {}, // 显示边框颜色
    },
    visualMap: { show: false, type: 'piecewise', pieces: echartsDataColor }, // heatmap 必须有visualMap属性
    series: getScatterSeries(
      data,
      detailsEchartsAxisValue,
      configInfo,
      scaleNumber,
      theme
    ),
  };
};
