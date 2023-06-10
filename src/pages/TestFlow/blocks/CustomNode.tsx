import React, { useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import { initialNodes } from './components/CustomNode/initNodes';
import { initialEdges } from './components/CustomNode/initEdges';

import 'reactflow/dist/style.css';

import './components/CustomNode/CustomNode.less';
import CustomEdit from './components/CustomNode/CustomEdit';
import { useModel } from '@umijs/max';
import TextUpdaterNode from './components/CustomNode/TextUpdaterNode';

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
          // it's important that you create a new object here
          // in order to notify react flow about the change
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

  const nodeTypes = {
    custom: TextUpdaterNode,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultViewport={defaultViewport}
      nodeTypes={nodeTypes}
      attributionPosition="bottom-left"
    >
      <CustomEdit />
    </ReactFlow>
  );
};

export default CustomNode;
