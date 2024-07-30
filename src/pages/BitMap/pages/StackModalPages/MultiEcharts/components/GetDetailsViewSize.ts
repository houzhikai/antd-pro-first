import { getBitLength } from './getBitLength';

export const GetDetailsViewSize = (
  isMove: boolean,
  configInfo,
  scaleNumber,
  setSelectSize,
  setEchartsIndex,
) => {
  const dots = configInfo.layoutConfig.dots;
  // 每个echarts有多少个 数
  const echartsAxisNumber =
    configInfo.layoutConfig.xMax > 1024 && configInfo.layoutConfig.yMax > 1024
      ? 512
      : 1024;
  // bit 边长
  const bitLength = getBitLength(scaleNumber);
  // 每个 echarts 的宽度
  const echartsWidth =
    (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength;
  // 每个 echarts 的高度
  const echartsHeight =
    (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength;
  //   const { setSelectSize, setEchartsIndex } = ProviderFunc();
  const scrollableDiv: any = document.getElementById('wholeEcharts');
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
  const xScalePercent = Number(((clientWidth / scrollWidth) * 100).toFixed(0));
  const ytoTopPercent = Number(
    ((yDefaultPosition / scrollHeight) * 100).toFixed(0),
  );
  const yScalePercent = Number(
    ((clientHeight / scrollHeight) * 100).toFixed(0),
  );
  const xStart = Math.floor(
    Number((scrollWidth * (xtoLeftPercent / 100)).toFixed(0)) / echartsWidth,
  );
  const xEnd = Math.floor(
    (Number((scrollWidth * (xtoLeftPercent / 100)).toFixed(0)) + clientWidth) /
      echartsWidth,
  );
  const yStart = Math.floor(
    Number((scrollHeight * (ytoTopPercent / 100)).toFixed(0)) / echartsHeight,
  );
  const yEnd = Math.floor(
    Number(
      Number((scrollHeight * (ytoTopPercent / 100)).toFixed(0)) + clientHeight,
    ) / echartsHeight,
  );

  setSelectSize({
    xtoLeftPercent,
    xScalePercent,
    ytoTopPercent,
    yScalePercent,
  });

  const xAxisList = configInfo.layoutConfig.xMax / echartsAxisNumber;
  const yAxisList = configInfo.layoutConfig.yMax / echartsAxisNumber;
  const isRenderAllEcharts = scaleNumber > 4;

  console.log('GetDetailsViewSize', {
    xStart: isRenderAllEcharts ? 0 : xStart,
    xEnd: isRenderAllEcharts ? xAxisList : xEnd,
    yStart: isRenderAllEcharts ? 0 : yStart,
    yEnd: isRenderAllEcharts ? yAxisList : yEnd,
  });
  setEchartsIndex({
    xStart: isRenderAllEcharts ? 0 : xStart,
    xEnd: isRenderAllEcharts ? xAxisList : xEnd,
    yStart: isRenderAllEcharts ? 0 : yStart,
    yEnd: isRenderAllEcharts ? yAxisList : yEnd,
  });
  // setEchartsIndex({
  //   xStart,
  //   xEnd,
  //   yStart,
  //   yEnd,
  // });
};
