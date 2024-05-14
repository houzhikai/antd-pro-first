import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getFullEchartsOptions } from './components/getFullEchartsOptions';
import MagnifyingGlass from './MagnifyingGlass';
import '../../../index.css';

const EchartsFullPage = () => {
  const fullEChartRef = useRef<any>(null);
  const { detailDataPageWidth, theme, echartsDataColor } = ProviderFunc();

  useEffect(() => {
    const options = getFullEchartsOptions(echartsDataColor);
    const myChart = echarts.init(fullEChartRef.current);
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
  }, [detailDataPageWidth, theme, echartsDataColor]);

  return (
    <div className="echarts-full-page">
      <div ref={fullEChartRef} style={{ width: '100%', height: '98%' }} />
      {/* 放大镜 */}
      <MagnifyingGlass />
    </div>
  );
};

export default EchartsFullPage;
