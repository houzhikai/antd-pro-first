import { EXCELCOLUMNS } from './Enum';

export const getWaferMapData = (arr) => {
  const sliceFirstList = arr.slice(1);
  const newArr = sliceFirstList.map((item) => {
    return [
      item[EXCELCOLUMNS.EMPTY],
      item[EXCELCOLUMNS.EMPTY1],
      item[EXCELCOLUMNS.EMPTY3],
      item[EXCELCOLUMNS.EMPTY4],
      item[EXCELCOLUMNS.DeviceInfo],
      item[EXCELCOLUMNS.EMPTY2],
    ];
  });
  return newArr;
};
