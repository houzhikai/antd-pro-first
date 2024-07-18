export const getPosition = (colIndex, rowIndex) => {
  // hasXY hasX  hasY noHasXY
  const x = colIndex + 1;
  const y = rowIndex + 1;
  let value;
  if (x === 1 && y === 1) {
    value = 'hasXY';
  } else if (x === 1) {
    value = 'hasX';
  } else if (y === 1) {
    value = 'hasY';
  } else {
    value = 'noHasXY';
  }
  return value;
};
