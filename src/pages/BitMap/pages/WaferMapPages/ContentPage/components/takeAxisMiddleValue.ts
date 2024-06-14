export const takeAxisMiddleValue = (min: number, max: number) => {
  const array: string[] = [];
  for (let d = min; d <= max; d++) {
    array.push(String(d));
  }
  return array;
};
