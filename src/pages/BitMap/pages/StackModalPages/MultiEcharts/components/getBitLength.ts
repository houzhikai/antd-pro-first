export const getBitLength = (configInfo, scaleNumber) => {
  const xMax =
    configInfo.duts.col * configInfo.blocks.col * configInfo.pages.col;
  const yMax =
    configInfo.duts.row * configInfo.blocks.row * configInfo.pages.row;

  if (scaleNumber === 0.125) {
    return 8;
  } else if (scaleNumber === 0.2) {
    return 6;
  } else if (scaleNumber === 1) {
    if (xMax !== 1024 || yMax !== 1024) {
      return 2;
    }
    return 13;
  } else if (scaleNumber === 256) {
    return Math.min(
      Math.floor(1582 / (xMax / 16)),
      Math.floor(841 / (yMax / 16)),
    );
  } else {
    if (xMax !== 1024 || yMax !== 1024) {
      return 3;
    }
    return 13;
  }
};
