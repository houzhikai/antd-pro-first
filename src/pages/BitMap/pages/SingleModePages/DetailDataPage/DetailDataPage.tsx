import React, { useLayoutEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getScatterOptions } from './components/getScatterOptions';

const DetailDataPage = () => {
  const chartRef = useRef<any>(null);
  const {
    singleColor,
    theme,
    baseConversion,
    configInfo,
    singleModeData,
    scaleNumber,
    detailsValues,
    setDetailsValues,
    isStackModalOpen,
    echartsDataColor,
  } = ProviderFunc();

  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const options = getScatterOptions(
    theme,
    singleModeData.data,
    singleColor,
    {
      xMin: 0,
      xMax: configInfo.layoutConfig.xMax,
      yMin: 0,
      yMax: configInfo.layoutConfig.yMax,
    },
    // detailsEchartsAxisValue,
    baseConversion,
    configInfo,
    scaleNumber,
    detailsValues,
    isStackModalOpen,
    echartsDataColor,
    chartSize,
  );
  console.log({ configInfo });

  useLayoutEffect(() => {
    if (singleModeData.data.length > 0) {
      setTimeout(() => {
        const myChart = echarts.init(chartRef.current);

        myChart.setOption(options, true);
        myChart.on(
          'dataZoom',
          echarts.throttle(() => {
            const newOptions: any = myChart.getOption();
            const xStart = Math.round(newOptions.dataZoom[0].start);
            const xEnd = Math.round(newOptions.dataZoom[0].end);
            const yStart = Math.round(newOptions.dataZoom[1].start);
            const yEnd = Math.round(newOptions.dataZoom[1].end);
            setDetailsValues({ xStart, xEnd, yStart, yEnd });
          }, 0),
        );

        // 监听容器大小变化
        const resizeObserver = new ResizeObserver(() => {
          const width = chartRef.current.clientWidth;
          const height = chartRef.current.clientHeight;
          // 仅在宽度或高度发生变化时更新状态
          if (chartSize.width !== width || chartSize.height !== height) {
            setChartSize({ width, height });
            myChart.resize();
          }
        });
        // 观察图表容器
        resizeObserver.observe(chartRef.current);

        return () => {
          myChart.dispose();
          myChart.off('dataZoom');
          resizeObserver.disconnect();
        };
      }, 20);
    }
  }, [options]);

  return (
    <>
      {singleModeData.data.length > 0 && (
        <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
      )}
    </>
  );
};

export default DetailDataPage;
