import React, { useEffect, useMemo, useRef, useState } from 'react';
import FullDataPage from './FullDataPage';
import DetailsEcharts from './DetailsEcharts';
import { getBitLength } from './DetailsEcharts/components/getBitLength';
import { GetDetailsViewSize } from './DetailsEcharts/components/GetDetailsViewSize';
import { getEchartsAxisNumber } from './DetailsEcharts/components/getEchartsAxisNumber';
import { ProviderFunc } from '../../components/containers';
// import DetailDataPage from '../SingleModePages/DetailDataPage/DetailDataPage';

const DrawPagePage = () => {
  const viewRef = useRef<any>(null);
  const { selectSize, setSelectSize, scaleNumber, configInfo, echartsIndex, setEchartsIndex, isClick, theme, rotateNumber } =
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
  // 1x how many echarts are there in the x and y directions
  const xAxisList = Math.max(configInfo.layoutConfig.xMax / echartsAxisNumber, 1);
  const yAxisList = Math.max(configInfo.layoutConfig.yMax / echartsAxisNumber, 1);
  const getAxisList = (configInfo) => {
    const xMax = configInfo.layoutConfig.xMax;
    const yMax = configInfo.layoutConfig.yMax;

    let xList: any = [];
    for (let x = 0; x <= xMax; x += xMax / (configInfo.blocks.col * configInfo.duts.col)) {
      xList.push(x);
    }
    let yList: any = [];
    for (let y = 0; y <= yMax; y += yMax / (configInfo.blocks.row * configInfo.duts.row)) {
      yList.push(y);
    }
    return { xList, yList };
  };

  const { xList, yList } = getAxisList(configInfo);

  return (
    <div className='bit-map-right-page'>
      <FullDataPage />
      <div
        ref={viewRef}
        id='wholeEcharts'
        style={{
          // border: '1px solid #7a7164',
          // marginLeft: 10,
          width: echartsWidth * xAxisList + 200,
          overflowX: 'auto',
          transform: `rotate(${rotateNumber}deg)`
        }}
      >
        {/* X 轴 */}
        <div
          className='xAxisList'
          style={{
            width: echartsWidth * xAxisList + 20,
            borderBottom: `1px solid ${theme === 'dark' ? '#999' : '#aaa'}`,
            background: `${theme === 'dark' ? '#1f1f1f' : '#ffffff'}`,
          }}
        >
          {xList.map((item) => (
            <div
              key={item}
              className='xAxisValue'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>{item} </div>
              {/* <div style={{ marginLeft: 3, color: 'red' }}>I</div> */}
            </div>
          ))}
        </div>
        {/* detail echarts page */}
        <div
          style={{
            flexGrow: 1,
            maxHeight: 'calc(100vh - 50px - 50px)',
            paddingLeft: 40,
            // background: '#1e1e1e',
            willChange: 'transform' /* scroll opt */,
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            style={{
              display: 'flex',
              width: echartsWidth * xAxisList + 200,
              height: echartsHeight * yAxisList + 10,
            }}
          >
            {/* Y 轴 */}
            <div
              className='yAxisValue'
              style={{
                height: echartsWidth * yAxisList + 10,
                borderRight: `1px solid ${theme === 'dark' ? '#999' : '#aaa'}`,
                background: `${theme === 'dark' ? '#1f1f1f' : '#ffffff'}`,
              }}
            >
              {yList.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {echartsIndex && (
              <DetailsEcharts
                echartsAxisNumber={echartsAxisNumber}
                echartsIndex={echartsIndex}
                echartsWidth={echartsWidth}
                echartsHeight={echartsHeight}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawPagePage;
