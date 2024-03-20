import { EXCELCOLUMNS } from './Enum';

export const getWaferMapData = (arr) => {
  const sliceFirstList = arr.slice(1);
  const newArr = sliceFirstList.map((item) => {
    return [
      item[EXCELCOLUMNS.EMPTY], // X
      item[EXCELCOLUMNS.EMPTY1], // Y
      item[EXCELCOLUMNS.EMPTY3], // HardBin
      item[EXCELCOLUMNS.EMPTY4], // DutID
      item[EXCELCOLUMNS.DeviceInfo], // TouchDown
      item[EXCELCOLUMNS.EMPTY2], // SoftBin
    ];
  });
  return newArr;
};
