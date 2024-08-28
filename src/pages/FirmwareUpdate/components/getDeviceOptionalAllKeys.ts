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
        item.slotStatus !== StatusENUM.Busy
    )
    ?.map((item) => {
      return (item.children?.filter((dut) => dut.newVersion) || [])?.map((dut) => dut.key);
    })
    .flat();
  return newList;
};
