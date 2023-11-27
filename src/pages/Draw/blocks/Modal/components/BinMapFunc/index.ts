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
