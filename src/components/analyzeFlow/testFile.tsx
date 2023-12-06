export const testFile = (flows) => {
  const isMainflow = flows.testFlows.filter((item) => item.isMain);

  const isNotMainFlow = flows.testFlows.filter((item) => !item.isMain);

  const getNodes = (nodesList) => {
    const flowNodes = nodesList.map((t) => {
      let fBinNodes: object[] = [];
      const defaultNodeList = t.units.map((item, index) => {
        const type = item.isFlowUnit ? 'subflow' : 'test-method';
        const FBinList = item.ports.filter((item) => item.type === '4') || [];
        if (FBinList.length > 0) {
          FBinList.forEach((p, idx) => {
            if (item.position) {
              return fBinNodes.push({
                id: `fen-bin-${p.value}.${item.name}`,
                data: { label: p.value },
                type: 'fen-bin',
                width: 82,
                height: 82,
                position: {
                  x: p?.position?.x ?? 100 + (index + idx) * 180,
                  y: p.param === 1 ? 0 : p?.position?.y ?? 224,
                },
                params: {},
              });
            } else {
              return fBinNodes.push({
                id: `fen-bin-${p.value}.${item.name}`,
                data: { label: p.value },
                type: 'fen-bin',
                width: 82,
                height: 82,
                position: {
                  x: p?.position?.x ?? 100 + index * 180,
                  y: p.param === 1 ? 0 : p?.position?.y ?? 224,
                },
                params: {},
              });
            }
          });
        }

        return {
          id: `${type}-${item.name}`,
          data: { label: item.name },
          type,
          width: 100,
          height: 70,
          position: {
            // item?.position?.x ?? 0 的0是根据开始节点的x轴定的
            // item?.position?.y ?? 0 的0是根据开始节点的y轴顶的
            x: item?.position?.x ?? 0 + index * 200,
            y: item?.position?.y ?? 0,
          },
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
      return {
        flowNodes: defaultNodeList.concat(fBinNodes),
        flowName: t.flowName,
        flowParams: t,
        existedSubNodes: defaultNodeList.filter(
          (item) => item.type === 'subflow',
        ),
      };
    });
    return flowNodes;
  };

  const getEdges = (edgesList) => {
    const defaultEdges = edgesList.map((t) => {
      const itemEdges = t.units.map((item) => {
        const sourceType = item.isFlowUnit ? 'subflow' : 'test-method';

        const edgeList = item.ports.map((t) => {
          let targetType;
          if (t.type === '1') {
            targetType = 'test-method';
          } else if (t.type === '2') {
            targetType = 'subflow';
          } else if (t.type === '4') {
            targetType = 'fen-bin';
          }

          return {
            id:
              t.type === '4'
                ? `${item.name}->${t.value}.${item.name}`
                : `${item.name}->${t.value}`,
            label: `${t.param}`,
            source: `${sourceType}-${item.name}`,
            target:
              t.type === '4'
                ? `${targetType}-${t.value}.${item.name}`
                : `${targetType}-${t.value}`,
            type: 'floating',
            markerEnd: { type: 'arrowclosed', color: 'black' },
            style: { strokeWidth: 1, stroke: 'black' },
          };
        });
        return edgeList;
      });
      return {
        flowEdges: itemEdges.flat(Infinity),
        flowName: t.flowName,
      };
    });
    return defaultEdges;
  };

  //   const mainFlowParams = flows.testFlows.filter((item) => item.isMain);
  {
    /**
     ** 1. 先做mainflow nodes 和subflow的nodes
     ** 2. 在做mainflow 和 subflow 的edges
     ** 3. 将flowName对应的mainflow和subflow整合到一起
     */
  }
  const mainFlowNodes = getNodes(isMainflow);
  const mainFlowEdges = getEdges(isMainflow);
  const subFlowNodes = getNodes(isNotMainFlow);
  const subFlowEdges = getEdges(isNotMainFlow);
  const flowNodes = [...mainFlowNodes, ...subFlowNodes]
    .map((item) => item.existedSubNodes)
    .flat(Infinity);
  // add subflow test-unit-params
  const getSubFlows = (nodes, edges) => {
    const flowList = nodes.map((item) => {
      let newArr = {};
      flowNodes.forEach((p) =>
        edges.forEach((t) => {
          if (item.flowName === t.flowName) {
            if (item.flowName === p.data.label) {
              newArr = {
                flowName: item.flowName,
                flowNodes: item.flowNodes,
                flowEdges: t.flowEdges,
                flowParams: item.flowParams,
                testUnitParams: p?.params,
              };
            }
          }
        }),
      );
      return newArr;
    });
    return flowList;
  };

  const getFlows = (nodes, edges) => {
    const flowList = nodes.map((item) => {
      let newArr = {};
      edges.forEach((t) => {
        if (item.flowName === t.flowName) {
          newArr = {
            flowName: item.flowName,
            flowParams: item.flowParams,
            flowNodes: item.flowNodes,
            flowEdges: t.flowEdges,
          };
        }
      });
      return newArr;
    });
    return flowList;
  };

  const mainflowList = getFlows(mainFlowNodes, mainFlowEdges);
  const subflowList = getSubFlows(subFlowNodes, subFlowEdges);
  const globalSettings = flows.globalSettings;

  //   const mainflowList = mainFlowNodes.map((item) => {
  //     let newArr = {};
  //     mainFlowEdges.forEach((t) => {
  //       if (item.flowName === t.flowName) {
  //         newArr = {
  //           flowName: item.flowName,
  //           flowParams: item.flowParams,
  //           flowNodes: item.flowNodes,
  //           flowEdges: t.flowEdges,
  //         };
  //       }
  //     });
  //     return newArr;
  //   });

  return { flows, mainflowList, subflowList, globalSettings };
};
