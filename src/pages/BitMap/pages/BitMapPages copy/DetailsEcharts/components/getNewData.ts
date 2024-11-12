export const getNewData = (data, scaleNumber, echartsAxisNumber, dots, xAxisList, yAxisList) => {
  if (!Array.isArray(data)) {
    return [];
  }
  for (const subArr of data) {
    if (!Array.isArray(subArr)) {
      return [];
    }
  }
  const newData = data.map((item) => {
    // 解析放在 x 轴方向的第几个echarts 中
    const xEchartsIndex = Math.floor(item[0] / (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))));
    // 解析放在 y 轴方向的第几个echarts 中
    const yEchartsIndex = Math.floor(item[1] / (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))));
    /**
     * 拆分 data 数据
     */
    //  x 方向实际的值
    const newXIndex = Math.floor(item[0] % (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))));
    //  y 方向实际的值
    const newYIndex = Math.floor(item[1] % (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))));
    const newXInverse = dots === 'top_right' || dots === 'bottom_right' ? xAxisList - 1 - xEchartsIndex : xEchartsIndex;
    const newYInverse =
      dots === 'bottom_left' || dots === 'bottom_right' ? yAxisList - 1 - yEchartsIndex : yEchartsIndex;
    const data = [newXIndex, newYIndex, item[2]];

    return { xEchartsIndex: newXInverse, yEchartsIndex: newYInverse, data };
  });

  const groupedData = {};

  newData.map((item) => {
    const key = `${item.xEchartsIndex}_${item.yEchartsIndex}`;
    if (!groupedData[key]) {
      groupedData[key] = {
        xEchartsIndex: item.xEchartsIndex,
        yEchartsIndex: item.yEchartsIndex,
        data: [],
      };
    }
    const dataList = groupedData[key].data.push(item.data);
    return dataList;
  });

  const newArray = Object.values(groupedData).sort((a: any, b: any) => a.xEchartsIndex - b.xEchartsIndex);
  return newArray;
};
