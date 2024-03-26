import { TestUnitType } from "./components/enum";

export const getSelectedKeyList = (
  value: string,
  valueAC: string,
  data: any
) => {
  let newList = [];
  if (value === "AC") {
    const getACDataList = data.map((item: any) => {
      const childrenList = item.children;
      const filterACList = childrenList.filter(
        (child: any) => child.type === TestUnitType.AC
      );
      return { ...item, children: filterACList };
    });

    if (valueAC === "Standard") {
      const ACStandardList = getACDataList.map((item: any) => {
        const childrenList = item.children;
        const e = childrenList.filter((child: any) => {
          const tiltleList =
            child.title.includes("Linearity Cal") ||
            child.title.includes("TG Sync") ||
            child.title.includes("TX Cal") ||
            child.title.includes("RX Cal") ||
            child.title.includes("Cable Cal");
          return tiltleList;
        });
        return { ...item, children: e };
      });
      console.log({ xxx: ACStandardList });
      newList = ACStandardList;
    }
    console.log({ value, valueAC, data, getACDataList, newList });
  }

  return newList;
};
