// 合并BinMap数据
export const mergeDataSource = (hardBinData, softBinData) => {
  const hardBinDataSource = hardBinData.map((item) => {
    return {
      HardBin: item.Name,
      HardBinNum: item.Number,
      Type: item.Type,
    };
  });
  const softBinDataSource = softBinData.map((item) => {
    return {
      SoftBin: item.Name,
      SoftBinNum: item.Number,
      HardBin: item.HardBin,
      MaxCount: item.MaxCount,
      CheckOverflow: item.CheckOverflow,
      Color: item.Color,
      Comment: item.Comment,
    };
  });
  const dataSource = softBinDataSource.map((item, index) => {
    const addProperties = hardBinDataSource.find(
      (t) => t.HardBin === item.HardBin,
    );
    return {
      ...item,
      key: index,
      HardBinNum: addProperties.HardBinNum,
      Type: addProperties.Type,
    };
  });

  return dataSource;
};

// 拆分成BinMap数据结构
export const splitDataSource = (dataSource) => {
  // 得到HardBin的值
  const HardBinList = dataSource.map((item) => {
    return {
      Name: item.HardBin,
      Number: item.HardBinNum,
      Type: item.Type,
      Color: item.Type === 'Pass' ? 'Green' : 'Red',
    };
  });
  const res = new Map();
  const HardBin = HardBinList.filter(
    (item) => !res.has(item.Number) && res.set(item.Number, 1),
  );

  console.log({ dataSource });
  // 得到SoftBin的值
  const SoftBin = dataSource.map((item) => {
    return {
      Name: item.SoftBin,
      Number: item.SoftBinNum,
      HardBin: item.HardBin,
      MaxCount: item.MaxCount,
      CheckOverflow: item.CheckOverflow,
      Color: item.Color,
      Comment: item.Comment,
    };
  });

  return { HardBin, SoftBin };
};
