import { Button } from 'antd';
import { Panel, useReactFlow } from 'reactflow';
import Dagre from '@dagrejs/dagre';
import { useCallback } from 'react';
import { useModel } from '@umijs/max';

const DagreTree = () => {
  const { nodes, edges, setNodes, setEdges } = useModel('useTestFlowModel');

  const { fitView } = useReactFlow();
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  const getLayoutElements = (nodes, edges, options) => {
    g.setGraph({ rankdir: options.direction });

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) => g.setNode(node.id, node));

    Dagre.layout(g);

    return {
      nodes: nodes.map((node) => {
        const { x, y } = g.node(node.id);

        return { ...node, position: { x, y } };
      }),
      edges,
    };
  };
  const handleToggle = useCallback(
    (direction) => {
      const layout = getLayoutElements(nodes, edges, { direction });

      setNodes([...layout.nodes]);
      setEdges([...layout.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges],
  );

  return (
    <div>
      <Panel position="bottom-right">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={() => handleToggle('TB')}>vertical layout</Button>
          <Button onClick={() => handleToggle('LR')}>horizontal layout</Button>
        </div>
      </Panel>
    </div>
  );
};

export default DagreTree;
