export const takeMiddleNumber = (min: number, max: number) => {
  const array: string[] = [];
  for (let d = min; d <= max; d++) {
    array.push(d.toString(16).toUpperCase());
  }
  return array;
};
