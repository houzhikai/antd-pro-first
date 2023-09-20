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

import { useModel } from '@umijs/max';
import { message } from 'antd';
import DagreTree from './MiddleContent/DagreTree/DagreTree';
import { nodeTypes } from './MiddleContent/nodeTypes';

import 'reactflow/dist/style.css';
import styles from '../index.less';

let id = 0;
const getId = () => `${id++}`;

const MiddleContent = () => {
  const {
    nodeName,
    // nodeBg,
    // nodeHidden,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    variant,
    theme,
  } = useModel('useTestFlowModel');
  const { testUnitItem, setTestUniItem, softBinItem, setSoftBinItem } =
    useModel('useDrawModel');

  const deleteKey = useKeyPress('Delete');

  const reactFlowWrapper = useRef<any>(null);
  type DeleteTypeProps = string | string[] | null;
  const [deleteType, setDeleteType] = useState<DeleteTypeProps>('Delete');

  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  // 监听 delete 键盘事件，按下为 true，抬起为false， deleteType为null时，表示不可删除
  useEffect(() => {
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
        // if (node.id === selectedNode.id) {
        if (node.selected) {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      }),
    );
  }, [nodeName, setNodes]);

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === selectedNode.id) {
  //         node.style = { backgroundColor: nodeBg };
  //       }
  //       return node;
  //     }),
  //   );
  // }, [nodeBg]);

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === '1') {
  //         // when you update a simple type you can just update the value
  //         node.hidden = nodeHidden;
  //       }

  //       return node;
  //     }),
  //   );
  //   setEdges((eds) =>
  //     eds.map((edge) => {
  //       if (edge.id === 'e1-2') {
  //         edge.hidden = nodeHidden;
  //       }

  //       return edge;
  //     }),
  //   );
  // }, [nodeHidden, setNodes, setEdges]);

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
      // setSelectedNode({}); // 删除时同时隐藏右边的测试项属性
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
        // data: { label: `${type}${id} node` },
        data: { label: testUnitItem.Name || softBinItem.Name },
        LoopCount: testUnitItem.LoopCount,
        Class: testUnitItem.Class,
      };
      setTestUniItem({
        key: 999,
        Class: '',
        Name: '',
        LoopCount: testUnitItem.LoopCount,
      }); // 初始化testUnitItem，为了不影响之前拖动的测试项
      setSoftBinItem({
        CheckOverflow: true,
        Color: 'Green',
        Comment: '',
        HardBin: 'HB1',
        MaxCount: 65536,
        Name: 'FB4',
        Number: 2001,
        key: 3,
      });
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, testUnitItem, softBinItem],
  );

  const defaultEdgeOptions = {
    // style: { strokeWidth: 3, stroke: 'black' },
    type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'black',
    },
  };

  const handleNodeClick = (_, node) => {
    // 选中node节点，为了展示右边的信息
    // setSelectedNode((obj) => {
    //   return {
    //     ...obj,
    //     Name: node.data.label,
    //     Class: node.data.label,
    //     LoopCount: node.loopCount,
    //   };
    // });
    if (node.parentNode) {
      setDeleteType(null);
    } else if (node.type === 'group' || node.id.includes('subflow')) {
      // node.type === 'group' 需要排除非subflow的情况
      setDeleteType('isDelete');
    }
  };

  return (
    <div className={styles.draw}>
      <div className="dndflow">
        <ReactFlowProvider>
          {/* 必须要加height属性，不然看不到react flow */}
          <div
            style={{ height: 'calc(100vh - 145px)' }}
            className="reactflow-wrapper"
            ref={reactFlowWrapper}
          >
            <ReactFlow
              // key={Math.round(Math.random())}
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={handleNodeClick}
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
              {variant !== 'none' ? (
                <Background color="#ccc" variant={variant} />
              ) : null}
              {/* <CustomEdit /> 
              <DownloadButton /> */}
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default MiddleContent;
