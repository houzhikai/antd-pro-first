import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getisAddOneXValue, getisAddOneYValue, takeMiddleNumber } from '../../../components/takeMiddleNumber';
import { getOptions } from './components/getOptions';
import { getPosition } from './components/getPosition';
import { getNewData } from './components/getNewData';

const DetailsEcharts = ({ echartsAxisNumber, echartsIndex, echartsWidth, echartsHeight }) => {
  const {
    bitmapData,
    scaleNumber,
    configInfo,
    baseConversion,
    setEchartsIndex,
    theme,
    bitmapColorModalObj,
  } = ProviderFunc();
  // 1x how many echarts are there in the x and y directions
  const xAxisList = Math.max(configInfo.layoutConfig.xMax / echartsAxisNumber, 1);
  const yAxisList = Math.max(configInfo.layoutConfig.yMax / echartsAxisNumber, 1);

  const chartRefs = useRef<any>(
    Array.from({ length: xAxisList }, () => Array.from({ length: yAxisList }, () => React.createRef()))
  );

  const chartInstances: any = useRef(Array.from({ length: xAxisList }, () => Array(yAxisList).fill(null)));
  // change layout when re import
  useEffect(() => {
    chartRefs.current = Array.from({ length: xAxisList }, () =>
      Array.from({ length: yAxisList }, () => React.createRef())
    );
    chartInstances.current = Array.from({ length: xAxisList }, () => Array(yAxisList).fill(null));
    setEchartsIndex({ xStart: 0, xEnd: xAxisList, yStart: 0, yEnd: yAxisList });
  }, [xAxisList, yAxisList]);

  const getAxisValueList = (min, max, isAddOneValue) => {
    return takeMiddleNumber(min, max, baseConversion, scaleNumber, isAddOneValue);
  };

  const valuesRef = useRef<any>({ viewRange: echartsIndex, scaleNumber });
  const dots = configInfo.layoutConfig.dots;
  useEffect(() => {
    const newData: any = getNewData(bitmapData.data, scaleNumber, echartsAxisNumber, dots, xAxisList, yAxisList);
    const initializeCharts = async () => {
      console.log('echarts inits')
      for (const [xIndex, row] of chartRefs.current.entries()) {
        for (const [yIndex, ref] of row.entries()) {
          const isInViewport =
            xIndex >= echartsIndex.xStart &&
            xIndex <= echartsIndex.xEnd &&
            yIndex >= echartsIndex.yStart &&
            yIndex <= echartsIndex.yEnd;
          if (ref.current && isInViewport) {
            const chartInstance = echarts.init(ref.current);
            const position = getPosition(yIndex, xIndex);

            const xEchartsMinMaxObj =
              dots === 'top_right' || dots === 'bottom_right'
                ? {
                  min: (xAxisList - xIndex - 1) * echartsAxisNumber,
                  max:
                    configInfo.layoutConfig.xMax < 1024
                      ? configInfo.layoutConfig.xMax
                      : (xAxisList - xIndex) * echartsAxisNumber - 1,
                }
                : {
                  min: xIndex * echartsAxisNumber,
                  max:
                    configInfo.layoutConfig.xMax < 1024
                      ? configInfo.layoutConfig.xMax
                      : (xIndex + 1) * echartsAxisNumber - 1,
                };
            const isAddOneXValue = getisAddOneXValue(dots, xIndex, xAxisList, configInfo.layoutConfig.xMax);
            const xAxisValueList = getAxisValueList(xEchartsMinMaxObj.min, xEchartsMinMaxObj.max, isAddOneXValue);
            /**
             * yIndex + 1 === yAxisList ? 0 : 1
             * y ·½ÏòÉÏ×îºóÒ»¸ö»­²¼Ìí¼ÓÒ»¸öÖµ
             */
            const yEchartsMinMaxObj =
              dots === 'bottom_left' || dots === 'bottom_right'
                ? {
                  min: (yAxisList - yIndex - 1) * echartsAxisNumber,
                  max:
                    configInfo.layoutConfig.yMax < 1024
                      ? configInfo.layoutConfig.yMax
                      : (yAxisList - yIndex) * echartsAxisNumber - 1,
                }
                : {
                  min: yIndex * echartsAxisNumber,
                  max:
                    configInfo.layoutConfig.yMax < 1024
                      ? configInfo.layoutConfig.yMax
                      : (yIndex + 1) * echartsAxisNumber - 1,
                };
            const isAddOneValue = getisAddOneYValue(dots, yIndex, yAxisList, configInfo.layoutConfig.yMax);
            const yAxisValueList = getAxisValueList(yEchartsMinMaxObj.min, yEchartsMinMaxObj.max, isAddOneValue);
            const singleEchartsDataList =
              newData?.filter((item) => item.xEchartsIndex === xIndex && item.yEchartsIndex === yIndex)?.[0]?.data ||
              [];

            const option = getOptions(
              { xIndex, yIndex, xAxisList, yAxisList },
              position,
              { xAxisValueList, yAxisValueList },
              // echartsDataColor,
              singleEchartsDataList,
              scaleNumber,
              configInfo,
              baseConversion,
              echartsAxisNumber,
              // isSingleModalOpen,
              // singleColor,
              theme,
              bitmapColorModalObj,
            );

            chartInstance.setOption(option, true);
            chartInstances.current[xIndex][yIndex] = chartInstance;

            // µÈ´ýÒ»¶ÎÊ±¼ä£¬Êµ¼ÊµÄÒì²½Êý¾Ý»ñÈ¡
            // if (scaleNumber >= 1) {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, 0));
            // } else {
            // eslint-disable-next-line no-promise-executor-return
            //   await new Promise((resolve) => setTimeout(resolve, 20));
            // }
          }
        }
      }
      valuesRef.current.viewRange = echartsIndex;
      valuesRef.current.scaleNumber = scaleNumber;

      // const canvasList: any = document.querySelectorAll('[data-zr-dom-id="zr_2"]');
      // canvasList?.forEach((canvas) => {
      //   if (canvas) {
      //     return 0;
      //     // if (scaleNumber <= 1) {
      //     //   if (dots === 'bottom_left' || dots === 'bottom_right') {
      //     //     canvas.style.margin = '0 -4px';
      //     //   } else {
      //     //     canvas.style.margin = '0 -2px';
      //     //   }
      //     // } else if (scaleNumber === 64 || scaleNumber === 256) {
      //     //   canvas.style.margin = '0';
      //     // } else {
      //     //   canvas.style.margin = '-1px';
      //     // }
      //   }
      // });

      // const canvasList1: any = document.querySelectorAll('[data-zr-dom-id="zr_100000"]');
      // canvasList1.forEach((canvas) => {
      //   if (canvas) {
      //     return 0;
      //     if (scaleNumber <= 1) {
      //       if (dots === 'bottom_left' || dots === 'bottom_right') {
      //         canvas.style.margin = '0 -4px';
      //       } else {
      //         canvas.style.margin = '0 -2px';
      //       }
      //     } else if (scaleNumber === 64 || scaleNumber === 256) {
      //       canvas.style.margin = '0';
      //     } else {
      //       canvas.style.margin = '-1px';
      //     }
      //   }
      // });
    };
    if (chartRefs?.current && chartInstances?.current) {
      initializeCharts();
    }

    return () => {
      chartInstances.current.flat().map((chartInstance) => chartInstance && chartInstance.dispose());
      (async function () {
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 10));
      })();
    };
  }, [
    echartsIndex.yStart,
    echartsIndex.yEnd,
    echartsIndex.xStart,
    echartsIndex.xEnd,
    scaleNumber,
    baseConversion,
    bitmapColorModalObj.colorList,
    xAxisList,
    yAxisList,
    valuesRef.current,
    chartRefs?.current,
    chartInstances?.current,
    bitmapData.data,
    configInfo,
    echartsAxisNumber,
    theme,
  ]);

  // const getMargin = () => {
  //   if (scaleNumber > 1) {
  //     // if (dots === 'bottom_left') {
  //     //   return '-4px -2px';
  //     // } else if (dots === 'bottom_right') {
  //     //   return '-4px -2px';
  //     // }
  //     return '-4px -2px';
  //   } else {
  //     return '-4px -3px';
  //   }
  // };

  return (
    <>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          width: echartsWidth * xAxisList + 200,
          height: echartsHeight * yAxisList + 10,
          marginLeft: 4,
        }}
      >
        {chartRefs?.current?.map((item, idx) => (
          <div
            style={{
              position: 'absolute',
              border: '1px solid #7a7164',
              margin: 6,
              willChange: 'transform' /* scroll opt */,
            }}
            key={idx}
          >
            {item?.map((ref, index) => (
              <div
                key={index}
                ref={ref}
                style={{
                  width: echartsWidth,
                  height: echartsHeight,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsEcharts;
