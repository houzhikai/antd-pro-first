// TODO，需要自适应页面大小
export const getGraphicPosition = (gap, wafermapEchartsSize) => {
  const cx = Math.floor(
    wafermapEchartsSize.width - (wafermapEchartsSize.width * 5) / 100,
  );
  //   圆心坐标
  const circleCenter = Math.floor(
    (wafermapEchartsSize.width * 5) / 100 + cx / 2,
  );

  // bottom top left right
  let value: any = {};
  if (gap === 'top') {
    value = {
      cx: circleCenter,
      cy: Math.floor((wafermapEchartsSize.width * 5) / 100 - 1),
      startAngle: 0,
      endAngle: -Math.PI,
      clockwise: true,
    };
  } else if (gap === 'left') {
    value = {
      cx: Math.floor((wafermapEchartsSize.width * 5) / 100),
      cy: circleCenter,
      startAngle: Math.PI / 2,
      endAngle: 1.5 * Math.PI,
      clockwise: false,
    };
  } else if (gap === 'right') {
    value = {
      cx: wafermapEchartsSize.width,
      cy: circleCenter,
      startAngle: Math.PI / 2,
      endAngle: 1.5 * Math.PI,
      clockwise: true,
    };
  } else {
    value = {
      cx: circleCenter,
      cy: wafermapEchartsSize.height,
      startAngle: 0,
      endAngle: -Math.PI,
      clockwise: false,
    };
  }
  return [
    {
      type: 'circle',
      silent: true,
      shape: { cx: circleCenter, cy: circleCenter, r: cx / 2 },
      style: { fill: 'transparent', stroke: '#5f5f5f', lineWidth: 2 },
    },
    {
      type: 'arc',
      silent: true,
      shape: {
        cx: value.cx,
        cy: value.cy,
        r: (20 * wafermapEchartsSize.width) / wafermapEchartsSize.fullHeight,
        r0: 0,
        startAngle: value.startAngle,
        endAngle: value.endAngle,
        clockwise: value.clockwise,
      },
      style: { fill: '#f5f5f5', stroke: '#5f5f5f', lineWidth: 2 },
    },
  ];
};
