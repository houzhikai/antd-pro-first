const saveFlow = (flows) => {
  const filterFenBinNodeList = flows.mainFlowNodes.filter(
    (item) => !item.id.includes('fen-bin'),
  );
  const filterSubFenBinNodeList = flows.subFlowNodes.filter(
    (item) => !item.id.includes('fen-bin'),
  );

  const mainflowPorts = (name) => {
    const filterSameName = flows.mainFlowEdges.filter((item) => {
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
  const nodesList = filterFenBinNodeList.map((item) => {
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
  const mainflowList = flows.mainFlowParams.map((item) => {
    return {
      flowName: item.flowName,
      globalVariables: item.globalVariables,
      isActive: item.isActive,
      isMain: item.isMain,
      units: nodesList,
    };
  });

  // subflow
  const subflowPorts = (name) => {
    const filterSameName = flows.subFlowEdges.filter((item) => {
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
  const subNodesList = filterSubFenBinNodeList.map((item) => {
    const params = item.params;
    return {
      isFlowUnit: params.isFlowUnit,
      isStartUnit: params.isStartUnit,
      name: params.name,
      number: params.number,
      targetFlowName: params.targetFlowName,
      testMethod: params.testMethod,
      variables: params.variables,
      ports: subflowPorts(params.name),
    };
  });
  const subflowList = flows.subFlowParams.map((item) => {
    return {
      flowName: item.flowName,
      globalVariables: item.globalVariables,
      isActive: item.isActive,
      isMain: item.isMain,
      units: subNodesList,
    };
  });

  return { flows: { testFlows: [...mainflowList, ...subflowList] } };
};
export default saveFlow;
