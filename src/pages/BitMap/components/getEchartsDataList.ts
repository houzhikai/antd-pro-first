export const getEchartsDatList = (string, rowNumber) => {
  const number = rowNumber + 1;
  // 遍历二进制数据
  const echartsFullList = Array.from(string).map((item, index) => {
    // X 轴坐标
    const X = Math.floor(index % number);
    // Y 轴坐标
    const Y = Math.floor(index / number);
    return [X, Y, Number(item)];
  });
  return echartsFullList;
};
