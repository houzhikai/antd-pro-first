export default (data, detailsEchartsAxisValue, configInfo, scaleNumber, theme) => {
  const borderColor =  theme === 'dark' ? '#35393b' : '#f4f4f4'
  const getSplitLine = (xSplitNumber: number, ySplitNumber) => {
    let xMultiples: { xAxis: number }[] = [];
    let yMultiples: { yAxis: number }[] = [];
    if (xSplitNumber <= 0) {
      return (xMultiples = []);
    }
    if (ySplitNumber <= 0) {
      return (yMultiples = []);
    }
    // 将yMax替代1000，省略一个参数传递
    for (
      let x = xSplitNumber;
      x <= detailsEchartsAxisValue.yMax;
      x += xSplitNumber
    ) {
      xMultiples.push({ xAxis: x });
    }

    // 将yMax替代1000，省略一个参数传递
    for (
      let y = ySplitNumber;
      y <= detailsEchartsAxisValue.xMax;
      y += ySplitNumber
    ) {
      yMultiples.push({ yAxis: y });
    }
    return [...xMultiples, ...yMultiples];
  };

  const markLineStyleList = [
    {
      lineStyle: { width: 6, type: 'line', color: borderColor }, // 粗线样式
      data: getSplitLine(
        detailsEchartsAxisValue.xMax / configInfo.duts.col,
        detailsEchartsAxisValue.yMax / configInfo.duts.row,
      ), // 粗线位置，
    },
    {
      lineStyle: { width: 2, type: 'line', color: borderColor }, // 细线样式, 支持隐藏：width=0时，隐藏细线
      data: getSplitLine(
        detailsEchartsAxisValue.xMax / configInfo.blocks.col,
        detailsEchartsAxisValue.yMax / configInfo.blocks.row,
      ), // 细线位置
    },
  ];
  const newMarkLineStyleList =
    scaleNumber === 0.125 ? markLineStyleList : markLineStyleList.slice(0, 2);

    return [
    {
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
      markLine: {
        zlevel: 2,
        label: { show: false },
        symbol: 'none',
        lineStyle:
          scaleNumber === 0.125 || scaleNumber === 0.2
            ? { width: 0, type: 'line', color: borderColor }
            : { width: 6, type: 'line', color: borderColor}, // 粗线样式
        data: [{ xAxis: 0 }, { xAxis: 1023 }, { yAxis: 0 }, { yAxis: 1023 }],
        emphasis: {
          lineStyle:
            scaleNumber === 0.125 || scaleNumber === 0.2
              ? { width: 0, type: 'line', color: borderColor }
              : { width: 6, type: 'line', color: borderColor }, // 粗线样式
        },
      },
    },
    {
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
      markLine: {
        zlevel: 2,
        label: { show: false },
        symbol: 'none',
        lineStyle:
          scaleNumber === 0.125 || scaleNumber === 0.2
            ? { width: 0, type: 'line', color: borderColor } // 细线样式
            : { width: 2, type: 'line', color: borderColor},
        // 放大倍数不同，markLine 对应的线位置会有偏差，需要对各个放大倍数的markLine做偏移
        data:
          scaleNumber === 64
            ? [
                { xAxis: 0 },
                { xAxis: 128 },
                { xAxis: 128 * 2 },
                { xAxis: 128 * 3 - 1 },
                { xAxis: 128 * 4 - 1 },
                { xAxis: 128 * 5 - 1 },
                { xAxis: 128 * 6 },
                { xAxis: 128 * 7 - 1 },
                { yAxis: 0 },
                { yAxis: 1023 },
              ]
            : scaleNumber === 256
            ? [
                { xAxis: 0 },
                { xAxis: 128 },
                { xAxis: 128 * 2 },
                { xAxis: 128 * 3 - 1 },
                { xAxis: 128 * 4 - 1 },
                { xAxis: 128 * 5 - 1 },
                { xAxis: 128 * 6 - 1 },
                { xAxis: 128 * 7 - 1 },
                { yAxis: 0 },
                { yAxis: 1023 },
              ]
            : [
                { xAxis: 0 },
                { xAxis: 128 },
                { xAxis: 128 * 2 },
                { xAxis: 128 * 3 },
                { xAxis: 128 * 4 },
                { xAxis: 128 * 5 },
                { xAxis: 128 * 6 },
                { xAxis: 128 * 7 },
                { yAxis: 0 },
                { yAxis: 1023 },
              ],
        emphasis: {
          lineStyle:
            scaleNumber !== 0.125 || scaleNumber !== 0.2
              ? { width: 2, type: 'line', color: borderColor } // 细线样式
              : { width: 0, type: 'line', color: borderColor },
        },
      },
    },
  ];
  // return newMarkLineStyleList.map((item) => {
  //   return {
  //     type: 'heatmap',
  //     symbol: 'rect',
  //     symbolSize: 3, // 设置点的大小
  //     data,
  //     zlevel: 1,
  //     large: true, // 启用块状渲染
  //     largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
  //     progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
  //     progressiveThreshold: 5 * 1000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
  //     sampling: 'average',
  //     markLine: {
  //       zlevel: 2,
  //       label: { show: false },
  //       symbol: 'none',
  //       lineStyle: item.lineStyle, // 设置markLine的宽度
  //       data: item.data,
  //       emphasis: { lineStyle: item.lineStyle }, // 设置鼠标悬浮时 markLine 的颜色
  //     },
  //   };
  // });
};
