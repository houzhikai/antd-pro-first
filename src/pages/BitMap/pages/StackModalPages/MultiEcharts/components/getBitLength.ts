export const getBitLength = (scaleNumber) => {
  //   if (scaleNumber === 0.125) {
  //     return 8;
  //   } else if (scaleNumber === 0.2) {
  //     return 6;
  //   } else if (scaleNumber === 1) {
  //     if (xMax !== 1024 || yMax !== 1024) {
  //       return 2;
  //     }
  //     return 13;
  //   } else if (scaleNumber === 256) {
  //     console.log({ xMax, yMax }, xMax / 16, yMax / 16);
  //     return Math.min(
  //       Math.floor((1582 * 1.5) / (xMax / 16)),
  //       Math.floor(841 / (yMax / 16)),
  //     );
  //   } else {
  //     if (xMax !== 1024 || yMax !== 1024) {
  //       return 3;
  //     }
  //     return 13;
  //   }
  // };
  if (scaleNumber === 0.125) {
    return 16;
  } else if (scaleNumber === 0.2) {
    return 6;
  } else {
    return 4;
  }
};
