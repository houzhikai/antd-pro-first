export const takeMiddleNumber = (min: number, max: number, baseConversion, scaleNumber, isAddOneValue) => {
  const maxValue = isAddOneValue ? max + 1 : max;
  const array: string[] = [];
  for (let d = min; d <= maxValue; d++) {
    array.push(String(d));
  }
  const filterScaleList = array.filter((item) => {
    if (scaleNumber > 1) {
      return Number(item) % Math.sqrt(scaleNumber) === 0;
    } else {
      return item;
    }
  });
  let newList: any = [];
  if (baseConversion === 'Hex') {
    newList = filterScaleList.map((item) => Number(item).toString(16).toUpperCase());
  } else if (baseConversion === 'Oct') {
    newList = filterScaleList.map((item) => Number(item).toString(8));
  } else {
    newList = filterScaleList;
  }
  return newList;
};

// 获取坐标系的值
export const getAxisValueObj = (detailsEchartsAxisValue, baseConversion, scaleNumber, isAddOneValue) => {
  const xAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.xMin,
    detailsEchartsAxisValue.xMax,
    baseConversion,
    scaleNumber,
    isAddOneValue
  );
  const yAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.yMin,
    detailsEchartsAxisValue.yMax,
    baseConversion,
    scaleNumber,
    isAddOneValue
  );
  return { xAxisValueList, yAxisValueList };
};
// 是否需要在x轴加一个数据（对xmax添加一个数）
export const getisAddOneXValue = (dots, xIndex, xAxisList, xMax) => {
  if (xAxisList === 1) {
    if (xMax < 1024) {
      return false;
    } else {
      return true;
    }
  }
  if (dots === 'top_right' || dots === 'bottom_right') {
    if (xIndex === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (xIndex + 1 === xAxisList) {
      return true;
    } else {
      return false;
    }
  }
};
// 是否需要在y轴加一个数据（对ymax添加一个数）
export const getisAddOneYValue = (dots, yIndex, yAxisList, yMax) => {
  if (yAxisList === 1) {
    if (yMax < 1024) {
      return false;
    } else {
      return true;
    }
  }
  if (dots === 'bottom_left' || dots === 'bottom_right') {
    if (yIndex === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (yIndex + 1 === yAxisList) {
      return true;
    } else {
      return false;
    }
  }
};
