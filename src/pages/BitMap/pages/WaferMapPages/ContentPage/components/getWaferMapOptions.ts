import { getGraphicPosition } from '@/pages/BitMap/components/getGraphicPosition';
import { getAxisDataList } from './takeAxisMiddleValue';

export const getWaferMapOptions = (
  data,
  theme,
  wafermapLayout,
  wafermapEchartsSize,
) => {
  const { xAxisData, yAxisData } = getAxisDataList(wafermapLayout);

  return {
    renderer: 'canvas',
    backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5', // #fff
    animation: false,
    grid: { width: '94%', height: '94%', left: '5%', top: '5%' },
    tooltip: {
      show: true,
      position: 'top',
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      textStyle: { color: theme === 'dark' ? '#938c83' : '#1f1f1f' },
      formatter: (params: { data: number[] }) => {
        // 不展示 markLine.emphasis的值
        if (!Array.isArray(params.data)) {
          return;
        }
        return `XY: ${params.data[0]}，${params.data[1]}，${params.data[2]}`;
      },
    },
    graphic: getGraphicPosition(wafermapLayout.gap, wafermapEchartsSize),
    xAxis: {
      type: 'category',
      data: xAxisData,
      position: 'top',
      inverse:
        wafermapLayout.dots === 'TopRight' ||
        wafermapLayout.dots === 'BottomRight',
    },
    yAxis: {
      type: 'category',
      data: yAxisData,
      inverse:
        wafermapLayout.dots === 'TopLeft' || wafermapLayout.dots === 'TopRight',
    },
    // heatmap 必须有visualMap属性
    visualMap: {
      show: false,
      type: 'piecewise',
      /**
       * gt: greater than， lt: less than
       * {gt: 1500},                                              ==> (1500, Infinity]
       * {gt: 900, lte: 1500}                                     ==> (900, 1500]
       * {gt: 10, lte: 200, label: '10 到 200（自定义label）'},    ==> (10, 200]
       * {value: 123, label: '123（自定义特殊颜色', color: 'grey'} ==> [123, 123]
       * {lt: 5}                                                  ==> (-Infinity, 5)
       */
      pieces: [
        { value: 0, color: 'green' },
        { value: 1, color: '#ff0200' },
        { gt: 1, color: '#f60' },
      ],
    },
    series: [
      {
        type: 'heatmap',
        data,
        large: true, // 启用块状渲染
        largeThreshold: 50 * 10000, // 数据量超过阈值时启用块状渲染
        progressive: 0, // 5000, //渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
        progressiveThreshold: 5 * 1000, //启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
        sampling: 'average',
        // itemStyle: {
        //   borderColor: '#ccc',
        //   borderWidth: 1,
        //   borderType: 'solid',
        // },
      },
    ],
  };
};
