import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getFullEchartsOptions } from './components/getFullEchartsOptions';
import { getRatioNumber } from '../../../components/getRatioNumber';
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
    data,
    scaleNumber,
    detailsValues,
    setDetailsValues,
  } = ProviderFunc();
  // 缩略图高度
  const [height, setHeight] = useState(width);
  // 占用详图可视区域
  const ratioNumber = getRatioNumber(scaleNumber);
  // 放大镜宽度
  const glassWidth = width * ratioNumber;
  // 放大镜高度
  const glassHeight = height * ratioNumber;
  // 放大镜初始位置, dots: TopLeft, TopRight, BottomLeft, BottomRight
  const defaultGlassPosition = getGlassPosition(
    configInfo.layoutConfig.dots,
    width,
    height,
    glassWidth,
    glassHeight,
  );
  // 放大镜位置，x/y: 放大镜左上角位置
  const [pos, setPos] = useState({
    x: defaultGlassPosition.x,
    y: defaultGlassPosition.y,
    glassWidth,
    glassHeight,
  });
  // 圆点位置
  const dots = configInfo.layoutConfig.dots;
  // 计算缩略图的高度
  useEffect(() => {
    const updateSize = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      // vh 100vh， 48：上下padding， 81：导航栏， 20：内容区域margin-top
      setHeight(Math.round(((vh - 48 - 81 - 20) * 40) / 100));
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  // 根据详图echarts位置计算放大镜位置
  useEffect(() => {
    let x = defaultGlassPosition.x;
    let y = defaultGlassPosition.y;
    if (dots === 'TopLeft') {
      x = Math.round((width * detailsValues.xStart) / 100);
      y = Math.round((height * detailsValues.yStart) / 100);
    } else if (dots === 'TopRight') {
      x = Math.round(width - (width * detailsValues.xEnd) / 100);
      y = Math.round((height * detailsValues.yStart) / 100);
    } else if (dots === 'BottomLeft') {
      x = Math.round((width * detailsValues.xStart) / 100);
      y = Math.round(height - (height * detailsValues.yEnd) / 100);
    } else if (dots === 'BottomRight') {
      x = Math.round(width - (width * detailsValues.xEnd) / 100);
      y = Math.round(height - (height * detailsValues.yEnd) / 100);
    }
    setPos({ x, y, glassWidth, glassHeight });
  }, [detailsValues]);
  const options = getFullEchartsOptions(
    theme,
    data,
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
  );
  // 缩略图echarts数据展示
  useEffect(() => {
    if (data.length > 0) {
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
    }
  }, [options]);
  const getDetailsValues = (x, y) => {
    let newDetailsValues;
    if (dots === 'TopLeft') {
      newDetailsValues = {
        xStart: Math.round((x / width) * 100),
        xEnd: Math.round(((x + glassWidth) / width) * 100),
        yStart: Math.round((y / height) * 100),
        yEnd: Math.round(((y + glassHeight) / height) * 100),
      };
    } else if (dots === 'TopRight') {
      newDetailsValues = {
        xEnd: 100 - Math.round((x / width) * 100),
        xStart: 100 - Math.round(((x + glassWidth) / width) * 100),
        yStart: Math.round((y / height) * 100),
        yEnd: Math.round(((y + glassHeight) / height) * 100),
      };
    } else if (dots === 'BottomLeft') {
      newDetailsValues = {
        xStart: Math.round((x / width) * 100),
        xEnd: Math.round(((x + glassWidth) / width) * 100),
        yStart: 100 - Math.round(((y + glassHeight) / height) * 100),
        yEnd: 100 - Math.round((y / height) * 100),
      };
    } else if (dots === 'BottomRight') {
      newDetailsValues = {
        xEnd: 100 - Math.round((x / width) * 100),
        xStart: 100 - Math.round(((x + glassWidth) / width) * 100),
        yEnd: 100 - Math.round((y / height) * 100),
        yStart: 100 - Math.round(((y + glassHeight) / height) * 100),
      };
    }
    return newDetailsValues;
  };
  // 改变倍数时触发
  useEffect(() => {
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
    setDetailsValues(getDetailsValues(x, y));
  }, [scaleNumber]);

  const handleClick = (e) => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    );
    const infoHeight =
      vh - 55 - 24 - 34 - height - Math.round(((vh - 55 - 24) * 6) / 100);
    const x = e.clientX - e.target.offsetLeft - 16;
    const y = e.pageY - 55 - 24 - infoHeight - 34;

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
    setDetailsValues(getDetailsValues(posX, posY));
  };

  return (
    <>
      <div style={{ margin: '5px 0', fontSize: 18 }}>Overview</div>
      <div className="echarts-full-page">
        <div
          ref={fullEChartRef}
          // 缩略图的宽高通过计算得出，宽度初始值为300px定宽
          style={{ height, border: '1px solid #34393b' }}
          onClick={handleClick}
        />
        {/* 放大镜 */}
        {data.length > 0 && (
          <div
            ref={glassRef}
            style={{
              width: glassWidth,
              height: glassHeight,
              left: `${pos.x + 1}px`,
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
