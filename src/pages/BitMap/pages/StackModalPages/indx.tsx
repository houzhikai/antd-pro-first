import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ProviderFunc } from '../../components/containers';
import FullDataPage from '../SingleModePages/FullDataPage';
import MultiEcharts from './MultiEcharts';
import { getBitLength } from './MultiEcharts/components/getBitLength';
import { GetDetailsViewSize } from './MultiEcharts/components/GetDetailsViewSize';
// import DetailDataPage from '../SingleModePages/DetailDataPage/DetailDataPage';

const StackModalPages = () => {
  const viewRef = useRef<any>(null);
  const {
    width,
    selectSize,
    setSelectSize,
    scaleNumber,
    configInfo,
    echartsIndex,
    setEchartsIndex,
  } = ProviderFunc();
  // 每个echarts有多少个 数
  const echartsAxisNumber =
    configInfo.layoutConfig.xMax > 1024 && configInfo.layoutConfig.yMax > 1024
      ? 512
      : 1024;
  // bit 边长
  const bitLength = useMemo(
    () => getBitLength(configInfo, scaleNumber),
    [configInfo, scaleNumber],
  );
  // 每个 echarts 的宽度
  const echartsWidth = useMemo(
    () => (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength,
    [scaleNumber, bitLength],
  );
  // 每个 echarts 的高度
  const echartsHeight = useMemo(
    () => (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength,
    [scaleNumber, bitLength],
  );
  // 是否拖动滚动条
  const [, setIsDragging] = useState(false);

  // 更改 倍数 时，初始化 layout
  useEffect(() => {
    const scrollableDiv: any = document.getElementById('wholeEcharts');
    if (scrollableDiv) {
      // getDetailsViewSize(false);
      GetDetailsViewSize(
        false,
        configInfo,
        scaleNumber,
        setSelectSize,
        setEchartsIndex,
      );
    }
  }, [scaleNumber, viewRef.current]);

  // 滚轮触发事件
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log(111, scaleNumber);
        // getDetailsViewSize(false);
        GetDetailsViewSize(
          true,
          configInfo,
          scaleNumber,
          setSelectSize,
          setEchartsIndex,
        );
      }, 1 * 500);
    };
    viewRef.current.addEventListener('scroll', handleScroll);
    // 清除事件监听器
    return () => {
      viewRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [scaleNumber]);

  // 移动放大镜时滚动条到指定位置
  useEffect(() => {
    const scrollToPosition = () => {
      const scrollElement = viewRef.current;
      const scrollWidth = scrollElement.scrollWidth;
      const scrollHeight = scrollElement.scrollHeight;
      // const clientWidth = scrollElement.clientWidth;
      // const clientHeight = scrollElement.clientHeight;
      const scrollToX = (scrollWidth * selectSize.xtoLeftPercent) / 100;
      const scrollToY = (scrollHeight * selectSize.ytoTopPercent) / 100;

      scrollElement.scrollTo({
        top: scrollToY,
        left: scrollToX,
        behavior: 'smooth',
      });
    };

    scrollToPosition();
  }, [selectSize]);
  const handleMouseDown = () => {
    if (scaleNumber !== 256) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (scaleNumber !== 256) {
      setIsDragging(false);
      GetDetailsViewSize(
        true,
        configInfo,
        scaleNumber,
        setSelectSize,
        setEchartsIndex,
      );
    }
  };

  return (
    <div className="bit-map-right-page">
      <FullDataPage />
      <div
        ref={viewRef}
        id="wholeEcharts"
        style={{
          flexGrow: 1,
          // border: '1px solid #7a7164',
          width: `calc(100vw - 20px - 150px - ${width}px)`,
          height: 'calc(100vh - 50px - 20px)',
          overflow: 'auto',
          marginLeft: 6,
          willChange: 'transform' /* 提示浏览器可能会发生滚动 */,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {echartsIndex && (
          <MultiEcharts
            echartsAxisNumber={echartsAxisNumber}
            echartsIndex={echartsIndex}
            echartsWidth={echartsWidth}
            echartsHeight={echartsHeight}
          />
        )}
      </div>
    </div>
  );
};

export default StackModalPages;
