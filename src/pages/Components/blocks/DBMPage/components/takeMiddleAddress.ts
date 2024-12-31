//拿到首尾地址中间的所有值
export const takeMiddleAddress = (minHex: string, maxHex: string) => {
  let array: string[] = [];
  const minDEC = parseInt(minHex, 16);
  const maxDEC = parseInt(maxHex, 16);
  if (minDEC < maxDEC) {
    for (let d = minDEC; d <= maxDEC; d++) {
      array.push(
        String(
          d < 16
            ? `0${d.toString(16).toUpperCase()}`
            : `${d.toString(16).toUpperCase()}`,
        ),
      );
    }
  } else if (maxDEC < minDEC) {
    for (let d = maxDEC; d <= minDEC; d++) {
      array.push(
        String(
          d < 16
            ? `0${d.toString(16).toUpperCase()}`
            : `${d.toString(16).toUpperCase()}`,
        ),
      );
    }
  }
  return array;
};
// 拿到首尾地址中间的所有列数
export const takeMiddleRows = (minHex: string, maxHex: string) => {
  let array: string[] = [];
  const minDEC = parseInt(minHex, 16);
  const maxDEC = parseInt(maxHex, 16);
  for (let d = minDEC; d <= maxDEC; d++) {
    array.push(String(`${d.toString(16).toUpperCase()}`));
  }

  return array;
};
// 拿到首尾地址中间的矩形地址 例如开始00，结尾11，拿到的地址为 00 01 10 11
export const takeMiddleRectangleAddress = (minHex: string, maxHex: string) => {
  let array: string[] = [];
  // const minDEC = parseInt(minHex, 16);
  // const maxDEC = parseInt(maxHex, 16);
  const minHexColumn = parseInt(
    minHex.substring(minHex.length - 1, minHex.length),
    16,
  );
  const minHexRow = parseInt(minHex.substring(0, minHex.length - 1), 16);
  const maxHexColumn = parseInt(
    maxHex.substring(maxHex.length - 1, maxHex.length),
    16,
  );
  const maxHexRow = parseInt(maxHex.substring(0, minHex.length - 1), 16);
  const minColumn = minHexColumn < maxHexColumn ? minHexColumn : maxHexColumn;
  const maxColumn = minHexColumn >= maxHexColumn ? minHexColumn : maxHexColumn;
  const minRow = minHexRow < maxHexRow ? minHexRow : maxHexRow;
  const maxRow = minHexRow >= maxHexRow ? minHexRow : maxHexRow;

  for (let i = minRow; i <= maxRow; i++) {
    for (let j = minColumn; j <= maxColumn; j++) {
      array.push(
        `${i.toString(16).toUpperCase()}${j.toString(16).toUpperCase()}`,
      );
    }
  }

  return array;
};
