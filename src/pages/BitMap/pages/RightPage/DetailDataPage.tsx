import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../components/containers';

const DetailDataPage = () => {
  const chartRef = useRef<any>(null);
  const { detailDataPageWidth, options } = ProviderFunc();

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    myChart.setOption(options, true);

    // 处理窗口大小变化
    const resizeChart = () => {
      myChart.resize();
    };

    // 监听浏览器视图变化
    window.addEventListener('resize', resizeChart);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [detailDataPageWidth]);

  return <div ref={chartRef} style={{ width: '100%', height: '98%' }} />;
};

export default DetailDataPage;
