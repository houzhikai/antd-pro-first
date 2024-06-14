import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getWaferMapOptions } from './components/getWaferMapOptions';
import '../../../index.css';

const WaferMapDataPage = () => {
  const wafermapChartRef = useRef<any>(null);
  const { theme, echartsDataColor, setSingleIsModalOpen, wafermapLayout } =
    ProviderFunc();
  const [wafermapEchartsHeight, setWafermapEchartsHeight] = useState(0);

  const options = getWaferMapOptions(theme, echartsDataColor, wafermapLayout);

  // 计算缩略图的高度
  useEffect(() => {
    // 更新视窗大小
    const updateSize = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      // TODO, vh 100vh， 48：上下padding， 51：导航栏， 10：内容区域margin-top
      setWafermapEchartsHeight(Math.round(vh - 48 - 51 - 10));
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
          width: wafermapEchartsHeight,
          height: wafermapEchartsHeight,
          margin: 'auto',
        }}
      />
    </div>
  );
};

export default WaferMapDataPage;
