import { getBitLength } from './getBitLength';
import { getEchartsAxisNumber } from './getEchartsAxisNumber';

export const GetDetailsViewSize = (isMove: boolean, configInfo, scaleNumber, setSelectSize, setEchartsIndex) => {
  const dots = configInfo.layoutConfig.dots;

  const echartsAxisNumber = getEchartsAxisNumber(configInfo, scaleNumber);
  // const echartsAxisNumber = configInfo.layoutConfig.xMax > 1024 && configInfo.layoutConfig.yMax > 1024 ? 512 : 1024;
  // bit ±ß³¤
  const bitLength = getBitLength(scaleNumber);
  // one echarts width
  const echartsWidth = (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength;
  // one echarts height
  const echartsHeight = (echartsAxisNumber / Math.sqrt(Math.max(scaleNumber, 1))) * bitLength;
  // edge's scroll
  const scrollableDiv: any = document.getElementById('wholeEcharts');
  const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = scrollableDiv;
  // ÍÏ¶¯¹ö¶¯ÌõÊ±£¬¼ÆËãµ±Ç°¾àÀëÕ¼µÄ°Ù·Ö±È
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
  const xtoLeftPercent = Number(((xDefaultPosition / scrollWidth) * 100).toFixed(0));
  const xScalePercent = Number(((clientWidth / scrollWidth) * 100).toFixed(0));
  const ytoTopPercent = Number(((yDefaultPosition / scrollHeight) * 100).toFixed(0));
  const yScalePercent = Number(((clientHeight / scrollHeight) * 100).toFixed(0));

  const xStart = Math.floor(Number((scrollWidth * (xtoLeftPercent / 100)).toFixed(0)) / echartsWidth);
  const xEnd = Math.floor((Number((scrollWidth * (xtoLeftPercent / 100)).toFixed(0)) + clientWidth) / echartsWidth);
  const yStart = Math.floor(Number((scrollHeight * (ytoTopPercent / 100)).toFixed(0)) / echartsHeight);
  const yEnd = Math.floor(
    Number(Number((scrollHeight * (ytoTopPercent / 100)).toFixed(0)) + clientHeight) / echartsHeight
  );

  setSelectSize({ xtoLeftPercent, xScalePercent, ytoTopPercent, yScalePercent });

  const xAxisList = Math.max(configInfo.layoutConfig.xMax / echartsAxisNumber, 1);
  const yAxisList = Math.max(configInfo.layoutConfig.yMax / echartsAxisNumber, 1);
  const isRenderAllEcharts = scaleNumber > 1;

  setEchartsIndex({
    xStart: isRenderAllEcharts ? 0 : xStart,
    xEnd: isRenderAllEcharts ? xAxisList : xEnd,
    yStart: isRenderAllEcharts ? 0 : yStart,
    yEnd: isRenderAllEcharts ? yAxisList : yEnd,
  });
};
