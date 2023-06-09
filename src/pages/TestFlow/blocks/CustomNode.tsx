import { useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import { initialNodes } from './components/CustomNode/initNodes';
import { initialEdges } from './components/CustomNode/initEdges';

import './components/CustomNode/CustomNode.less';
import CustomEdit from './components/CustomNode/CustomEdit';
import { useModel } from '@umijs/max';

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNode = () => {
  const { nodeName, nodeBg, nodeHidden } = useModel('useTestFlowModel');

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      }),
    );
  }, [nodeName, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.style = { ...node.style, backgroundColor: nodeBg };
        }

        return node;
      }),
    );
  }, [nodeBg, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          // when you update a simple type you can just update the value
          node.hidden = nodeHidden;
        }

        return node;
      }),
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === 'e1-2') {
          edge.hidden = nodeHidden;
        }

        return edge;
      }),
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultViewport={defaultViewport}
      minZoom={0.2}
      maxZoom={4}
      attributionPosition="bottom-left"
    >
      <CustomEdit />
    </ReactFlow>
  );
};

export default CustomNode;
