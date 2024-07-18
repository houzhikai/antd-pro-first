import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { takeMiddleNumber } from '@/pages/BitMap/components/takeMiddleNumber';
import { getOptions } from './components/getOptions';
import { getPosition } from './components/getPosition';
import { getNewData } from './components/getNewData';
import { getBitLength } from './components/getBitLength';

const MultiEcharts = () => {
  const {
    echartsDataColor,
    singleModeData,
    scaleNumber,
    configInfo,
    baseConversion,
  } = ProviderFunc();

  const bitLength = useMemo(
    () => getBitLength(configInfo, scaleNumber),
    [configInfo, scaleNumber],
  );
  // 1x 情况下每个echarts有 xxx 个坐标
  const echartsAxisNumber = 1024;
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
  // 原点位置
  const dots = configInfo.layoutConfig.dots;
  // 遍历 echarts 的入口
  const initializeCharts = useCallback(async () => {
    for (const [xIndex, row] of chartRefs.current.entries()) {
      for (const [yIndex, ref] of row.entries()) {
        if (ref.current) {
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
          chartInstance.setOption(option, true, true);
          chartInstances.current[xIndex][yIndex] = chartInstance;

          // const margin = scaleNumber === 0.125 ? '3px' : '0';
          // // 设置图表的样式
          // if (ref.current) {
          //   // ref.current.style.margin = margin;
          //   const zrDom = ref.current.querySelector(
          //     '[data-zr-dom-id="zr_2"]',
          //   );
          //   if (zrDom) {
          //     zrDom.style.margin = margin;
          //   }
          // }

          // 等待一段时间，实际的异步数据获取
          // eslint-disable-next-line no-promise-executor-return
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
      }
    }
  }, [chartRefs.current, dots, newData, baseConversion, scaleNumber]);
  // 异步加载遍历画布
  useEffect(() => {
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
  }, [initializeCharts()]);

  const echartsWidth = useMemo(
    () => (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength,
    [scaleNumber, bitLength],
  );
  const echartsHeight = useMemo(
    () => (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength,
    [scaleNumber, bitLength],
  );

  return (
    <div
      // 防止父组件 onMouseDown onMouseUp 方法穿透
      onMouseDown={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
      style={{
        display: 'flex',
        width: echartsWidth * xAxisList + 20,
        height: echartsHeight * yAxisList + 20,
      }}
    >
      {chartRefs.current.map((item, idx) => (
        <div key={idx}>
          {item.map((ref, index) => (
            <div
              key={index}
              ref={ref}
              style={{
                width: echartsWidth,
                height: echartsHeight,
                // margin: scaleNumber === 0.125 ? '-3px 3px' : '0',
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MultiEcharts;
