export const getBitLength = (scaleNumber) => {
  if (scaleNumber === 0.125) {
    return 8;
  } else if (scaleNumber === 0.2) {
    return 6;
  } else {
    return 4;
  }
};
