import { getBlockMarkLinePosition, getPagesMarkLinePosition } from './getMarkLinePosition';

const borderColor = '#35393b';
export const getSeries = (configInfo, echartsAxisNumber, data, scaleNumber, dots, singleEcharts) => {
  const getMarkLine = (width) => {
    return scaleNumber === 0.125
      ? { width: 1, type: 'line', color: borderColor }
      : { width: width, type: 'line', color: width > 2 ? '#fff' : borderColor }; // 粗线样式
  };

  const commonSeriesConfig = {
    type: 'heatmap',
    data,
    // zlevel: 2,
    large: true, // 启用块状渲染
    largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
    progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
    progressiveThreshold: 5 * 10000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
    sampling: 'average',
    itemStyle: scaleNumber > 1 ? { borderColor: '#fafafa', borderWidth: 1, borderType: 'solid' } : {},
  };

  const commonMarkLineConfig = {
    // zlevel: 1,
    label: { show: false },
    symbol: 'none',
    precision: 0.1,
  };

  const seriesDataList = [
    {
      lineStyle: getMarkLine(4), // 粗线样式
      data: getBlockMarkLinePosition(configInfo, echartsAxisNumber, scaleNumber, singleEcharts, dots),
    },
    {
      lineStyle: getMarkLine(2),
      data: getPagesMarkLinePosition(configInfo, echartsAxisNumber, scaleNumber),
    },
  ];

  return seriesDataList.map((item) => {
    return {
      ...commonSeriesConfig,
      markLine: {
        ...commonMarkLineConfig,
        lineStyle: item.lineStyle, // 标线样式
        data: item.data,
        emphasis: { disabled: true }, //关闭 高亮样式
      },
    };
  });
};
