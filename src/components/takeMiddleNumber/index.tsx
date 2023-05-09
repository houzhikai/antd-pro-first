export const takeMiddleNumber = (min: number, max: number) => {
  let arry: number[] = [];
  for (let d = min; d <= max; d++) {
    arry.push(d);
  }
  return arry;
};
