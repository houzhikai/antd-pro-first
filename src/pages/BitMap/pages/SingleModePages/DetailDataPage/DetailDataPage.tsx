import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getScatterOptions } from './components/getScatterOptions';

const DetailDataPage = () => {
  const chartRef = useRef<any>(null);
  const {
    echartsDataColor,
    theme,
    baseConversion,
    configInfo,
    data,
    scaleNumber,
    detailsValues,
    setDetailsValues,
  } = ProviderFunc();
  const options = getScatterOptions(
    theme,
    data,
    echartsDataColor,
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
  );
  useEffect(() => {
    if (data.length > 0) {
      const myChart = echarts.init(chartRef.current);

      myChart.setOption(options, true);
      myChart.on('dataZoom', () => {
        const newOptions: any = myChart.getOption();
        const xStart = Math.round(newOptions.dataZoom[0].start);
        const xEnd = Math.round(newOptions.dataZoom[0].end);
        const yStart = Math.round(newOptions.dataZoom[1].start);
        const yEnd = Math.round(newOptions.dataZoom[1].end);
        setDetailsValues({ xStart, xEnd, yStart, yEnd });
      });

      // 处理窗口大小变化
      const resizeChart = () => myChart.resize();
      // 监听浏览器视图变化
      window.addEventListener('resize', resizeChart);

      return () => {
        myChart.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, [options]);

  return (
    <>
      {data.length > 0 && (
        <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
      )}
    </>
  );
};

export default DetailDataPage;
