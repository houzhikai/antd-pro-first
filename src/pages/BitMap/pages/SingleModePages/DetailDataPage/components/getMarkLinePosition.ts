const getLinePosition = (pageLine, scaleNumber, line, isPage) => {
  const xAxisNumber: any = [];
  // 使用for循环生成256的倍数，直到8192
  for (
    let i = 0;
    i <= pageLine.xMax / Math.sqrt(scaleNumber);
    i +=
      scaleNumber === 0.125
        ? 1
        : pageLine.xMax /
          //   小于 1 倍时，按照 1 倍算
          (scaleNumber > 1 ? Math.sqrt(scaleNumber) : 1) /
          line.col /
          (isPage ? pageLine.duts.col : 1)
  ) {
    xAxisNumber.push({ xAxis: i });
  }
  const yAxisNumber: any = [];
  // 使用for循环生成256的倍数，直到8192
  for (
    let i = 0;
    i <= pageLine.yMax / Math.sqrt(scaleNumber);
    i +=
      scaleNumber === 0.125
        ? 1
        : pageLine.yMax /
          //   小于 1 倍时，按照 1 倍算
          (scaleNumber > 1 ? Math.sqrt(scaleNumber) : 1) /
          line.row /
          (isPage ? pageLine.duts.row : 1)
  ) {
    yAxisNumber.push({ yAxis: i });
  }
  return [...xAxisNumber, ...yAxisNumber];
};

export const getPageMarkLinePosition = (scaleNumber, configInfo) => {
  const pageLine = {
    xMax: configInfo.layoutConfig.xMax,
    yMax: configInfo.layoutConfig.yMax,
    duts: configInfo.duts,
    blocks: configInfo.blocks,
    pages: configInfo.pages,
  };
  const data = getLinePosition(pageLine, scaleNumber, pageLine.blocks, true);
  return data;
};

export const getBlockMarkLinePosition = (scaleNumber, configInfo) => {
  const pageLine = {
    xMax: configInfo.layoutConfig.xMax,
    yMax: configInfo.layoutConfig.yMax,
    duts: configInfo.duts,
    blocks: configInfo.blocks,
    pages: configInfo.pages,
  };
  const data = getLinePosition(pageLine, scaleNumber, pageLine.duts, false);
  return data;
};
