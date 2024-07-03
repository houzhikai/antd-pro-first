import React, { useLayoutEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getScatterOptions } from './components/getScatterOptions';

const DetailDataPage = () => {
  const chartRef = useRef<any>(null);
  const {
    singleColor,
    theme,
    baseConversion,
    configInfo,
    singleModeData,
    scaleNumber,
    detailsValues,
    setDetailsValues,
    isStackModalOpen,
    echartsDataColor,
  } = ProviderFunc();

  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const options = getScatterOptions(
    theme,
    singleModeData.data,
    singleColor,
    {
      xMin: 0,
      xMax: configInfo.layoutConfig.xMax,
      yMin: 0,
      yMax: configInfo.layoutConfig.yMax,
    },
    // detailsEchartsAxisValue,
    baseConversion,
    configInfo,
    scaleNumber,
    detailsValues,
    isStackModalOpen,
    echartsDataColor,
    chartSize,
  );

  useLayoutEffect(() => {
    if (singleModeData.data.length > 0) {
      setTimeout(() => {
        const myChart = echarts.init(chartRef.current);
        const width = myChart.getWidth();
        const height = myChart.getHeight();
        if (width !== chartSize.width && height !== chartSize.height) {
          setChartSize({ width, height });
        }
        myChart.setOption(options, true);

        const canvas: any = document.querySelector('[data-zr-dom-id="zr_1"]');
        if (scaleNumber === 0.125) {
          // 修改 margin 值
          canvas.style.margin = '-4px -18px'; // 这里将 margin 值设置为 20px，你可以根据需要进行调整
        } else if (scaleNumber === 256) {
          console.log(canvas.style);
          // canvas.style.margin = '-1px -1px'; // 这里将 margin 值设置为 20px，你可以根据需要进行调整
        }
        myChart.on(
          'dataZoom',
          echarts.throttle(() => {
            const newOptions: any = myChart.getOption();
            const xStart = Math.round(newOptions.dataZoom[0].start);
            const xEnd = Math.round(newOptions.dataZoom[0].end);
            const yStart = Math.round(newOptions.dataZoom[1].start);
            const yEnd = Math.round(newOptions.dataZoom[1].end);
            setDetailsValues({ xStart, xEnd, yStart, yEnd });
          }, 0),
        );

        return () => {
          myChart.dispose();
          myChart.off('dataZoom');
        };
      }, 20);
    }
  }, [options]);

  return (
    <>
      {singleModeData.data.length > 0 && (
        <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
      )}
    </>
  );
};

export default DetailDataPage;
