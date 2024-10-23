import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getFullEchartsOptions } from './components/getFullEchartsOptions';
import { getGlassPosition } from '../../../components/getGlassPosition';
import { getEchartsAxisNumber } from '../../StackModalPages/MultiEcharts/components/getEchartsAxisNumber';
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
    setEchartsIndex,
    setIsClick,
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
  const glassWidth = (fullEchartsSize.width * selectSize.xScalePercent) / 100;
  // 放大镜高度
  const glassHeight = (fullEchartsSize.height * selectSize.yScalePercent) / 100;

  // 放大镜初始位置, dots: TopLeft, TopRight, BottomLeft, BottomRight
  const defaultGlassPosition = getGlassPosition(
    configInfo.layoutConfig.dots,
    fullEchartsSize.width,
    fullEchartsSize.height,
    glassWidth,
    glassHeight
  );

  const [pos, setPos] = useState(defaultGlassPosition);

  const echartsAxisNumber = getEchartsAxisNumber(configInfo, scaleNumber);
  useEffect(() => {
    setPos(defaultGlassPosition);
  }, [selectSize.xScalePercent, selectSize.yScalePercent]);

  // 根据详图echarts位置计算放大镜位置
  useLayoutEffect(() => {
    const x = (fullEchartsSize.width * selectSize.xtoLeftPercent) / 100;
    const y = (height * selectSize.ytoTopPercent) / 100;

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
    echartsDataColor
  );
  // 缩略图echarts数据展示
  useEffect(() => {
    if (singleModeData.data.length > 0) {
      setTimeout(() => {
        const myChart = echarts.init(fullEChartRef.current);

        myChart.setOption(options, true);
        // 处理窗口大小变化
        // const resizeChart = () => myChart.resize();
        // // 监听浏览器视图变化, cancel resize adaptive
        // window.addEventListener('resize', resizeChart);

        return () => {
          myChart.dispose();
          // window.removeEventListener('resize', resizeChart);
        };
      }, 20);
    }
  }, [options]);

  const handleClick = (e) => {
    setIsClick(true);

    // x y 相对于父节点的位置
    const parentRect = fullEChartRef.current.getBoundingClientRect();
    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;
    const posX =
      x - Math.floor(glassWidth / 2) <= 0
        ? 0
        : Math.round(x + glassWidth / 2) >= fullEchartsSize.width
          ? fullEchartsSize.width - glassWidth
          : x - Math.round(glassWidth / 2);
    const posY =
      y - Math.floor(glassHeight / 2) <= 0
        ? 0
        : Math.round(y + glassHeight / 2) >= height
          ? height - glassHeight
          : y - Math.floor(glassHeight / 2);

    if (posX <= fullEchartsSize.width - glassWidth / 2 && posY <= fullEchartsSize.height - glassHeight / 2) {
      setPos({ x: posX, y: posY, glassWidth, glassHeight });

      setSelectSize({
        xtoLeftPercent: Math.floor((posX / fullEchartsSize.width) * 100),
        xScalePercent: selectSize.xScalePercent,
        ytoTopPercent: Math.round((posY / height) * 100),
        yScalePercent: selectSize.yScalePercent,
      });
      const xStart = Math.floor(posX / (fullEchartsSize.width / (xMax / echartsAxisNumber)));
      const xEnd = Math.round((posX + glassWidth) / (fullEchartsSize.width / (xMax / echartsAxisNumber)));
      const yStart = Math.floor(posY / (height / (yMax / echartsAxisNumber)));
      const yEnd = Math.round((posY + glassHeight) / (height / (yMax / echartsAxisNumber)));
      const xAxisList = Math.max(configInfo.layoutConfig.xMax / echartsAxisNumber, 1);
      const yAxisList = Math.max(configInfo.layoutConfig.yMax / echartsAxisNumber, 1);
      const isRenderAllEcharts = scaleNumber > 1;
      setEchartsIndex({
        xStart: isRenderAllEcharts ? 0 : xStart,
        xEnd: isRenderAllEcharts ? xAxisList : xEnd,
        yStart: isRenderAllEcharts ? 0 : yStart,
        yEnd: isRenderAllEcharts ? yAxisList : yEnd,
      });
      setTimeout(() => {
        setIsClick(false);
      }, 20);
    }
  };

  return (
    <>
      <div style={{ margin: '5px 0', fontSize: 18 }}>Overview</div>
      <div className='echarts-full-page'>
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
            className='echarts-full-page-magnifying-glass'
          />
        )}
      </div>
    </>
  );
};

export default EchartsFullPage;
