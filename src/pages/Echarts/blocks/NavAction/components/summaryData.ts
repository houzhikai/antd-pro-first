import { EXCELCOLUMNS } from './Enum';

// 获取 columns
export const getSummaryColumns = (title, hasColor = false) => {
  const columns = [
    title[EXCELCOLUMNS.DeviceInfo],
    title[EXCELCOLUMNS.EMPTY],
    title[EXCELCOLUMNS.EMPTY1],
    title[EXCELCOLUMNS.EMPTY2],
  ];
  const newColumns = hasColor ? columns.concat('Color') : columns;
  return newColumns.map((item) => {
    return {
      title: item,
      dataIndex: item,
    };
  });
};
// 获取dataSource
export const getSummaryData = (arr, title, colorList = []) => {
  const dataSource = arr.map((item, index) => {
    let dataList = {
      [title[EXCELCOLUMNS.DeviceInfo]]: item[EXCELCOLUMNS.DeviceInfo],
      [title[EXCELCOLUMNS.EMPTY]]: item[EXCELCOLUMNS.EMPTY],
      [title[EXCELCOLUMNS.EMPTY1]]: item[EXCELCOLUMNS.EMPTY1],
      [title[EXCELCOLUMNS.EMPTY2]]:
        String(Number(item[EXCELCOLUMNS.EMPTY2] * 100).toFixed(2)) + '%',
    };
    if (colorList.length > 0) {
      return Object.assign(dataList, { Color: colorList[index] });
    } else {
      return dataList;
    }
  });
  return dataSource;
};
export const getWaferMapData = (arr) => {
  const sliceFirstList = arr.slice(1);
  const newArr = sliceFirstList.map((item) => {
    return [
      item[EXCELCOLUMNS.EMPTY],
      item[EXCELCOLUMNS.EMPTY1],
      item[EXCELCOLUMNS.EMPTY2],
      item[EXCELCOLUMNS.EMPTY3],
      item[EXCELCOLUMNS.EMPTY4],
      item[EXCELCOLUMNS.DeviceInfo],
    ];
  });
  return newArr;
};
