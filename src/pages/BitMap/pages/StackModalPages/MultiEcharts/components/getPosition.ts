// export const getPosition = (colIndex, rowIndex, echartsIndex, scaleNumber) => {
//   if (scaleNumber !== 0.125) {
//     // hasXY hasX  hasY noHasXY
//     const x = colIndex + 1;
//     const y = rowIndex + 1;
//     let value;
//     if (x === 1 && y === 1) {
//       value = 'hasXY';
//     } else if (x === 1) {
//       value = 'hasX';
//     } else if (y === 1) {
//       value = 'hasY';
//     } else {
//       value = 'noHasXY';
//     }
//     return value;
//   } else {
//     // hasXY hasX  hasY noHasXY
//     const xxx = rowIndex === echartsIndex.xStart
//     const yyy = colIndex === echartsIndex.yStart

//     let value;
//     if (xxx && yyy) {
//       value = 'hasXY';
//     } else
//       if (xxx) {
//         value = 'hasX';
//       } else if (yyy) {
//         value = 'hasY';
//       } else {
//         value = 'noHasXY';
//       }
//     return value;
//   }

// };
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
