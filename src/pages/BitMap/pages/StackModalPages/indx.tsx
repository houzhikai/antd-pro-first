import React, { useEffect, useRef, useState } from 'react';
import { ProviderFunc } from '../../components/containers';
import FullDataPage from '../SingleModePages/FullDataPage';
import MultiEcharts from './MultiEcharts';
// import DetailDataPage from '../SingleModePages/DetailDataPage/DetailDataPage';

const StackModalPages = () => {
  const scrollRef = useRef<any>(null);
  const { width, selectSize, setSelectSize, scaleNumber, configInfo } =
    ProviderFunc();
  const scaleNumberRef = useRef(scaleNumber);

  const [, setIsDragging] = useState(false);
  const dots = configInfo.layoutConfig.dots;
  // 滚动条监听事件
  const scrollableDiv: any = document.getElementById('wholeEcharts');
  const getDetailsViewSize = (isMove: boolean) => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = scrollableDiv;
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

    setSelectSize({
      xtoLeftPercent,
      xScalePercent,
      ytoTopPercent,
      yScalePercent,
    });
  };
  useEffect(() => {
    if (scrollableDiv) {
      getDetailsViewSize(false);
    }
  }, [scaleNumber]);

  useEffect(() => {
    scaleNumberRef.current = scaleNumber;
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
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <MultiEcharts />
        {/* {scaleNumber !== 0.125 ? <DetailDataPage /> : <MultiEcharts />} */}
      </div>
    </div>
  );
};

export default StackModalPages;
