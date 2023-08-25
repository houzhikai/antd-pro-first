import { Button } from 'antd';
import { Panel, useReactFlow } from 'reactflow';
import Dagre from '@dagrejs/dagre';
import { useCallback } from 'react';
import { useModel } from '@umijs/max';
import ChangeBackground from './components/ReactFlowProvider/ChangeBackground';

const DagreTree = () => {
  const { nodes, edges, setNodes, setEdges, theme, setTheme } =
    useModel('useTestFlowModel');

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

  const handleClick = () => {
    setTheme((c) => (c === '#fff' ? '#272822' : '#fff'));
  };

  return (
    <div>
      <Panel position="bottom-right">
        <ChangeBackground />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={handleClick}>
            {theme === '#fff' ? '浅色主题' : '暗色主题'}
          </Button>
          <Button onClick={() => handleToggle('TB')}>vertical layout</Button>
          <Button onClick={() => handleToggle('LR')}>horizontal layout</Button>
        </div>
      </Panel>
    </div>
  );
};

export default DagreTree;
