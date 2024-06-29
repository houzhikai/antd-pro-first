import {
  getBlockMarkLinePosition,
  getPageMarkLinePosition,
} from './getMarkLinePosition';

export default (data, scaleNumber, borderColor, configInfo) => {
  const commonSeriesConfig = {
    type: 'heatmap',
    symbol: 'rect',
    symbolSize: 3, // 设置点的大小
    data,
    zlevel: 1,
    large: true, // 启用块状渲染
    largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
    progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
    progressiveThreshold: 5 * 1000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
    sampling: 'average',
    itemStyle:
      scaleNumber > 1
        ? { borderColor: '#ccc', borderWidth: 1, borderType: 'solid' }
        : {},
  };

  const commonMarkLineConfig = {
    zlevel: 2,
    label: { show: false },
    symbol: 'none',
  };

  const getMarkLine = (width) => {
    return scaleNumber === 0.125
      ? { width: 0, type: 'line', color: borderColor }
      : { width: width, type: 'line', color: borderColor }; // 粗线样式
  };

  const seriesDataList = [
    {
      lineStyle: getMarkLine(6), // 粗线样式
      data: getBlockMarkLinePosition(scaleNumber, configInfo),
      emphasis: { lineStyle: getMarkLine(6) }, // 粗线样式
    },
    {
      lineStyle: scaleNumber === 0.125 ? getMarkLine(0) : getMarkLine(2),
      data: getPageMarkLinePosition(scaleNumber, configInfo),
      emphasis: { lineStyle: getMarkLine(2) }, // 细线样式
    },
  ];

  return seriesDataList.map((item) => {
    return {
      ...commonSeriesConfig,
      markLine: {
        ...commonMarkLineConfig,
        lineStyle: item.lineStyle, // 粗线样式
        data: item.data,
        // 粗线样式
        emphasis: item.emphasis,
      },
    };
  });
};
