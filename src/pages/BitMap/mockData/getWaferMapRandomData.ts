export const getWaferMapRandomData = (dataNumber, wafermapLayout) => {
  const data: number[][] = [];
  for (let i = 0; i < dataNumber; i++) {
    const x =
      Math.floor(Math.random() * (wafermapLayout.xMax - wafermapLayout.xMin)) +
      wafermapLayout.xMin; //生成0-400的随机数
    const y =
      Math.floor(Math.random() * (wafermapLayout.yMax - wafermapLayout.yMin)) +
      wafermapLayout.yMin; //生成0-200的随机数
    const value = Math.floor(Math.random() * 4); //生成不好含0的的随机数：堆叠模式下：0-1
    data.push([x, y, value]);
  }

  const newList = data.map((item) => {
    return [
      item[0] - wafermapLayout.xMin,
      item[1] - wafermapLayout.yMin,
      item[2],
    ];
  });
  return newList;
};
export const getSingleRandomData = (dataNumber, xMax, yMax, scaleNumber) => {
  const data: number[][] = [];
  for (let i = 0; i < dataNumber; i++) {
    const x = Math.floor((Math.random() * xMax) / Math.sqrt(scaleNumber)); //生成0-400的随机数
    const y = Math.floor((Math.random() * yMax) / Math.sqrt(scaleNumber)); //生成0-200的随机数
    const value = Math.floor(Math.random() * 2) + 1; //生成不含0的的随机数：堆叠模式下：1-3
    data.push([x, y, value]);
  }

  return data;
};
