// 每个echarts占多少个值
export const getEchartsAxisNumber = (configInfo, scaleNumber) => {
  // 0.125x echarts number
  // if (configInfo.layoutConfig.xMax > 1024 && configInfo.layoutConfig.yMax > 1024 && (scaleNumber === 0.125 || scaleNumber === 0.2)) {
  //   return 256;
  // }

  if (configInfo.layoutConfig.xMax <= 1024 && configInfo.layoutConfig.yMax <= 1024) {
    // 当 xmax & ymax <=1024，按照大数只分配一个echarts
    if (configInfo.layoutConfig.xMax <= configInfo.layoutConfig.yMax) {
      return configInfo.layoutConfig.yMax;
    } else {
      return configInfo.layoutConfig.xMax;
    }
  } else if (configInfo.layoutConfig.xMax <= 1024 && configInfo.layoutConfig.yMax >= 1024) {
    return configInfo.layoutConfig.yMax;
  } else if (configInfo.layoutConfig.yMax <= 1024 && configInfo.layoutConfig.xMax >= 1024) {
    return configInfo.layoutConfig.xMax;
  } else {
    // xMax >1024 && yMax > 1024时的分区，每个echarts应该占多少个值
    if (scaleNumber === 0.125 || scaleNumber === 0.2) {
      return 512;
    } else {
      // // >=1 的倍数情况，如果在
      if (
        configInfo.layoutConfig.xMax / scaleNumber / 1024 > 1 &&
        configInfo.layoutConfig.yMax / scaleNumber / 1024 > 1
      ) {
        if (configInfo.layoutConfig.xMax >= configInfo.layoutConfig.yMax) {
          return configInfo.layoutConfig.yMax / scaleNumber;
        } else {
          return configInfo.layoutConfig.xMax / scaleNumber;
        }
      } else {
        if (configInfo.layoutConfig.xMax >= configInfo.layoutConfig.yMax) {
          return configInfo.layoutConfig.yMax;
        } else {
          return configInfo.layoutConfig.xMax;
        }
      }
    }
  }
};
