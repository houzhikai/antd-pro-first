export const getBlockMarkLinePosition = (
  configInfo,
  echartsAxisNumber,
  scaleNumber,
  { xIndex, yIndex, xAxisList, yAxisList },
  dots,
) => {
  const pageLine = {
    xMax: configInfo.layoutConfig.xMax,
    yMax: configInfo.layoutConfig.yMax,
    duts: configInfo.duts,
    blocks: configInfo.blocks,
    pages: configInfo.pages,
  };
  const getBlocksLinePosition = (pageLine) => {
    let xAxisNumber: any =
      dots === 'top_right' || dots === 'bottom_right' // 反转判断
        ? (xIndex + 1) % (xAxisList / pageLine.duts.col) === 0
          ? [{ xAxis: 0 }]
          : xIndex === 0
          ? [{ xAxis: echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1)) }]
          : [] // 不反转的判断
        : xIndex % (xAxisList / pageLine.duts.col) === 0
        ? [{ xAxis: 0 }]
        : xIndex + 1 === xAxisList
        ? [{ xAxis: echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1)) }]
        : [];
    let yAxisNumber: any =
      dots === 'bottom_left' || dots === 'bottom_right' // 反转判断
        ? (yIndex + 1) % (yAxisList / pageLine.duts.col) === 0
          ? [{ yAxis: 0 }]
          : yIndex === 0
          ? [{ yAxis: echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1)) }]
          : [] // 不反转的判断
        : yIndex % (yAxisList / pageLine.duts.row) === 0
        ? [{ yAxis: 0 }]
        : yIndex + 1 === yAxisList
        ? [{ yAxis: echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1)) }]
        : [];
    return [...xAxisNumber, ...yAxisNumber];
  };

  const data = getBlocksLinePosition(pageLine);
  return data;
};

export const getPagesMarkLinePosition = (
  configInfo,
  echartsAxisNumber,
  scaleNumber,
) => {
  const pageLine = {
    xMax: configInfo.layoutConfig.xMax,
    yMax: configInfo.layoutConfig.yMax,
    duts: configInfo.duts,
    blocks: configInfo.blocks,
    pages: configInfo.pages,
  };
  const getPagesLinePosition = (pageLine) => {
    let xAxisNumber: any = [];
    for (
      let x = 0;
      x <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1));
      x +=
        scaleNumber === 0.125
          ? 1
          : pageLine.xMax /
            pageLine.duts.col /
            pageLine.blocks.col /
            Math.sqrt(Math.max(scaleNumber, 1))
    ) {
      xAxisNumber.push({ xAxis: x });
    }
    let yAxisNumber: any = [];
    for (
      let y = 0;
      y <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1));
      y +=
        scaleNumber === 0.125
          ? 1
          : pageLine.yMax /
            pageLine.duts.row /
            pageLine.blocks.row /
            Math.sqrt(Math.max(scaleNumber, 1))
    ) {
      yAxisNumber.push({ yAxis: y });
    }
    return [...xAxisNumber, ...yAxisNumber];
  };

  const data = getPagesLinePosition(pageLine);
  return data;
};
