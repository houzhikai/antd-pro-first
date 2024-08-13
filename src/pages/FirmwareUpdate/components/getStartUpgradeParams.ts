export const getStartUpgradeParams = (
  getDeviceListAndHeartObj,
  selectedKeysList,
  ubootEnv,
) => {
  const tableChildrenList = getDeviceListAndHeartObj.tableList
    .map((item) => item.children)
    .flat(Infinity);
  const selectAllFirmwareList = tableChildrenList
    .filter((item) => selectedKeysList.includes(item.key))
    .map((item) => {
      return {
        key: item.key,
        firmware: item.firmware,
        newverision: item.newVersion,
      };
    });
  let result = selectAllFirmwareList.reduce((acc, item) => {
    let slot = parseInt(item.key.charAt(0));
    if (!acc[slot]) {
      acc[slot] = { slot, newfirmware: [] };
    }
    acc[slot].newfirmware.push({
      key: item.key,
      firmware: item.firmware,
      newverision: item.newverision,
    });
    return acc;
  }, {});

  let finalResult: any = Object.values(result);
  const newList = finalResult.map((item) => {
    return {
      ...item,
      newfirmware: item.newfirmware.map((t) => {
        if (t.firmware === 'Uboot') {
          const env = ubootEnv.filter((envList) => envList.key === t.key)[0]
            .env;
          return { firmware: t.firmware, newversion: t.newverision, env };
        }
        return { firmware: t.firmware, newversion: t.newverision };
      }),
    };
  });
  return newList;
};
