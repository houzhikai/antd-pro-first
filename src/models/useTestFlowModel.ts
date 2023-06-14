import { useState } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { initialNodes } from '@/pages/TestFlow/blocks/components/CustomNode/initNodes';
import { initialEdges } from '@/pages/TestFlow/blocks/components/CustomNode/initEdges';

export default () => {
  const [nodeName, setNodeName] = useState('start');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);

  // 保存时需要用到nodes和edges
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return {
    nodeName,
    setNodeName,
    nodeBg,
    setNodeBg,
    nodeHidden,
    setNodeHidden,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
  };
};
