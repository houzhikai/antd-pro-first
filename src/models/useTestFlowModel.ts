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

  const newNodeSource: any = [];
  const newNodeTarget: any = [];

  // 获取 source/target
  nodes.forEach((node) =>
    edges.forEach((edge) => {
      // source
      if (edge.source === node.id) {
        return newNodeSource.push(node.data.label);
      }
      // target
      if (edge.target === node.id) {
        return newNodeTarget.push(node.data.label);
      }
    }),
  );
  // 合并数组
  const newArr = newNodeSource.map((item, index) => ({
    source: item,
    target: newNodeTarget[index],
  }));

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
    newArr,
  };
};
