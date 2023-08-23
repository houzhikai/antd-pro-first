import { useEffect, useState } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { mainFlowNode } from '@/pages/TestFlow/blocks/components/CustomNode/initNodes';
import { mainFlowEdges } from '@/pages/TestFlow/blocks/components/CustomNode/initEdges';
import { subflowNode } from '@/pages/TestFlow/blocks/components/ReactFlowProvider/customNodes/subflow/node';
import { subflowEdge } from '@/pages/TestFlow/blocks/components/ReactFlowProvider/customNodes/subflow/edges';
import { random } from '@/components/random';
import { options } from '@/pages/TestFlow/blocks/components/ReactFlowProvider/customNodes/OutBin/options';
// \u4e00-\u9fa5_a-zA-Z0-9_]{11}

export default () => {
  const [nodeName, setNodeName] = useState('start');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);
  const [selectFlow, setSelectFlow] = useState('test1');
  const [title, setTitle] = useState(`${random()}_SPIFlash`); // 测试流名称

  const [theme, setTheme] = useState('#fff');

  const [variant, setVariant] = useState<any>('cross');

  const initialNodes = selectFlow === 'test1' ? mainFlowNode : subflowNode;
  const initialEdges = selectFlow === 'test1' ? mainFlowEdges : subflowEdge;
  // 保存时需要用到nodes和edges
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // hardBin、softBin 更新
  const [binMap, setBinMap] = useState(options);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialEdges, initialNodes]);

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
  };
};
