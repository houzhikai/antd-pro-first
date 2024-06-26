export default (data, scaleNumber, borderColor) => {

  const getPageMarkLinePosition = (scaleNumber) => {
    let data: any = [];
    switch (scaleNumber) {
      case 1:
        data = [
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
        ];
        break;
      case 4:
        data = [
          { xAxis: 0 },
          { xAxis: 64 },
          { xAxis: 64 * 2 },
          { xAxis: 64 * 3 },
          { xAxis: 64 * 4 },
          { xAxis: 64 * 5 },
          { xAxis: 64 * 6 },
          { xAxis: 64 * 7 },
          { yAxis: 0 },
          { yAxis: 511 },
        ];
        break;
      case 16:
        data = [
          { xAxis: 0 },
          { xAxis: 32 },
          { xAxis: 32 * 2 },
          { xAxis: 32 * 3 },
          { xAxis: 32 * 4 },
          { xAxis: 32 * 5 },
          { xAxis: 32 * 6 },
          { xAxis: 32 * 7 },
          { yAxis: 0 },
          { yAxis: 255 },
        ];
        break;
      case 64:
        data = [
          { xAxis: 0 },
          { xAxis: 16 },
          { xAxis: 16 * 2 },
          { xAxis: 16 * 3 },
          { xAxis: 16 * 4 },
          { xAxis: 16 * 5 },
          { xAxis: 16 * 6 },
          { xAxis: 16 * 7 },
          { yAxis: 0 },
          { yAxis: 127 },
        ];
        break;
      case 256:
        data = [
          // { xAxis: 0 },
          { xAxis: 8 },
          { xAxis: 8 * 2 },
          { xAxis: 8 * 3 },
          { xAxis: 8 * 4 },
          { xAxis: 8 * 5 },
          { xAxis: 8 * 6 },
          { xAxis: 8 * 7 },
          // { yAxis: 0 },
          // { yAxis: 63 },
        ];
        break;
      default:
        data = [
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
        ];
    }
    return data;
  };
  const getBlockMarkLinePosition = (scaleNumber) => {
    let data: any = [];
    switch (scaleNumber) {
      case 1:
        data = [{ xAxis: 0 }, { xAxis: 1023 }, { yAxis: 0 }, { yAxis: 1023 }];
        break;
      case 4:
        data = [{ xAxis: 0 }, { xAxis: 511 }, { yAxis: 0 }, { yAxis: 511 }];
        break;
      case 16:
        data = [{ xAxis: 0 }, { xAxis: 255 }, { yAxis: 0 }, { yAxis: 255 }];
        break;
      case 64:
        data = [{ xAxis: 0 }, { xAxis: 127 }, { yAxis: 0 }, { yAxis: 127 }];
        break;
      // case 256:
      //   data = [{ xAxis: 0 }, { xAxis: 63 }, { yAxis: 0 }, { yAxis: 63 }];
      //   break;
      default:
        data = [{ xAxis: 0 }, { xAxis: 1023 }, { yAxis: 0 }, { yAxis: 1023 }];
    }
    return data;
  };

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
      itemStyle: scaleNumber > 1 ? { borderColor: '#ccc', borderWidth: 1, borderType: 'solid' } : {},
      markLine: {
        zlevel: 2,
        label: { show: false },
        symbol: 'none',
        lineStyle:
          scaleNumber === 0.125 || scaleNumber === 256
            ? { width: 0, type: 'line', color: borderColor }
            : { width: 6, type: 'line', color: borderColor }, // 粗线样式
        data: getBlockMarkLinePosition(scaleNumber),
        emphasis: {
          lineStyle:
            scaleNumber === 0.125 || scaleNumber === 256
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
      itemStyle: scaleNumber > 1 ? { borderColor: '#ccc', borderWidth: 1, borderType: 'solid' } : {},
      markLine: {
        zlevel: 2,
        label: { show: false },
        symbol: 'none',
        lineStyle:
          scaleNumber === 0.125
            ? { width: 0, type: 'line', color: borderColor } // 细线样式
            : { width: 2, type: 'line', color: borderColor },
        // 放大倍数不同，markLine 对应的线位置会有偏差，需要对各个放大倍数的markLine做偏移
        data: getPageMarkLinePosition(scaleNumber),
        emphasis: {
          lineStyle:
            scaleNumber === 0.125
              ? { width: 0, type: 'line', color: borderColor }
              : { width: 2, type: 'line', color: borderColor }, // 细线样式
        },
      },
    },
  ];
};
