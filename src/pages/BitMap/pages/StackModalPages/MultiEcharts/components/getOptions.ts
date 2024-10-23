// import { getSeries } from './getSeries';
import { getAxisLabelInterval } from '../../../../components/getAxisLabelInterval';
import { getTooltipDutDetailsInfo } from '../../../../components/getTooltipDutDetailsInfo';
import { getEchartsAxisNumber } from './getEchartsAxisNumber';
import { getBlockMarkLinePosition, getPagesMarkLinePosition } from './getMarkLinePosition';

const getGrid = (position) => {
  let grid = {};
  switch (position) {
    case 'hasXY':
      grid = {
        width: 'calc(100% - 42px)',
        height: 'calc(100% - 42px)',
        top: 42,
        left: 42,
      };
      break;
    case 'hasX':
      grid = { width: '100%', height: 'calc(100% - 42px)', top: 42, left: 0 };
      break;
    case 'hasY':
      grid = { width: 'calc(100% - 42px)', height: '100%', top: 0, left: 42 };
      break;
    default:
      grid = { width: '100%', height: '100%', top: 0, left: 0 };
      break;
  }
  return grid;
};

export const getOptions = (
  { xIndex, yIndex, xAxisList, yAxisList },
  position,
  { xAxisValueList, yAxisValueList },
  echartsDataColor,
  data,
  scaleNumber,
  configInfo,
  baseConversion,
  echartsAxisNumber,
  isSingleModalOpen,
  singleColor,
  theme
) => {
  const dots = configInfo.layoutConfig.dots;
  const xMax = configInfo.layoutConfig.xMax;
  const yMax = configInfo.layoutConfig.yMax;
  const axisLabelInterval = getAxisLabelInterval(scaleNumber, xMax, yMax);

  const borderColor = theme === 'dark' ? '#35393b' : '#cecece';
  const getMarkLine = (width) => {
    return { width: width, type: 'line', color: width > 2 ? (theme === 'dark' ? '#999' : '#aaa') : borderColor };
  };

  const commonSeriesConfig = {
    type: 'heatmap',
    data,
    zlevel: 3, // stutter time annotation
    large: true, // 启用块状渲染
    largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
    progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
    progressiveThreshold: 5 * 10000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
    sampling: 'average',
    itemStyle: { borderColor: '#fafafa', borderWidth: 1, borderType: 'solid' },
  };

  const commonMarkLineConfig = {
    label: { show: false },
    symbol: 'none',
    precision: 0.1,
    silent: true, // 图形是否不响应和触发鼠标事件
  };
  const seriesDataList = [
    {
      z: 1, // stutter time annotation
      lineStyle: getMarkLine(2),
      data: getPagesMarkLinePosition(configInfo, echartsAxisNumber, scaleNumber, {
        xIndex,
        yIndex,
        xAxisList,
        yAxisList,
      }),
    },
    {
      z: 2, // stutter time annotation
      lineStyle: getMarkLine(4), // 粗线样式
      data: getBlockMarkLinePosition(
        configInfo,
        echartsAxisNumber,
        scaleNumber,
        { xIndex, yIndex, xAxisList, yAxisList },
        dots
      ),
    },
  ];
  // ** 不可以使用 split 属性，因为现在是多个echarts拼接而来，后面没有label，不会出现block/page线 **
  return {
    grid: getGrid(position),
    // graphic: getOutSideBlocks(scaleNumber, detailLayout, position),
    tooltip: {
      transitionDuration: 0, // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      position: function (point, params, dom, rect, size) {
        const obj: any = {};
        const viewWidth = size.viewSize[0];
        const viewHeight = size.viewSize[1];

        const tooltipWidth = dom.offsetWidth;
        const tooltipHeight = dom.offsetHeight;

        const mouseX = point[0];
        const mouseY = point[1];

        if (mouseX + tooltipWidth > viewWidth) {
          obj.left = viewWidth - tooltipWidth + 10;
        } else {
          obj.left = mouseX;
        }

        if (mouseY + tooltipHeight > viewHeight) {
          obj.top = viewHeight - tooltipHeight + 10;
        } else {
          obj.top = mouseY;
        }
        return obj;
      },
      formatter: (params: { data: number[] }) => {
        // 不展示 markLine.emphasis的值
        if (!Array.isArray(params.data)) {
          return;
        }
        // show tooltip info
        const tooltipInfo = getTooltipDutDetailsInfo(
          { xIndex, yIndex, xAxisList, yAxisList },
          echartsAxisNumber,
          scaleNumber,
          params,
          baseConversion,
          configInfo
        );
        return tooltipInfo;
      },
    },
    animation: false,
    xAxis: {
      show: position === 'hasXY' || position === 'hasX',
      type: 'category',
      data: xAxisValueList,
      position: 'top',
      inverse: dots === 'top_right' || dots === 'bottom_right',
      axisTick: {
        alignWithLabel: scaleNumber !== 0.125,
        interval: axisLabelInterval.axisTick.xInterval,
      },
      axisLabel: {
        alignWithLabel: true,
        interval: axisLabelInterval.axisLabel.xInterval,
        formatter: (value, index) => {
          console.log({ xAxisList: value })
          const valueToDecNumber = parseInt(value, baseConversion === 'Hex' ? 16 : baseConversion === 'Oct' ? 8 : 10);
          if (xMax < 1024 || yMax < 1024) {
            if (scaleNumber === 256) {
              return xMax.toString(baseConversion === 'Hex' ? 16 : baseConversion === 'Oct' ? 8 : 10);
            } else {
              return value + '    ';
            }
          }
          if (dots === 'top_right' || dots === 'bottom_right') {
            return value + '    ';
          }
          if (index === 0 && valueToDecNumber === 0) {
            return value;
          } else if (index === 0 && valueToDecNumber !== 0) {
            return '      ' + value;
          } else if (valueToDecNumber === xMax) {
            return value + '           ';
          } else {
            if (scaleNumber === 0.125) {
              return ' ' + value;
            } else {
              return value;
            }
          }
        },
      },
    },
    yAxis: {
      show: position === 'hasXY' || position === 'hasY',
      type: 'category',
      data: yAxisValueList,
      inverse: dots === 'top_left' || dots === 'top_right',
      axisTick: {
        alignWithLabel: scaleNumber !== 0.125,
        interval: axisLabelInterval.axisTick.yInterval,
      },
      axisLabel: {
        alignWithLabel: true,
        interval: axisLabelInterval.axisLabel.yInterval,
        formatter: (value, index) => {
          const valueToDecNumber = parseInt(value, baseConversion === 'Hex' ? 16 : baseConversion === 'Oct' ? 8 : 10);
          const echartsNumber = getEchartsAxisNumber(configInfo, scaleNumber);
          console.log({ value, valueToDecNumber, yMax, index, yAxisList, yAxisValueList })
          if (yMax <= 1024 || xMax <= 1024) {
            if (valueToDecNumber !== 0 && valueToDecNumber !== yMax) {
              console.log(111, { valueToDecNumber })
              return;
            } else {
              console.log(222, value, valueToDecNumber)
            }
          }
          if (valueToDecNumber === 0 && (dots === 'bottom_left' || dots === 'bottom_right')) {
            return value + '\n';
          }
          if (valueToDecNumber === yMax && (dots === 'bottom_left' || dots === 'bottom_right')) {
            console.log({ value, valueToDecNumber, yMax });
            return '\n' + value;
          }
          if (valueToDecNumber % echartsNumber === 0) {
            if (dots === 'top_right' || dots === 'top_left') {
              if (valueToDecNumber === yMax) {
                return value + '\n';
              }
              return '\n' + value;
            } else {
              return value + '\n';
            }
          }
          return value;
        },
      },
    },
    visualMap: { show: false, type: 'piecewise', pieces: isSingleModalOpen ? singleColor : echartsDataColor },
    series: seriesDataList.map((item) => {
      return {
        ...commonSeriesConfig,
        markLine: {
          ...commonMarkLineConfig,
          z: item.z,
          lineStyle: item.lineStyle, // 标线样式
          data: item.data,
          emphasis: { disabled: true }, //关闭 高亮样式
        },
      };
    }),
    // series: getSeries(configInfo, echartsAxisNumber, data, scaleNumber, dots, {
    //   xIndex,
    //   yIndex,
    //   xAxisList,
    //   yAxisList,
    // }),
  };
};
