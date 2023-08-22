import { useModel } from '@umijs/max';
import { subflowNode } from './node';
import { subflowEdge } from './edges';
import { useEffect } from 'react';

const Subflow = () => {
  let { nodes, setNodes, edges, setEdges } = useModel('useTestFlowModel');
  let newNodes: any = [];
  let newEdges: any = [];
  useEffect(() => {
    newNodes = nodes.concat(subflowNode);
    newEdges = edges.concat(subflowEdge);
    // console.log({ nodes, subflowNode, subflowEdge, newNodes });
    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  return <div></div>;
};

export default Subflow;
