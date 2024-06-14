import { mockWaferMapData } from '@/pages/BitMap/mockData/mockWaferMapData';
import { takeAxisMiddleValue } from './takeAxisMiddleValue';

export const getWaferMapOptions = (theme, echartsDataColor, wafermapLayout) => {
  const xAxisData = takeAxisMiddleValue(
    wafermapLayout.xMin,
    wafermapLayout.xMax,
  );
  const yAxisData = takeAxisMiddleValue(
    wafermapLayout.yMin,
    wafermapLayout.yMax,
  );

  return {
    renderer: 'canvas',
    animation: false,
    grid: { width: '94%', height: '90%', left: '3%', top: '5%' },
    tooltip: {
      show: false,
      position: 'top',
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      textStyle: { color: theme === 'dark' ? '#938c83' : '#1f1f1f' },
      formatter: (params: { data: number[] }) => {
        // 不展示 markLine.emphasis的值
        if (!Array.isArray(params.data)) {
          return;
        }
        // show tooltip info
        return `XY: ${params.data[0]},${params.data[1]},${params.data[2]}`;
      },
    },
    // graphic: {
    //   type: 'image',
    //   bounding: 'all',
    //   style: {
    //     image:
    //       'https://cdn.pixabay.com/photo/2024/05/23/13/23/moorente-8783210_1280.jpg', // 将这里替换为你的图片URL
    //     repeat: 'no-repeat',
    //     size: 'cover',
    //     originX: 10,
    //     originY: 10,
    //     width: 400,
    //     height: 400,
    //   },
    // },
    xAxis: { type: 'category', data: xAxisData, position: 'top' },
    yAxis: { type: 'category', data: yAxisData },
    visualMap: { show: false, type: 'piecewise', pieces: echartsDataColor }, // heatmap 必须有visualMap属性
    series: [
      {
        type: 'heatmap',
        data: mockWaferMapData,
        zlevel: 1,
        large: true, // 启用块状渲染
        largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
        progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
        progressiveThreshold: 5 * 1000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
        sampling: 'average',
        itemStyle: {
          borderColor: '#ccc',
          borderWidth: 1,
          borderType: 'solid',
        },
      },
    ],
  };
};
