import { getAxisLabelInterval } from '@/pages/BitMap/components/getAxisLabelInterval';
// import { getSeries } from './getSeries';
import { getTooltipDutDetailsInfo } from '@/pages/BitMap/components/getTooltipDutDetailsInfo';
import {
  getBlockMarkLinePosition,
  getPagesMarkLinePosition,
} from './getMarkLinePosition';

const getGrid = (position) => {
  let grid = {};
  switch (position) {
    case 'hasXY':
      grid = {
        width: `calc(100% - 40px)`,
        height: `calc(100% - 40px)`,
        top: 40,
        left: 40,
      };
      break;
    case 'hasX':
      grid = { width: '100%', height: `calc(100% - 40px)`, top: 40, left: 0 };
      break;
    case 'hasY':
      grid = { width: `calc(100% - 40px)`, height: '100%', top: 0, left: 40 };
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
) => {
  const dots = configInfo.layoutConfig.dots;
  const xMax = configInfo.layoutConfig.xMax;
  const axisLabelInterval = getAxisLabelInterval(scaleNumber);

  const borderColor = '#35393b';
  const getMarkLine = (width) => {
    return scaleNumber === 0.125
      ? { width: 1, type: 'line', color: borderColor }
      : { width: width, type: 'line', color: width > 2 ? '#fff' : borderColor }; // 粗线样式
  };

  const commonSeriesConfig = {
    type: 'heatmap',
    data,
    zlevel: 2,
    large: true, // 启用块状渲染
    largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
    progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
    progressiveThreshold: 5 * 10000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
    sampling: 'average',
    itemStyle:
      scaleNumber > 1
        ? { borderColor: '#fafafa', borderWidth: 1, borderType: 'solid' }
        : {},
  };

  const commonMarkLineConfig = {
    zlevel: 1,
    label: { show: false },
    symbol: 'none',
    precision: 0.1,
  };

  const seriesDataList = [
    {
      lineStyle: getMarkLine(4), // 粗线样式
      data: getBlockMarkLinePosition(
        configInfo,
        echartsAxisNumber,
        scaleNumber,
        { xIndex, yIndex, xAxisList, yAxisList },
        dots,
      ),
    },
    {
      lineStyle: getMarkLine(2),
      data: getPagesMarkLinePosition(
        configInfo,
        echartsAxisNumber,
        scaleNumber,
        { xIndex, yIndex, xAxisList, yAxisList },
      ),
    },
  ];

  return {
    grid: getGrid(position),
    // graphic: getOutSideBlocks(scaleNumber, detailLayout, position),
    tooltip: {
      transitionDuration: 0, // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      position: function (point, params, dom, rect, size) {
        let obj: any = {};
        let viewWidth = size.viewSize[0];
        let viewHeight = size.viewSize[1];

        // 计算 tooltip 的宽度和高度
        let tooltipWidth = dom.offsetWidth;
        let tooltipHeight = dom.offsetHeight;

        // 鼠标位置
        let mouseX = point[0];
        let mouseY = point[1];

        // 确保 tooltip 不会超出右侧和底部边界
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
        if (!Array.isArray(params.data)) return;
        // show tooltip info
        const tooltipInfo = getTooltipDutDetailsInfo(
          { xIndex, yIndex, xAxisList, yAxisList },
          echartsAxisNumber,
          scaleNumber,
          params,
          baseConversion,
          configInfo,
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
        alignWithLabel: true,
        interval: axisLabelInterval.axisTick.xInterval,
      },
      axisLabel: {
        alignWithLabel: true,
        interval: axisLabelInterval.axisLabel.xInterval,
        formatter: (value, index) => {
          const ValueToDecNumber = parseInt(
            value,
            baseConversion === 'Hex' ? 16 : baseConversion === 'Oct' ? 8 : 10,
          );
          if (dots === 'top_right') {
            return value;
          } else if (index === 0) {
            return '      ' + value;
          } else if (ValueToDecNumber === xMax) {
            return value + '       ';
          } else {
            return value;
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
        alignWithLabel: true,
        interval: axisLabelInterval.axisTick.yInterval,
      },
      axisLabel: {
        alignWithLabel: true,
        interval: axisLabelInterval.axisLabel.yInterval,
        formatter: (value) => {
          if (dots === 'top_left' || dots === 'top_right') {
            return '\n' + value;
          } else {
            return value;
          }
        },
      },
    },
    visualMap: { show: false, type: 'piecewise', pieces: echartsDataColor },
    series: seriesDataList.map((item) => {
      return {
        ...commonSeriesConfig,
        markLine: {
          ...commonMarkLineConfig,
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
