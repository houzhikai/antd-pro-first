const getStartUpgradeParams = (getDeviceListAndHeartObj, selectedKeysList) => {
  // filter the list with firmware versions
  const tableChildrenList = getDeviceListAndHeartObj.tableList
    .map((item) => item.children)
    .flat(Infinity)
    .filter((item) => item);
  const selectAllFirmwareList = tableChildrenList
    .filter((item) => selectedKeysList.includes(item.key))
    .map((item) => {
      return {
        key: item.key,
        firmware: item.firmware,
        version: item.version,
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
      version: item.version,
      newverision: item.newverision,
    });
    return acc;
  }, {});

  let finalResult: any = Object.values(result);
  const newList = finalResult.map((item) => {
    return {
      ...item,
      newfirmware: item.newfirmware.map((t) => {
        // if (t.firmware === 'Uboot') {
        // const env = ubootEnv.filter((envList) => envList.key === t.key)[0].env;
        //   return { firmware: t.firmware, newversion: t.newverision, env };
        // }
        return {
          key: t.key,
          firmware: t.firmware,
          version: t.version,
          newversion: t.newverision,
        };
      }),
    };
  });
  return newList;
};

const optionalUpgrade = (oldVersion: string, newVersion: string) => {
  if (oldVersion === newVersion) {
    return false;
  }
  // NA在常规、强制模式下都要可以升级
  if (oldVersion === 'NA') {
    return true;
  }
  if (newVersion === 'NA') {
    return false;
  }

  const str1 = oldVersion.substring(1);
  const str2 = newVersion.substring(1);

  const vs1 = str1.split('.').map((a) => parseInt(a));
  const vs2 = str2.split('.').map((a) => parseInt(a));
  const length = Math.min(vs1.length, vs2.length);
  for (let i = 0; i < length; i++) {
    if (vs1[i] > vs2[i]) {
      return true;
    } else if (vs1[i] < vs2[i]) {
      return false;
    }
  }
  if (length === vs1.length) {
    return true;
  } else {
    return false;
  }
};

export const getVerifyParams = (getDeviceListAndHeartObj, selectedKeysList) => {
  const params = getStartUpgradeParams(
    getDeviceListAndHeartObj,
    selectedKeysList,
  );
  const noUpgradeKeyList = params
    .map((item) => {
      return item.newfirmware.map((t) => {
        const yyy = optionalUpgrade(t.version, t.newversion);
        return {
          key: t.key,
          isUpgrade: yyy,
        };
      });
    })
    .flat()
    .filter((item) => item.isUpgrade === true)
    .map((item) => item.key);
  return noUpgradeKeyList;
};
