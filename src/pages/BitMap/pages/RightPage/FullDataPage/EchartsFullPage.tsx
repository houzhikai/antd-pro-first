import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getFullEchartsOptions } from './components/getFullEchartsOptions';
import MagnifyingGlass from './MagnifyingGlass';
import { getFullWidthHeight } from '../../../components/getFullWidthHeight';
import '../../../index.css';

const EchartsFullPage = () => {
  const fullEChartRef = useRef(null);
  const { detailDataPageWidth, theme, echartsDataColor, configInfo, width, baseConversion, data, scaleNumber } =
    ProviderFunc();
  const [height, setHeight] = useState(width);

  // 计算缩略图的高度
  useEffect(() => {
    /**
     * 更新视窗大小
     */
    function updateSize() {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      // vh 100vh， 48：上下padding， 81：导航栏， 20：内容区域margin-top
      setHeight(Math.round(((vh - 48 - 81 - 20) * 40) / 100));
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const myChart = echarts.init(fullEChartRef.current);
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
        scaleNumber
      );
      myChart.setOption(options, true);
      // 处理窗口大小变化
      const resizeChart = () => myChart.resize();
      // 监听浏览器视图变化
      window.addEventListener('resize', resizeChart);

      return () => {
        myChart.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, [echartsDataColor, baseConversion, scaleNumber, detailDataPageWidth, theme, , data, fullEChartRef.current]);

  const FullWidthHeight = getFullWidthHeight(configInfo.layoutConfig, width, height);

  return (
    <>
      <div style={{ margin: '5px 0', fontSize: 18 }}>Overview</div>
      <div className='echarts-full-page'>
        <div
          ref={fullEChartRef}
          // 缩略图的宽高通过计算得出，宽度初始值为400px定宽
          style={{
            width,
            height,
            // width: FullWidthHeight.width,
            // height: FullWidthHeight.height,
            border: '1px solid #34393b',
          }}
        />
        {/* 放大镜 */}
        {data.length > 0 && <MagnifyingGlass height={height} />}
      </div>
    </>
  );
};

export default EchartsFullPage;
