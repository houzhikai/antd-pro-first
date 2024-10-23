export const getBlockMarkLinePosition = (
  configInfo,
  echartsAxisNumber,
  scaleNumber,
  { xIndex, yIndex, xAxisList, yAxisList },
  dots
) => {
  const pageLine = {
    xMax: configInfo.layoutConfig.xMax,
    yMax: configInfo.layoutConfig.yMax,
    duts: configInfo.duts,
    blocks: configInfo.blocks,
    pages: configInfo.pages,
  };
  const getBlocksLinePosition = (pageLine) => {
    const xNumber = dots === 'top_left' || dots === 'bottom_left' ? xIndex + 1 : xAxisList - xIndex;
    const xAxisNumber: any =
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

    const xEchartsInNumber: any = [];
    if (xNumber % (xAxisList / pageLine.duts.col) === 0) {
      for (
        let x = 0;
        x <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1));
        x += pageLine.xMax / pageLine.duts.col / Math.sqrt(Math.max(scaleNumber, 1))
      ) {
        xEchartsInNumber.push({ xAxis: x });
      }
    }

    const yNumber = dots === 'bottom_left' || dots === 'bottom_right' ? yIndex + 1 : yAxisList - yIndex;
    const yAxisNumber: any =
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

    const yEchartsInNumber: any = [];
    if (yNumber % (yAxisList / pageLine.duts.row) === 0) {
      for (
        let y = 0;
        y <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1));
        y += pageLine.yMax / pageLine.duts.row / Math.sqrt(Math.max(scaleNumber, 1))
      ) {
        xEchartsInNumber.push({ yAxis: y });
      }
    }
    return [
      ...xAxisNumber,
      ...xEchartsInNumber.filter((item) => item.xAxis !== 0),
      ...yAxisNumber,
      ...yEchartsInNumber.filter((item) => item.yAxis !== 0),
    ];
  };

  const data = getBlocksLinePosition(pageLine);
  return data;
};

export const getPagesMarkLinePosition = (
  configInfo,
  echartsAxisNumber,
  scaleNumber,
  { xIndex, yIndex, xAxisList, yAxisList }
) => {
  const pageLine = {
    xMax: configInfo.layoutConfig.xMax,
    yMax: configInfo.layoutConfig.yMax,
    duts: configInfo.duts,
    blocks: configInfo.blocks,
    pages: configInfo.pages,
  };
  const getPagesLinePosition = (pageLine) => {
    const xAxisNumber: any = [];
    const dots = configInfo.layoutConfig.dots;
    const xNumber = dots === 'top_left' || dots === 'bottom_left' ? xAxisList - xIndex : xIndex + 1;
    // if (scaleNumber === 0.125) {
    //   for (let x = 0; x <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1)); x += 1) {
    //     xAxisNumber.push({ xAxis: x });
    //   }
    // } else {
    if (xNumber % (xAxisList / pageLine.duts.col / pageLine.blocks.col) === 0) {
      for (
        let x = 0;
        x <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1));
        x += pageLine.xMax / pageLine.duts.col / pageLine.blocks.col / Math.sqrt(Math.max(scaleNumber, 1))
      ) {
        xAxisNumber.push({ xAxis: x });
      }
    }
    // }
    const yAxisNumber: any = [];
    const yNumber = dots === 'top_left' || dots === 'top_right' ? yAxisList - yIndex : yIndex + 1;
    // if (scaleNumber === 0.125) {
    //   for (let y = 0; y <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1)); y += 1) {
    //     yAxisNumber.push({ yAxis: y })
    //   }
    // } else {
    if (yNumber % (yAxisList / pageLine.duts.row / pageLine.blocks.row) === 0) {
      for (
        let y = 0;
        y <= echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1));
        y += pageLine.yMax / pageLine.duts.row / pageLine.blocks.row / Math.sqrt(Math.max(scaleNumber, 1))
      ) {
        yAxisNumber.push({ yAxis: y });
      }
    }
    // }
    return [...xAxisNumber, ...yAxisNumber];
  };
  const data = getPagesLinePosition(pageLine);
  return data;
};
