import { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';

import initialNodes from './components/nodes';
import initialEdges from './components/edges';

import 'reactflow/dist/style.css';

const TestFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapToGrid={true}
        fitView
        attributionPosition="top-right"
      />
    </div>
  );
};

export default TestFlow;
