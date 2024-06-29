export const takeMiddleNumber = (
  min: number,
  max: number,
  baseConversion,
  scaleNumber,
) => {
  const array: string[] = [];
  for (let d = min; d <= max; d++) {
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
    newList = filterScaleList.map((item) =>
      Number(item).toString(16).toUpperCase(),
    );
  } else if (baseConversion === 'Oct') {
    newList = filterScaleList.map((item) => Number(item).toString(8));
  } else {
    newList = filterScaleList;
  }
  return newList;
};

// 获取坐标系的值
export const getAxisValueObj = (
  detailsEchartsAxisValue,
  baseConversion,
  scaleNumber,
) => {
  const xAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.xMin,
    detailsEchartsAxisValue.xMax,
    baseConversion,
    scaleNumber,
  );
  const yAxisValueList = takeMiddleNumber(
    detailsEchartsAxisValue.yMin,
    detailsEchartsAxisValue.yMax,
    baseConversion,
    scaleNumber,
  );
  return { xAxisValueList, yAxisValueList };
};
