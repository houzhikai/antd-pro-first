import { EXCELCOLUMNS, TitleIndex } from './Enum';
import { getWaferMapData } from './getwaferMapData';
import { getSummaryColumns, getSummaryData } from './summaryData';

// 解析title的方法
const splitStartEnd = (arr) => {
  const str = arr[0];
  const str1 = str.substring(1);
  const str2 = str1.substring(0, str1.length - 1);
  return str2;
};
// 取下一个数组对象名称的下标
const endIndex = (arr, title) => {
  return arr.findIndex((item) => item[EXCELCOLUMNS.DeviceInfo] === title);
};

export const convert = (list, colorList) => {
  // getData ===> ['[DEVICE INFO]']
  const infoTitle = Object.keys(list[0]).filter(
    (item) => item[0] === '[' && item[item.length - 1] === ']',
  );
  // 取【SUMMary】的下标
  const infoEndIndex = endIndex(list, TitleIndex.SUMMARY);
  const deviceInfoDataList = list.slice(0, infoEndIndex);
  const deviceInfo = {
    title: splitStartEnd(infoTitle),
    data: deviceInfoDataList.map((item) => {
      return {
        label: item[EXCELCOLUMNS.DeviceInfo],
        children: item[EXCELCOLUMNS.EMPTY] || '',
      };
    }),
  };
  // 取【rawData】的下标
  const summaryTitle = [list[infoEndIndex][EXCELCOLUMNS.DeviceInfo]];
  const summaryEndIndex = endIndex(list, TitleIndex.RAWDATA);
  const summaryDataList = list.slice(infoEndIndex + 1, summaryEndIndex);

  const summaryTotalFormTitle = summaryDataList[0];
  const totalColumns = getSummaryColumns(summaryTotalFormTitle);
  const summaryTotalData = summaryDataList.slice(1, 2);
  const totalData = getSummaryData(summaryTotalData, summaryTotalFormTitle);

  const summaryBinTitle = summaryDataList[2];
  const binColumns = getSummaryColumns(summaryBinTitle, true);
  const summaryBinData = summaryDataList.slice(3, summaryDataList.length);
  const binData = getSummaryData(summaryBinData, summaryBinTitle, colorList);

  const summary = {
    title: splitStartEnd(summaryTitle),
    total: {
      columns: totalColumns,
      data: totalData,
    },
    softBinList: {
      columns: binColumns,
      data: binData,
    },
  };
  // 获取晶圆图的数据
  const waferMapDataList = list.slice(summaryEndIndex + 1);
  const waferMapData = getWaferMapData(waferMapDataList);
  // 获取 xMax、yMax 的值
  const deviceInfoData = deviceInfo?.data || [];
  const xMax = Number(
    deviceInfoData?.filter((item) => item.label === 'GridXmax:')?.[0]?.children,
  );
  const yMax = Number(
    deviceInfoData?.filter((item) => item.label === 'GridYmax:')?.[0]?.children,
  );
  return { deviceInfo, summary, waferMapData, xMax, yMax };
};
