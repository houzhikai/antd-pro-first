export const takeAxisMiddleValue = (min: number, max: number) => {
  const array: string[] = [];
  for (let d = min; d <= max; d++) {
    array.push(String(d));
  }
  return array;
};

export const getAxisDataList = (wafermapLayout) => {
  const xAxisData = takeAxisMiddleValue(
    wafermapLayout.xMin,
    wafermapLayout.xMax,
  );
  const yAxisData = takeAxisMiddleValue(
    wafermapLayout.yMin,
    wafermapLayout.yMax,
  );
  return { xAxisData, yAxisData };
};
