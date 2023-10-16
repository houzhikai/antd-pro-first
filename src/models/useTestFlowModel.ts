import { useEffect, useState } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { options } from '@/pages/TestFlow/blocks/components/ReactFlowProvider/customNodes/OutBin/options';
import { selectFlowNodeEdge } from '@/pages/TestFlow/blocks/selectFlow';
import { initHandleList } from '@/pages/TestFlow/blocks/components/ReactFlowProvider/dataList';

export default () => {
  const [nodeName, setNodeName] = useState('start');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);
  const [selectFlow, setSelectFlow] = useState('test1');
  const [title, setTitle] = useState(`${selectFlow}_SPIFlash`); // 测试流名称

  const [theme, setTheme] = useState('#fff');

  const [variant, setVariant] = useState<any>('none');

  // const initialNodes = selectFlow === 'test1' ? mainFlowNode : subflowNode;
  // const initialEdges = selectFlow === 'test1' ? mainFlowEdges : subflowEdge;
  const initialNodes = selectFlowNodeEdge(selectFlow).node;
  const initialEdges = selectFlowNodeEdge(selectFlow).edge;
  // 保存时需要用到nodes和edges
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // hardBin、softBin 更新
  const [binMap, setBinMap] = useState(options);
  const [handleList, setHandleList] = useState(initHandleList);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setTitle(selectFlow);
  }, [initialEdges, initialNodes, selectFlow, nodeBg, nodeName]);

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
  // 合并相同的source属性
  const mergeArr = (arr) => {
    let dataInfo = {};
    arr.forEach((item) => {
      let { source } = item;
      if (!dataInfo[source]) {
        dataInfo[source] = {
          source,
          child: [],
        };
      }
      dataInfo[source].child.push({ target: item.target });
    });
    let list = Object.values(dataInfo);
    return list;
  };

  const mergeArrList = mergeArr(newArr);

  // 查看开始节点
  const nodesIdList = nodes.map((item) => item.id);
  const edgesTargetList = edges.map((item) => item.target);
  // 找到没有target的node，暂认为是开始节点
  const filterStartNodeItem = nodesIdList.filter(
    (item) => !edgesTargetList.includes(item),
  )[0];
  const startNode = nodes.filter((item) => item.id === filterStartNodeItem);
  const startNodeName = startNode.map((item) => item.data.label)[0];
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
    title,
    setTitle,
    mergeArrList,
    selectFlow,
    setSelectFlow,
    variant,
    setVariant,
    theme,
    setTheme,
    binMap,
    setBinMap,
    handleList,
    setHandleList,
    startNodeName,
  };
};
