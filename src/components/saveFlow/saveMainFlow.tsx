export const saveMainFlow = (flows) => {
  const getFlowList = (flowList) => {
    const mainflowPorts = (edges, name, fenBinNodes, filterFBin) => {
      //  "param": 0, "type": "4",  "value": "FB1"
      if (fenBinNodes.length > 0) {
        const filterSameName = edges.filter((item) => {
          const nodeIds = item.id.split('->');
          const sourceNode = nodeIds[0].includes('test-method')
            ? nodeIds[0].split('test-method-')[1]
            : nodeIds[0].includes('subflow')
            ? nodeIds[0].split('subflow-')[1]
            : nodeIds[0];
          return sourceNode === name;
        });

        const result = fenBinNodes.map((t) =>
          filterSameName.map((item) => {
            const fenBinSourceNode = t.data.label;
            const nodeIds = item.id.split('->');
            const targetNode = nodeIds[1].split('.')[0];
            let type;
            if (item.target.includes('test-method')) {
              type = '1';
            } else if (item.target.includes('subflow')) {
              type = '2';
            } else {
              type = '4';
            }
            if (type === '4' && fenBinSourceNode === targetNode) {
              return {
                param: Number(item.label),
                type: type,
                value: targetNode,
                position: t.position,
              };
            } else {
              return {
                param: Number(item.label),
                type: type,
                value: targetNode,
              };
            }
          }),
        );
        return result[0] || [];
      } else {
        const filterSameName = edges.filter((item) => {
          const nodeIds = item.id.split('->');
          const sourceNode = nodeIds[0].includes('test-method')
            ? nodeIds[0].split('test-method-')[1]
            : nodeIds[0].includes('subflow')
            ? nodeIds[0].split('subflow-')[1]
            : nodeIds[0];
          return sourceNode === name;
        });
        console.log({ edges, filterFBin, name, filterSameName });

        const result = filterSameName.map((item) => {
          let type;
          if (item.target.includes('test-method')) {
            type = '1';
          } else if (item.target.includes('subflow')) {
            type = '2';
          } else {
            type = '4';
          }
          const target = item.target;
          const targetNode = target.includes('test-method-')
            ? target.split('test-method-')[1]
            : target.includes('subflow-')
            ? target.split('subflow-')[1]
            : target;
          return {
            param: Number(item.label),
            type,
            value: targetNode,
          };
        });

        return result;
      }
    };
    const nodesList = (node, edge) => {
      const filterFBin = node.filter((item) => !item.id.includes('fen-bin'));
      const fenBinNodes = node.filter((item) => item.id.includes('fen-bin'));
      const result = filterFBin.map((t) => {
        const params = t.params;
        return {
          isFlowUnit: params.isFlowUnit,
          isStartUnit: params.isStartUnit,
          name: params.name,
          number: params.number,
          targetFlowName: params.targetFlowName,
          testMethod: params.testMethod,
          variables: params.variables,
          position: t.position,
          ports: mainflowPorts(edge, params.name, fenBinNodes, filterFBin),
        };
      });
      return result;
    };
    //   flowList 是指向 flows.mainflowList / subflowList
    const mainflowList =
      flowList?.map((item) => {
        const params = item.flowParams;
        return {
          flowName: item.flowName,
          globalVariables: params.globalVariables,
          isActive: params.isActive,
          isMain: params.isMain,
          units: nodesList(item.flowNodes, item.flowEdges),
        };
      }) || [];
    return mainflowList;
  };

  const mainflowList = getFlowList(flows.mainflowList);
  const subflowList = getFlowList(flows.subflowList);
  return {
    flows: {
      globalSettings: flows.globalSettings,
      testFlows: [...mainflowList, ...subflowList],
    },
  };
};
