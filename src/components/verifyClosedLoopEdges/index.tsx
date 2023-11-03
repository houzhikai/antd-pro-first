import analyzeEdges from './analyzeEdges';

export const verifyCloseLoopEdges = (edges) => {
  type Graph = {
    [key: string]: string[]; // 使用邻接表表示有向图
  };

  const graph = analyzeEdges(edges);
  // 使用示例
  //   const graph: Graph = {
  //     Continuity: ['FB1.Continuity', 'Set_DPS_Vaa'],
  //     Set_DPS_Vaa: ['FB1.Set_DPS_Vaa', 'Set_DPS_Vbb'],
  //     Set_DPS_Vbb: ['FB1.Set_DPS_Vbb', 'SubFlow1'],
  //     SubFlow1: ['FB1.SubFlow1', 'TB1.SubFlow1'],
  //   };
  //   const graph: Graph = {
  //     'test-method-Leakage-0': ['test-method-Leakage-1'],
  //     'test-method-Leakage-1': ['test-method-Leakage-2'],
  //     'test-method-Leakage-2': ['test-method-Leakage-0'],
  //   };

  function isCyclicUtil(
    node: string,
    visited: Set<string>,
    recStack: Set<string>,
  ): boolean {
    visited.add(node);
    recStack.add(node);

    if (graph[node]) {
      for (let neighbor of graph[node]) {
        if (
          !visited.has(neighbor) &&
          isCyclicUtil(neighbor, visited, recStack)
        ) {
          return true;
        } else if (recStack.has(neighbor)) {
          return true;
        }
      }
    }

    recStack.delete(node);
    return false;
  }

  function isCyclic(graph: Graph): boolean {
    const visited: Set<string> = new Set(); // 记录已访问的节点
    const recStack: Set<string> = new Set(); // 记录递归栈中的节点

    for (let node in graph) {
      if (!visited.has(node) && isCyclicUtil(node, visited, recStack)) {
        return true;
      }
    }

    return false;
  }

  return isCyclic(graph);
};
