import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getFullEchartsOptions } from './components/getFullEchartsOptions';
import { getGlassPosition } from '../../../components/getGlassPosition';
import '../../../index.css';

const EchartsFullPage = () => {
  const fullEChartRef = useRef<any>(null);
  const glassRef = useRef<any>(null);
  const {
    theme,
    singleColor,
    configInfo,
    width,
    baseConversion,
    scaleNumber,
    selectSize,
    setSelectSize,
    singleModeData,
    isStackModalOpen,
    echartsDataColor,
  } = ProviderFunc();
  const xMax = configInfo.layoutConfig.xMax;
  const yMax = configInfo.layoutConfig.yMax;
  const fullEchartsSize =
    xMax > yMax
      ? { width, height: width / Number((xMax / yMax).toFixed(0)) }
      : { width: width / Number((yMax / xMax).toFixed(0)), height: width };
  // 缩略图高度
  const height = fullEchartsSize.height;
  // 放大镜宽度
  const glassWidth = (width * selectSize.xScalePercent) / 100;
  // 放大镜高度
  const glassHeight = (height * selectSize.yScalePercent) / 100;
  // 放大镜初始位置, dots: TopLeft, TopRight, BottomLeft, BottomRight
  const defaultGlassPosition = getGlassPosition(
    configInfo.layoutConfig.dots,
    width,
    height,
    glassWidth,
    glassHeight,
  );
  // 放大镜位置，x/y: 放大镜左上角位置
  const [pos, setPos] = useState(defaultGlassPosition);

  useEffect(() => {
    setPos(defaultGlassPosition);
  }, [selectSize.xScalePercent, selectSize.yScalePercent]);

  // 根据详图echarts位置计算放大镜位置
  useLayoutEffect(() => {
    let x = (width * selectSize.xtoLeftPercent) / 100;
    let y = (height * selectSize.ytoTopPercent) / 100;

    setPos({ x, y, glassWidth, glassHeight });
  }, [selectSize]);

  const options = getFullEchartsOptions(
    theme,
    singleModeData.data,
    singleColor,
    {
      xMin: 0,
      xMax: configInfo.layoutConfig.xMax,
      yMin: 0,
      yMax: configInfo.layoutConfig.yMax,
    },
    baseConversion,
    configInfo.layoutConfig.dots,
    scaleNumber,
    isStackModalOpen,
    echartsDataColor,
  );
  // 缩略图echarts数据展示
  useEffect(() => {
    if (singleModeData.data.length > 0) {
      setTimeout(() => {
        const myChart = echarts.init(fullEChartRef.current);

        myChart.setOption(options, true);
        // 处理窗口大小变化
        const resizeChart = () => myChart.resize();
        // 监听浏览器视图变化
        window.addEventListener('resize', resizeChart);

        return () => {
          myChart.dispose();
          window.removeEventListener('resize', resizeChart);
        };
      }, 20);
    }
  }, [options]);

  // 改变倍数时触发
  useLayoutEffect(() => {
    const posX =
      pos.x + Math.round(pos.glassWidth / 2) - Math.round(glassWidth / 2);
    const posY =
      pos.y + Math.round(pos.glassHeight / 2) - Math.round(glassHeight / 2);
    const x =
      posX >= Math.round(width - glassWidth)
        ? Math.round(width - glassWidth)
        : posX > 0
        ? posX
        : 0;
    const y =
      posY >= Math.round(height - glassHeight)
        ? Math.round(height - glassHeight)
        : posY > 0
        ? posY
        : 0;
    setPos({ x, y, glassWidth, glassHeight });
  }, [scaleNumber]);

  const handleClick = (e) => {
    // x y 相对于父节点的位置
    const parentRect = fullEChartRef.current.getBoundingClientRect();
    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;
    const posX =
      x - Math.floor(glassWidth / 2) <= 0
        ? 0
        : Math.round(x + glassWidth / 2) >= width
        ? width - glassWidth
        : x - Math.round(glassWidth / 2);
    const posY =
      y - Math.floor(glassHeight / 2) <= 0
        ? 0
        : Math.round(y + glassHeight / 2) >= height
        ? height - glassHeight
        : y - Math.floor(glassHeight / 2);
    setPos({ x: posX, y: posY, glassWidth, glassHeight });
    setSelectSize({
      xtoLeftPercent: Math.floor((posX / width) * 100),
      xScalePercent: selectSize.xScalePercent,
      ytoTopPercent: Math.floor((posY / height) * 100),
      yScalePercent: selectSize.yScalePercent,
    });
  };

  return (
    <>
      <div style={{ margin: '5px 0', fontSize: 18 }}>Overview</div>
      <div className="echarts-full-page">
        <div
          ref={fullEChartRef}
          // 缩略图的宽高通过计算得出，宽度初始值为300px定宽
          style={{ height: width, border: '1px solid #34393b' }}
          onClick={handleClick}
        />
        {/* 放大镜 */}
        {singleModeData.data.length > 0 && (
          <div
            ref={glassRef}
            style={{
              width: Math.round(glassWidth),
              height: Math.round(glassHeight),
              left: `${pos.x}px`,
              top: `${pos.y + 1}px`, // 1 px ,because fullEcharts add 1px border
            }}
            className="echarts-full-page-magnifying-glass"
          />
        )}
      </div>
    </>
  );
};

export default EchartsFullPage;
