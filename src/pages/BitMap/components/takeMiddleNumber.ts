export const takeMiddleNumber = (min: number, max: number) => {
  const array: number[] = [];
  for (let d = min; d <= max; d++) {
    array.push(d);
  }
  return array;
};
