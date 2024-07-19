import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ProviderFunc } from '../../components/containers';
import FullDataPage from '../SingleModePages/FullDataPage';
import MultiEcharts from './MultiEcharts';
import { getBitLength } from './MultiEcharts/components/getBitLength';
// import DetailDataPage from '../SingleModePages/DetailDataPage/DetailDataPage';

const StackModalPages = () => {
  const scrollRef = useRef<any>(null);
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
  const echartsAxisNumber = 1024;
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
  const [isDragging, setIsDragging] = useState(false);
  // 原点位置
  const dots = configInfo.layoutConfig.dots;
  // 移动滚动条时的方法
  const getDetailsViewSize = useCallback(
    (isMove: boolean) => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = scrollRef.current;
      // 拖动滚动条时，计算当前距离占的百分比
      const xDefaultPosition = isMove
        ? scrollLeft
        : dots === 'top_right' || dots === 'bottom_right'
        ? scrollWidth - clientWidth
        : 0;
      const yDefaultPosition = isMove
        ? scrollTop
        : dots === 'bottom_left' || dots === 'bottom_right'
        ? scrollHeight - clientHeight
        : 0;
      const xtoLeftPercent = Number(
        ((xDefaultPosition / scrollWidth) * 100).toFixed(0),
      );
      const xScalePercent = Number(
        ((clientWidth / scrollWidth) * 100).toFixed(0),
      );
      const ytoTopPercent = Number(
        ((yDefaultPosition / scrollHeight) * 100).toFixed(0),
      );
      const yScalePercent = Number(
        ((clientHeight / scrollHeight) * 100).toFixed(0),
      );
      const xStart = Math.floor(
        Number((scrollWidth * (xtoLeftPercent / 100)).toFixed(0)) /
          echartsWidth,
      );
      const xEnd = Math.floor(
        (Number((scrollWidth * (xtoLeftPercent / 100)).toFixed(0)) +
          clientWidth) /
          echartsWidth,
      );
      const yStart = Math.floor(
        Number((scrollHeight * (ytoTopPercent / 100)).toFixed(0)) /
          echartsHeight,
      );
      const yEnd = Math.floor(
        Number(
          (scrollHeight * (ytoTopPercent / 100)).toFixed(0) + clientHeight,
        ) / echartsHeight,
      );

      setSelectSize({
        xtoLeftPercent,
        xScalePercent,
        ytoTopPercent,
        yScalePercent,
      });
      setEchartsIndex({
        xStart,
        xEnd,
        yStart,
        yEnd,
      });
    },
    [scaleNumber, isDragging],
  );
  useEffect(() => {
    const scrollableDiv: any = document.getElementById('wholeEcharts');
    if (scrollableDiv) {
      getDetailsViewSize(false);
    }
  }, [scaleNumber]);

  // 移动放大镜时滚动条到指定位置
  useEffect(() => {
    const scrollToPosition = () => {
      const scrollElement = scrollRef.current;
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
      getDetailsViewSize(true);
    }
  };

  return (
    <div className="bit-map-right-page">
      <FullDataPage />
      <div
        ref={scrollRef}
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
