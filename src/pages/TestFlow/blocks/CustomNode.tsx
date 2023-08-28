import { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  MarkerType,
  ReactFlowProvider,
  addEdge,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  useKeyPress,
} from 'reactflow';

import DagreTree from './components/ReactFlowProvider/DagreTree/DagreTree';
// import CustomEdit from './components/CustomNode/CustomEdit';
// import DownloadButton from './components/CustomNode/DownloadButton';
import { useModel } from '@umijs/max';
import { message } from 'antd';
import { nodeTypes } from '@/pages/TestFlow/blocks/nodeTypes';

import 'reactflow/dist/style.css';
import './components/ReactFlowProvider/indx.less';

let id = 0;
const getId = () => `custom_${id++}`;
// defined outside of the component

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
    variant,
    theme,
  } = useModel('useTestFlowModel');
  const deleteKey = useKeyPress('Delete');

  const reactFlowWrapper = useRef<any>(null);
  type DeleteTypeProps = string | string[] | null;
  const [deleteType, setDeleteType] = useState<DeleteTypeProps>('Delete');

  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  // 监听 delete 键盘事件，按下为 true，抬起为false， deleteType为null时，表示不可删除
  useEffect(() => {
    console.log({ deleteKey, deleteType });
    if (deleteKey && !deleteType) {
      message.error('subflow中的节点不可在流程图中删除', 6);
    } else if (deleteKey && deleteType === 'isDelete') {
      setDeleteType('Delete');
      message.warning('请再次输入Delete键删除该subflow', 6);
    }
  }, [deleteKey]);

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
        data: { label: `${type}${id} node` },
        // parentNode: '1',
        // extends: 'parent'
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  const defaultEdgeOptions = {
    // style: { strokeWidth: 3, stroke: 'black' },
    type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'black',
    },
  };

  const handleClick = useCallback(
    (e, node) => {
      console.log({ node });
      if (node.parentNode) {
        setDeleteType(null);
      } else if (node.type === 'group' || node.id.includes('subflow')) {
        // node.type === 'group' 需要排除非subflow的情况
        setDeleteType('isDelete');
      }
    },
    [deleteType],
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodeClick={handleClick}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodesDelete={onNodesDelete}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            defaultEdgeOptions={defaultEdgeOptions}
            deleteKeyCode={deleteType} // 删除键快捷方式，首字母大写
            style={{ backgroundColor: theme }} // 流程图的背景颜色
          >
            {/* 放在右下角的操作栏 */}
            <DagreTree />
            <Background color="#ccc" variant={variant} />
            {/* <CustomEdit />
            <DownloadButton /> */}
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
