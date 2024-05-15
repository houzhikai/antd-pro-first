import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { getOptions } from './components/getOptions';
import { ProviderFunc } from '../../../components/containers';

const DetailDataPage = () => {
  const chartRef = useRef<any>(null);
  const {
    detailDataPageWidth,
    theme,
    jumpAddress,
    echartsDataColor,
    detailsEchartsAxisValue,
  } = ProviderFunc();

  const options = getOptions(
    theme,
    jumpAddress,
    echartsDataColor,
    detailsEchartsAxisValue,
  );

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    myChart.setOption(options, true);

    // 处理窗口大小变化
    const resizeChart = () => myChart.resize();
    // 监听浏览器视图变化
    window.addEventListener('resize', resizeChart);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [
    detailDataPageWidth,
    theme,
    jumpAddress,
    echartsDataColor,
    detailsEchartsAxisValue,
  ]);

  return <div ref={chartRef} style={{ width: '100%', height: '98%' }} />;
};

export default DetailDataPage;
