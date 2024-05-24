import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getFullEchartsOptions } from './components/getFullEchartsOptions';
import MagnifyingGlass from './MagnifyingGlass';
import { getFullWidthHeight } from '@/pages/BitMap/components/getFullWidthHeight';
import '../../../index.css';

const EchartsFullPage = () => {
  const fullEChartRef = useRef<any>(null);
  const {
    detailDataPageWidth,
    theme,
    echartsDataColor,
    configInfo,
    width,
    baseConversion,
    data,
  } = ProviderFunc();
  const [height, setHeight] = useState(width);

  // 计算缩略图的高度
  useEffect(() => {
    function updateSize() {
      let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      // vh 100vh， 48：上下padding， 81：导航栏， 20：内容区域margin-top
      setHeight(Math.round(((vh - 48 - 81 - 20) * 40) / 100));
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const options = getFullEchartsOptions(
      theme,
      data,
      echartsDataColor,
      {
        xMin: 0,
        xMax: configInfo.layoutConfig.xMax,
        yMin: 0,
        yMax: configInfo.layoutConfig.yMax,
      },
      baseConversion,
      configInfo.layoutConfig.dots,
    );
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
  }, [detailDataPageWidth, theme, echartsDataColor, data]);

  const FullWidthHeight = getFullWidthHeight(
    configInfo.layoutConfig,
    width,
    height,
  );

  return (
    <>
      <div style={{ margin: '0', fontSize: 18 }}>Overview</div>
      <div className="echarts-full-page">
        <div
          ref={fullEChartRef}
          // 缩略图的宽高通过计算得出，宽度初始值为400px定宽
          style={{
            width: FullWidthHeight.width,
            height: FullWidthHeight.height,
          }}
        />
        {/* 放大镜 */}
        {data.length > 0 && <MagnifyingGlass height={height} />}
      </div>
    </>
  );
};

export default EchartsFullPage;
