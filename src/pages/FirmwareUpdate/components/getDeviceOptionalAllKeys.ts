export const getDeviceOptionalAllKeys = (tableList) => {
  if (!Array.isArray(tableList)) {
    return [];
  }
  const newList = tableList
    ?.map((item) => {
      return item.children
        .filter((dut) => dut.newVersion)
        .map((dut) => dut.key);
    })
    .flat();
  return newList;
};
