import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ProviderFunc } from '../../components/containers';
import FullDataPage from '../SingleModePages/FullDataPage';
import MultiEcharts from './MultiEcharts';
import { getBitLength } from './MultiEcharts/components/getBitLength';
import { GetDetailsViewSize } from './MultiEcharts/components/GetDetailsViewSize';
import { getEchartsAxisNumber } from './MultiEcharts/components/getEchartsAxisNumber';
// import DetailDataPage from '../SingleModePages/DetailDataPage/DetailDataPage';

const StackModalPages = () => {
  const viewRef = useRef<any>(null);
  const { width, selectSize, setSelectSize, scaleNumber, configInfo, echartsIndex, setEchartsIndex, isClick } =
    ProviderFunc();
  // setting echarts number
  // const echartsAxisNumber = configInfo.layoutConfig.xMax > 1024 && configInfo.layoutConfig.yMax > 1024 ? 512 : 1024;
  /**
   * 1. xmax & ymax < 1024, return 1024
   * 2. xmax <= 1024, ymax > 1024, return xmax
   * 3. xmax > 1024, ymax <= 1024, return ymax
   * 4. xmax & ymax > 1024, return 512
   */

  const echartsAxisNumber = getEchartsAxisNumber(configInfo, scaleNumber);

  // setting bit length
  const bitLength = useMemo(() => getBitLength(scaleNumber), [configInfo, scaleNumber]);
  // setting echarts width
  const echartsWidth = useMemo(
    () => (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength,
    [scaleNumber, bitLength, configInfo]
  );
  // setting echarts height
  const echartsHeight = useMemo(
    () => (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength,
    [scaleNumber, bitLength, configInfo]
  );

  const [isDragging, setIsDragging] = useState(false);

  // ¸deffrent scale view details
  useEffect(() => {
    const scrollableDiv: any = document.getElementById('wholeEcharts');
    if (scrollableDiv) {
      // getDetailsViewSize(false);
      GetDetailsViewSize(false, configInfo, scaleNumber, setSelectSize, setEchartsIndex);
    }
  }, [scaleNumber, viewRef.current]);

  // scroll even
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        // getDetailsViewSize(false);
        GetDetailsViewSize(true, configInfo, scaleNumber, setSelectSize, setEchartsIndex);
      }, 1 * 20);
    };
    if (!isClick && !isDragging && viewRef.current) {
      // setTimeout(() => {
      viewRef.current.addEventListener('scroll', handleScroll);
      // }, 20);
    }
    // clear scroll event listener
    return () => {
      if (!isClick && !isDragging && viewRef.current) {
        viewRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scaleNumber, isClick, isDragging]);

  // move glass div, jump specify position
  const scrollToPosition = () => {
    const scrollElement = viewRef.current;
    const scrollWidth = scrollElement.scrollWidth;
    const scrollHeight = scrollElement.scrollHeight;
    // const clientWidth = scrollElement.clientWidth;
    // const clientHeight = scrollElement.clientHeight;
    const scrollToX = Math.floor((scrollWidth * selectSize.xtoLeftPercent) / 100);
    const scrollToY = Math.floor((scrollHeight * selectSize.ytoTopPercent) / 100);
    scrollElement.scrollTo({
      top: scrollToY,
      left: scrollToX,
      // behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isClick) {
      scrollToPosition();
    }
  }, [selectSize, isClick]);

  useEffect(() => {
    scrollToPosition();
    // when scaleNumber change
  }, [selectSize.yScalePercent]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    GetDetailsViewSize(true, configInfo, scaleNumber, setSelectSize, setEchartsIndex);

    setIsDragging(false);
    // setTimeout(() => {
    // }, 20);
  };

  return (
    <div className='bit-map-right-page'>
      <FullDataPage />
      <div
        ref={viewRef}
        id='wholeEcharts'
        style={{
          flexGrow: 1,
          // border: '1px solid #7a7164',
          width: `calc(100vw - 20px - 150px - ${width}px)`,
          height: 'calc(100vh - 50px - 20px)',
          overflow: 'auto',
          marginLeft: 6,
          willChange: 'transform' /* scroll opt */,
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
