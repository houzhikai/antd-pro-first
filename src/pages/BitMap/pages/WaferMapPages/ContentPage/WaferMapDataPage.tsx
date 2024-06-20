import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getWaferMapOptions } from './components/getWaferMapOptions';
import { getWaferMapRandomData } from '@/pages/BitMap/mockData/getWaferMapRandomData';
import '../../../index.css';

const WaferMapDataPage = () => {
  const wafermapChartRef = useRef<any>(null);
  const { theme, setSingleIsModalOpen, wafermapLayout } = ProviderFunc();
  const [wafermapEchartsSize, setWafermapEchartsSize] = useState({
    width: 0,
    height: 0,
    fullHeight: 0, // 为了计算半圆弧的半径，对其他没有作用
  });

  const options = getWaferMapOptions(
    getWaferMapRandomData(3600, wafermapLayout),
    theme,
    wafermapLayout,
    wafermapEchartsSize,
  );

  // 计算缩略图的高度
  useEffect(() => {
    // 更新视窗大小
    const updateSize = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      );
      // TODO, vh 100vh， 48：上下padding， 51：导航栏， 10：内容区域margin-top
      const width = Math.round(vw - 48 - 80 - 300);
      const height = Math.round(vh - 48 - 51 - 10);
      setWafermapEchartsSize(
        width > height
          ? { width: height, height, fullHeight: height }
          : { width, height: width, fullHeight: height },
      );
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const myWafermapChart = echarts.init(wafermapChartRef.current);

    myWafermapChart.setOption(options);

    myWafermapChart.on('click', (params) => {
      console.log({ params });
      setSingleIsModalOpen(true);
    });

    // 处理窗口大小变化
    const resizeChart = () => myWafermapChart.resize();
    // 监听浏览器视图变化
    window.addEventListener('resize', resizeChart);

    return () => {
      myWafermapChart.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [options]);

  return (
    <div className="wafermap-echarts-page">
      <div
        ref={wafermapChartRef}
        style={{
          width: wafermapEchartsSize.width,
          height: wafermapEchartsSize.height,
          margin: 'auto',
        }}
      />
    </div>
  );
};

export default WaferMapDataPage;
