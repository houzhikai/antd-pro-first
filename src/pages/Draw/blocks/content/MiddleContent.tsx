import { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  // Background,
  MarkerType,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  updateEdge,
  useKeyPress,
} from 'reactflow';

import { useModel } from '@umijs/max';
import { message } from 'antd';
// import DagreTree from './MiddleContent/DagreTree/DagreTree';
import { edgeTypes, nodeTypes } from './MiddleContent/nodeTypes';
import CustomConnectionLine from './MiddleContent/customNodes/TestItem/CustomConnectionLine';
// import DownloadButton from '@/pages/TestFlow/blocks/components/CustomNode/DownloadButton';

import 'reactflow/dist/style.css';
import styles from '../index.less';

let id = 0;
const getId = () => `${id++}`;

const MiddleContent = () => {
  const {
    // nodeName,
    // nodeBg,
    // nodeHidden,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    // variant,
    theme,
  } = useModel('useTestFlowModel');
  const {
    testUnitItem,
    setTestUniItem,
    softBinItem,
    setSoftBinItem,
    subflowItem,
    setSubflowItem,
    // setShowSubflowItemModal,
  } = useModel('useDrawModel');

  const edgeUpdateSuccessful = useRef(true);

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

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       // if (node.id === selectedNode.id) {
  //       if (node.selected) {
  //         node.data = {
  //           ...node.data,
  //           label: testUnitItem.Name || softBinItem.Name,
  //         };
  //       }

  //       return node;
  //     }),
  //   );
  // }, [nodeName, setNodes]);

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
      console.log(params, edges);
      if (params.source.includes('fen-bin')) {
        return message.error('不可连接！');
      }
      // 如果存在相反的edge，则报错
      const contraryEdge = edges.find((e) => {
        return e.target === params.source && e.source === params.target;
      });
      if (contraryEdge) {
        return message.error('已存在相反的连线！');
      }
      // edge 存在判断
      const existingEdge = edges.find((edge) => {
        return edge.source === params.source && edge.target === params.target;
      });
      if (existingEdge) {
        return message.error('连线已存在！');
      }
      // const existingEdge = edges.find((e) => {
      //   // 避免多个node同时进入同一个node的targetHandle
      //   if (e.target && e.targetHandle) {
      //     return (
      //       e.target === params.target && e.targetHandle === params.targetHandle
      //     );
      //   }
      //   if (e.sourceHandle) {
      //     return e.sourceHandle === params.sourceHandle;
      //   }
      //   if (e.targetHandle) {
      //     return e.targetHandle === params.targetHandle;
      //   }
      //   // 避免多个相同class的测试项和相同的方向连线不能连接
      //   if (e.sourceHandle || e.targetHandle) {
      //     return (
      //       e.sourceHandle === params.sourceHandle &&
      //       e.targetHandle === params.targetHandle &&
      //       e.source === params.source &&
      //       e.target === params.target
      //     );
      //   }
      //   return e.source === params.source && e.target === params.target;
      // });
      // // 校验 source 不能是同一个测试项的port
      // const hasEdge = edges.filter(
      //   (item) =>
      //     item.source === params.source &&
      //     item.sourceHandle === params.sourceHandle,
      // );
      // if (existingEdge || hasEdge.length > 0) {
      //   return message.error('Edge already exists!');
      // }
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges, edges],
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
      const number = getId();
      const newNode = (type) => {
        if (type === 'test-method') {
          return {
            id: `${type}-${testUnitItem.name}-${number}`,
            type,
            position,
            data: { label: `${testUnitItem.name}-${number}` },
            width: 150,
            height: 100,
            params: {
              testMethod: testUnitItem.testMethod,
              isFlowUnit: testUnitItem.isFlowUnit,
              isStartUnit: testUnitItem.isStartUnit,
              name: `${testUnitItem.name}-${number}`,
              number: testUnitItem.number,
              // loopCount: testUnitItem.loopCount, // 暂时不用
              targetFlowName: testUnitItem.targetFlowName,
              variables: testUnitItem.variables,
            },
          };
          // }
          // else if (type === 'subflow') {
          //   return {
          //     id: `${type}-${subflowItem.name}`
          //   };
          // }
        } else {
          return {
            id: `${type}-${softBinItem.Name}-${number}`,
            type,
            position,
            data: { label: softBinItem.Name },
            params: {},
          };
        }
      };
      console.log('drop', newNode(type));
      setNodes((nds) => nds.concat(newNode(type)));
      setTestUniItem({
        key: 999,
        testMethod: 'BaseTestItem',
        isFlowUnit: false,
        isStartUnit: true,
        name: 'BaseTestItem',
        number: '000',
        loopCount: 1,
        targetFlowName: '',
        variables: [],
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
      setSubflowItem({
        key: 'subflow-1',
        type: 'subflow',
        name: '',
      });
    },
    [reactFlowInstance, testUnitItem, softBinItem, subflowItem, setTestUniItem],
  );

  const defaultEdgeOptions = {
    style: { strokeWidth: 1, stroke: 'black' },
    type: 'floating',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'black',
    },
    label: '0',
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

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) => {
      edgeUpdateSuccessful.current = true;
      // 移动edges时的判断是否存在已有的port
      // const existingEdge = edges.find((item) => {
      //   if (item.source) {
      //     return (
      //       item.source === newConnection.source &&
      //       item.sourceHandle === newConnection.sourceHandle
      //     );
      //   }
      //   if (item.target) {
      //     return (
      //       item.target === newConnection.target &&
      //       item.targetHandle === newConnection.targetHandle
      //     );
      //   }
      //   return (
      //     item.target === newConnection.target &&
      //     item.targetHandle === newConnection.targetHandle
      //   );
      // });
      // if (existingEdge) {
      //   return message.error('Edge already exists, can not move!');
      // }
      setEdges((els) => updateEdge(oldEdge, newConnection, els));
    },
    [edges, setEdges],
  );

  // const handleDoubleClick = (e, node) => {
  //   if (node.type === 'subflow') {
  //     console.log(e, node);
  //     setShowSubflowItemModal(true);
  //   }
  // };

  // const onEdgeUpdateStart = useCallback(() => {
  //   edgeUpdateSuccessful.current = false;
  // }, []);

  // const onEdgeUpdateEnd = useCallback((_, edge) => {
  //   if (!edgeUpdateSuccessful.current) {
  //     setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  //   }
  //   edgeUpdateSuccessful.current = true;
  // }, []);

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
              edgeTypes={edgeTypes}
              onNodeClick={handleNodeClick}
              // onNodeDoubleClick={handleDoubleClick}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onEdgeUpdate={onEdgeUpdate}
              // onEdgeUpdateStart={onEdgeUpdateStart} // 如果放到node上面将被清除连线，暂不需要该功能
              // onEdgeUpdateEnd={onEdgeUpdateEnd}  // 如果放到node上面将被清除连线，暂不需要该功能
              onNodesDelete={onNodesDelete}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              defaultEdgeOptions={defaultEdgeOptions}
              deleteKeyCode={deleteType} // 删除键快捷方式，首字母大写
              style={{ backgroundColor: theme }} // 流程图的背景颜色
              connectionLineComponent={CustomConnectionLine}
              connectionLineStyle={{
                // 连接两个node时连线样式
                strokeWidth: 1,
                stroke: 'black',
              }}
            >
              {/* 放在右下角的操作栏,暂时隐藏，位置用来放缩略图 */}
              <MiniMap nodeStrokeWidth={3} zoomable pannable />
              {/* <DagreTree />
              {variant !== 'none' ? (
                <Background color="#ccc" variant={variant} />
              ) : null} */}
              {/* <CustomEdit />  */}

              {/* <DownloadButton /> */}
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default MiddleContent;
