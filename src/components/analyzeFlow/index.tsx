// TODO 可以合并函数方法
const analyzeFlow = (flows) => {
  // 公共方法，提取mainflow中的元素，以 isMain 为筛选器遍历的units属性，目的为了读取node和edge信息
  const mainFlowList = flows.testFlows
    .filter((item) => item.isMain)
    .map((item) => item.units)[0];
  // 公共方法，提取subflow中的元素，以 isMain 为筛选器遍历的units属性，目的为了读取node和edge信息
  const subflowList = flows.testFlows
    .filter((item) => !item.isMain)
    .map((item) => item.units)[0];

  //    拿mainflow的属性
  const mainFlowParams = flows.testFlows.filter((item) => item.isMain);
  //    拿subflow的属性
  const subFlowParams = flows.testFlows.filter((item) => !item.isMain);

  {
    /*
     ** 1. 拿到mainflow所包含的Nodes集合，这里包括test-unit、subflow
     ** 2. 整合 node 节点，为流程图中所用
     ** 3. fen-bin 在测试项中包含，需要单独找出
     */
  }
  let fBinMainNodes = [];
  const defaultNodes = mainFlowList.map((item) => {
    const type = item.isFlowUnit ? 'subflow' : 'test-method';
    const FBinList = item.ports.filter((item) => item.type === '4');
    fBinMainNodes = FBinList.map((item) => {
      return {
        id: `fen-bin-${item.value}`,
        data: { label: item.value },
        type: 'fen-bin',
        width: 82,
        height: 82,
        position: { x: 224, y: 315 },
        params: {},
      };
    });

    return {
      id: `${type}-${item.name}`,
      data: { label: item.name },
      type,
      width: 150,
      height: 110,
      position: { x: 100, y: 100 },
      params: {
        isFlowUnit: item.isFlowUnit,
        isStartUnit: item.isStartUnit,
        name: item.name,
        number: item.number,
        targetFlowName: item.targetFlowName, // 暂时都是空
        testMethod: item.testMethod,
        variables: item.variables,
      },
    };
  });
  const mainFlowNodes = defaultNodes.concat(fBinMainNodes);

  {
    /*
     ** 1. 拿到mainflow所包含的edges集合，这里包括node信息，因为需要知道source信息
     ** 2. 整合 edges 节点，为流程图中所用
     ** 3. 整理到一个数组中
     */
  }

  const defaultEdges = mainFlowList.map((item) => {
    const sourceType = item.isFlowUnit ? 'subflow' : 'test-method';

    const edgesList = item.ports.map((t) => {
      let targetType;
      if (t.type === '1') {
        targetType = 'test-method';
      } else if (t.type === '2') {
        targetType = 'subflow';
      } else if (t.type === '4') {
        targetType = 'fen-bin';
      }

      return {
        id: `${item.name}->${t.value}`,
        label: t.param,
        source: `${sourceType}-${item.name}`,
        target: `${targetType}-${t.value}`,
        type: 'floating',
        markerEnd: { type: 'arrowclosed', color: 'black' },
        style: { strokeWidth: 1, stroke: 'black' },
      };
    });
    return edgesList;
  });

  const mainFlowEdges = defaultEdges.flat(Infinity);

  {
    /*
     ** 1. 拿到subflow所包含的Nodes集合，这里包括test-unit、subflow
     ** 2. 整合 node 节点，为流程图中所用
     ** 3. fen-bin 在测试项中包含，需要单独找出
     */
  }
  let fBinSubNodes = [];
  const defaultSubNodes = subflowList.map((item) => {
    const type = item.isFlowUnit ? 'subflow' : 'test-method';

    const FBinList = item.ports.filter((item) => item.type === '4');
    if (FBinList.length > 0) {
      fBinSubNodes = FBinList.map((item, index) => {
        return {
          id: `fen-bin-${item.value}-${index}`,
          data: { label: item.value },
          type: 'fen-bin',
          width: 82,
          height: 82,
          position: { x: 224, y: 315 },
          params: {},
        };
      });
    }

    return {
      id: `${type}-${item.name}`,
      data: { label: item.name },
      type,
      width: 150,
      height: 110,
      position: { x: 100, y: 100 },
      params: {
        isFlowUnit: item.isFlowUnit,
        isStartUnit: item.isStartUnit,
        name: item.name,
        number: item.number,
        targetFlowName: item.targetFlowName, // 暂时都是空
        testMethod: item.testMethod,
        variables: item.variables,
      },
    };
  });
  const subFlowNodes = defaultSubNodes.concat(fBinSubNodes);
  {
    /*
     ** 1. 拿到mainflow所包含的edges集合，这里包括node信息，因为需要知道source信息
     ** 2. 整合 edges 节点，为流程图中所用
     ** 3. 整理到一个数组中
     */
  }
  const defaultSubEdges = subflowList.map((item) => {
    const target = item.ports.map((t) => {
      return {
        id: `${item.name}->${t.value}`,
        label: t.param,
        source: item.name,
        target: t.value,
        type: 'floating',
        markerEnd: { type: 'arrowclosed', color: 'black' },
        style: { strokeWidth: 1, stroke: 'black' },
      };
    });
    return target;
  });
  const subFlowEdges = defaultSubEdges.flat(Infinity);

  return {
    flows,
    mainFlowNodes,
    mainFlowEdges,
    mainFlowParams,
    subFlowNodes,
    subFlowEdges,
    subFlowParams,
  };
};

export default analyzeFlow;
