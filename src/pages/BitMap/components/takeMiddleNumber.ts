export const takeMiddleNumber = (min: number, max: number, baseConversion) => {
  const array: string[] = [];
  for (let d = min; d <= max; d++) {
    if (baseConversion === 'Hex') {
      array.push(d.toString(16).toUpperCase());
    } else if (baseConversion === 'Oct') {
      array.push(d.toString(8));
    } else {
      array.push(String(d));
    }
  }
  return array;
};
