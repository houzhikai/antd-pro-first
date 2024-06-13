export const getFullWidthHeight = (fullEchartsMaxValue, width, height) => {
  const xMax = fullEchartsMaxValue.xMax;
  const yMax = fullEchartsMaxValue.yMax;
  if (xMax > yMax) {
    return { width, height: Math.floor((width * yMax) / xMax) };
  } else if (yMax > xMax) {
    return { height, width: Math.floor((xMax * height) / yMax) };
  } else {
    return { width, height };
  }

  // return { width: width, height: height };
};
