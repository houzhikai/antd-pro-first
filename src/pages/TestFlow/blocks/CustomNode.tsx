import { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
} from 'reactflow';

import CustomEdit from './components/CustomNode/CustomEdit';
import DownloadButton from './components/CustomNode/DownloadButton';
import TextUpdaterNode from './components/CustomNode/TextUpdaterNode';
import { useModel } from '@umijs/max';
import { message } from 'antd';

import 'reactflow/dist/style.css';
import './components/ReactFlowProvider/indx.less';

let id = 0;
const getId = () => `custom_${id++}`;
// defined outside of the component
const nodeTypes = { custom: TextUpdaterNode };

const DnDFlow = () => {
  const {
    nodeName,
    nodeBg,
    nodeHidden,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
  } = useModel('useTestFlowModel');

  const reactFlowWrapper = useRef<any>(null);

  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

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

  const onConnect = useCallback(
    (params) => {
      const existingEdge = edges.find((e) => {
        if (e.sourceHandle || e.targetHandle) {
          return (
            e.sourceHandle === params.sourceHandle &&
            e.targetHandle === params.targetHandle
          );
        }
        return e.source === params.source && e.target === params.target;
      });
      // console.log(
      //   'edges',
      //   edges,
      //   'existingEdge',
      //   existingEdge,
      //   'params',
      //   params,
      // );
      if (existingEdge) {
        return message.error('Edge already exists!');
      }

      setEdges((eds) => addEdge(params, eds));
    },
    [edges],
  );

  const onNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge),
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            })),
          );

          return [...remainingEdges, ...createdEdges];
        }, edges),
      );
    },
    [nodes, edges],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodesDelete={onNodesDelete}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <CustomEdit />
            <DownloadButton />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
