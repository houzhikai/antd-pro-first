export const generateData = (dataNumber, isStack) => {
  let data: number[][] = [];
  for (let i = 0; i < dataNumber; i++) {
    let x = Math.floor(Math.random() * 1024); //生成0-400的随机数
    let y = Math.floor(Math.random() * 1024); //生成0-200的随机数
    let value = Math.floor(Math.random() * (isStack ? 3 : 1) + 1); //生成不好含0的的随机数：堆叠模式下：1-3
    data.push([x, y, value]);
  }
  return data;
};
