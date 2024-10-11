import { StatusENUM } from '../pages/DetailsPage/components/enum';

export const getDeviceOptionalAllKeys = (tableList) => {
  if (!Array.isArray(tableList)) {
    return [];
  }
  const newList = tableList
    .filter(
      (item) =>
        item.slotStatus !== StatusENUM.Offline &&
        item.slotStatus !== StatusENUM.PowerOff &&
        item.slotStatus !== StatusENUM.Starting &&
        item.slotStatus !== StatusENUM.Busy,
    )
    ?.map((item) => {
      const slotList = item.children?.filter((dut) => dut.newVersion);
      return slotList.map((dut) => {
        if (dut.children) {
          return dut.children
            .map((t) => t.key)
            .flat()
            .concat(dut.key);
        } else {
          return dut.key;
        }
      });
    })
    .flat();
  return newList.flat();
};
