export const getSeries = (data) => {
  // 不使用 过滤数据，效果不好看
  // const filterValue0 = echartsDataList.filter((item) => item[2] !== 0);
  console.log('缩略图数据展示', data)
  return {
    name: 'bitmap',
    type: 'heatmap',
    xAxisIndex: 0,
    yAxisIndex: 0,
    data,
    large: true, // 启用块状渲染
    largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
    progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
    progressiveThreshold: 5 * 1000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
    sampling: 'average',
    label: {
      show: false, // 格子上是否要加上数字,数据量大的时候会导致加载过慢
      fontSize: 8,
      // 设置 width 和 overflow 可以将宽度多余的隐藏
      width: 20,
      overflow: 'truncate',
    },
  };
};
