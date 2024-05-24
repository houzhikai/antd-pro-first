export const getFullWidthHeight = (fullEchartsMaxValue, width, height) => {
  let xMax = fullEchartsMaxValue.xMax;
  let yMax = fullEchartsMaxValue.yMax;
  if (xMax > yMax) {
    return { width, height: Math.floor((width * yMax) / xMax) };
  } else if (yMax > xMax) {
    return { height, width: Math.floor((xMax * height) / yMax) };
  }

  return { width: width, height: height };
};
