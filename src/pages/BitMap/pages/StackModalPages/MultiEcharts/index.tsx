import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { takeMiddleNumber } from '@/pages/BitMap/components/takeMiddleNumber';
import { getOptions } from './components/getOptions';
import { getPosition } from './components/getPosition';
import { getNewData } from './components/getNewData';

const MultiEcharts = ({
  echartsAxisNumber,
  echartsIndex,
  echartsWidth,
  echartsHeight,
}) => {
  const {
    echartsDataColor,
    singleModeData,
    scaleNumber,
    configInfo,
    baseConversion,
  } = ProviderFunc();

  // 1x 情况下每个echarts有 xxx 个坐标
  const xAxisList = configInfo.layoutConfig.xMax / echartsAxisNumber;
  const yAxisList = configInfo.layoutConfig.yMax / echartsAxisNumber;
  const chartRefs = useRef<any>(
    Array.from({ length: xAxisList }, () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Array.from({ length: yAxisList }, () => useRef(null)),
    ),
  );
  const chartInstances: any = useRef(
    Array.from({ length: xAxisList }, () => Array(yAxisList).fill(null)),
  );

  const getAxisValueList = (min, max) => {
    return takeMiddleNumber(min, max, baseConversion, scaleNumber);
  };

  const newData: any = getNewData(
    singleModeData.data,
    scaleNumber,
    echartsAxisNumber,
  );

  const valuesRef = useRef<any>({ viewRange: echartsIndex, scaleNumber });
  // 原点位置
  const dots = configInfo.layoutConfig.dots;
  // 遍历 echarts 的入口
  const initializeCharts = async () => {
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
          /**
           * xIndex + 1 === xAxisList ? 0 : 1
           * x 方向上最后一个画布添加一个值
           * 计算 x 轴的生长方向
           */
          const xEchartsMinMaxObj =
            dots === 'top_right' || dots === 'bottom_right'
              ? {
                  min: (xAxisList - xIndex - 1) * echartsAxisNumber,
                  max: (xAxisList - xIndex) * echartsAxisNumber,
                }
              : {
                  min: xIndex * echartsAxisNumber,
                  max:
                    (xIndex + 1) * echartsAxisNumber -
                    (xIndex + 1 === xAxisList ? 0 : 1),
                };
          const xAxisValueList = getAxisValueList(
            xEchartsMinMaxObj.min,
            xEchartsMinMaxObj.max,
          );
          /**
           * yIndex + 1 === yAxisList ? 0 : 1
           * y 方向上最后一个画布添加一个值
           */
          const yEchartsMinMaxObj =
            dots === 'bottom_left' || dots === 'bottom_right'
              ? {
                  min: (yAxisList - yIndex - 1) * echartsAxisNumber,
                  max: (yAxisList - yIndex) * echartsAxisNumber,
                }
              : {
                  min: yIndex * echartsAxisNumber,
                  max:
                    (yIndex + 1) * echartsAxisNumber -
                    (yIndex + 1 === yAxisList ? 0 : 1),
                };
          const yAxisValueList = getAxisValueList(
            yEchartsMinMaxObj.min,
            yEchartsMinMaxObj.max,
          );
          const singleEchartsDataList =
            newData?.filter(
              (item) =>
                item.xEchartsIndex === xIndex && item.yEchartsIndex === yIndex,
            )?.[0]?.data || [];
          // console.log({
          //   singleEchartsDataList,
          //   newData,
          //   scaleNumber,
          //   echartsIndex,
          // });
          const option = getOptions(
            { xIndex, yIndex, xAxisList, yAxisList },
            position,
            { xAxisValueList, yAxisValueList },
            echartsDataColor,
            singleEchartsDataList,
            scaleNumber,
            configInfo,
            baseConversion,
            echartsAxisNumber,
          );

          // 设置 data-zr-dom-id="zr_2" 的 margin
          // setting echarts data func:  data-zr-dom-id="zr_2"
          const canvas: any = document.querySelector('[data-zr-dom-id="zr_2"]');
          if (canvas) {
            // setTimeout(() => {
            setTimeout(() => {
              if (scaleNumber === 0.125) {
                canvas.style.margin = '-4px';
              } else if (scaleNumber === 64 || scaleNumber === 256) {
                canvas.style.margin = '-2px';
              } else {
                canvas.style.margin = '-1px';
              }
            }, 150);
            // }, 30);
          }
          chartInstance.setOption(option, true);
          chartInstances.current[xIndex][yIndex] = chartInstance;

          // 等待一段时间，实际的异步数据获取
          if (scaleNumber >= 1) {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, 10));
          } else {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
      }
    }
    valuesRef.current.viewRange = echartsIndex;
    valuesRef.current.scaleNumber = scaleNumber;
  };

  // 异步加载遍历画布
  useEffect(() => {
    // if (
    //   JSON.stringify(valuesRef.current.viewRange) ===
    //     JSON.stringify(echartsIndex) &&
    //   valuesRef.current.scaleNumber === scaleNumber
    // ) {
    //   return;
    // }

    initializeCharts();

    return () => {
      chartInstances.current
        .flat()
        .map((chartInstance) => chartInstance && chartInstance.dispose());
      // chartInstances.current
      //   .flat()
      //   .forEach((chartInstance) => chartInstance && chartInstance.dispose());
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
  ]);

  return (
    <div
      // 防止父组件 onMouseDown onMouseUp 方法穿透
      onMouseDown={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
      style={{
        display: 'flex',
        width: echartsWidth * xAxisList + scaleNumber > 1 ? 100 : 40,
        height: echartsHeight * yAxisList + scaleNumber > 1 ? 100 : 40,
      }}
    >
      {chartRefs.current.map((item, idx) => (
        <div key={idx}>
          {item.map((ref, index) => (
            <div
              key={index}
              ref={ref}
              style={{
                width: echartsWidth + (idx === 0 ? 40 : 0),
                height: echartsHeight + (index === 0 ? 40 : 0),
                margin: '-4px -2px',
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MultiEcharts;
