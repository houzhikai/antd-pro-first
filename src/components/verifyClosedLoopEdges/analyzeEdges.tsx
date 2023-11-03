const analyzeEdges = (edges) => {
  const filterIdList = edges
    ?.map((item) => item.id.split('->'))
    ?.map((item) => {
      return {
        source: item[0],
        target: item[1],
      };
    });
  const mergeArr = (arr) => {
    let dataInfo = {};
    arr.forEach((item) => {
      let { source } = item;
      if (!dataInfo[source]) {
        dataInfo[source] = {
          source,
          child: [],
        };
      }
      dataInfo[source].child.push(item.target);
    });
    let list = Object.values(dataInfo);
    const graph = list.map((item: any) => {
      return {
        [item.source]: item.child,
      };
    });
    return graph;
  };
  let newObj = {};
  for (let i = 0; i < mergeArr(filterIdList).length; i++) {
    let obj = mergeArr(filterIdList)[i];
    let key = Object.keys(obj)[0]; // 获取对象的键（属性名）
    let value = obj[key]; // 获取对象的值

    newObj[key] = value; // 将键值对添加到新对象中
  }
  return newObj;
};

export default analyzeEdges;
