const saveFlow = (flows) => {
  const filterFenBinNodeList = flows.mainFlowNodes.filter(
    (item) => !item.id.includes('fen-bin'),
  );
  const filterSubFenBinNodeList = flows.subFlowNodes.filter(
    (item) => !item.id.includes('fen-bin'),
  );

  const getFlowList = (flowParams, filterFBinList, edges) => {
    const mainflowPorts = (name) => {
      const filterSameName = edges.filter((item) => {
        const nodeIds = item.id.split('->');
        const sourceNode = nodeIds[0];
        return sourceNode === name;
      });
      //  "param": 0, "type": "4",  "value": "FB1"

      return filterSameName.map((item) => {
        const nodeIds = item.id.split('->');
        const targetNode = nodeIds[1];
        let type;
        if (item.target.includes('test-method')) {
          type = '1';
        } else if (item.target.includes('subflow')) {
          type = '2';
        } else {
          type = '4';
        }
        return {
          param: Number(item.label),
          type: type,
          value: targetNode,
        };
      });
    };
    const nodesList = filterFBinList.map((item) => {
      const params = item.params;
      return {
        isFlowUnit: params.isFlowUnit,
        isStartUnit: params.isStartUnit,
        name: params.name,
        number: params.number,
        targetFlowName: params.targetFlowName,
        testMethod: params.testMethod,
        variables: params.variables,
        ports: mainflowPorts(params.name),
      };
    });
    const mainflowList = flowParams.map((item) => {
      return {
        flowName: item.flowName,
        globalVariables: item.globalVariables,
        isActive: item.isActive,
        isMain: item.isMain,
        units: nodesList,
      };
    });
    return mainflowList;
  };

  const mainflowList = getFlowList(
    flows.mainFlowParams,
    filterFenBinNodeList,
    flows.mainFlowEdges,
  );

  // subflow
  const subflowList = getFlowList(
    flows.subFlowParams,
    filterSubFenBinNodeList,
    flows.subFlowEdges,
  );

  return { flows: { testFlows: [...mainflowList, ...subflowList] } };
};
export default saveFlow;
