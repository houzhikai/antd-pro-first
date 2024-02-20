import { colorList, standardColorList } from '../../../components/data';

interface SoftBinProps {
  Name: string;
  Number: number;
  HardBin: string;
  MaxCount: string;
  CheckOverflow: boolean;
  Color: string;
  Comment: string;
}

export const analysisBinMap = (
  softBinList: SoftBinProps[],
  mode: boolean,
  softBinData: any[] = [],
) => {
  let softBinColorList: { color: string; value: number }[] = [];
  // let softBinColorTableList: string[] = [];
  if (mode) {
    //   Mode is based on the softBin color in the project when online
    softBinColorList = softBinList.map((item) => {
      return {
        value: item.Number,
        color: item.Color,
      };
    });
  } else {
    // Mode is to customize the softBin color when offline
    const themeColorList = colorList.map((item) => item.color);
    const mockColorList = standardColorList.concat(themeColorList);
    softBinColorList = softBinData.map((item, index) => {
      return {
        value: item?.SoftBinID || '',
        color: mockColorList[index],
      };
    });
  }
  return softBinColorList;
};
