import {
  testUnitDataList,
  TestUnitDataListProps,
} from '@/components/dataList/draw/testUnitDataList';
import {
  options,
  SoftBinDataSourceType,
} from '@/pages/Draw/blocks/NavAction/components/defaultData';
import { subflowIconList } from '@/pages/Draw/blocks/content/LeftContent/components/subflowIconList';
import { useEffect, useState } from 'react';
import flows from '@/components/dataList/draw/flow.json';
import flow2 from '@/components/dataList/draw/flow2.json';
// import analyzeFlow from '@/components/analyzeFlow';
import { testFile } from '@/components/analyzeFlow/testFile';

export default () => {
  const [hardBinData, setHardBinData] = useState(options.HardBin);
  const [softBinData, setSoftBinData] = useState(options.SoftBin);
  const [softBinItem, setSoftBinItem] = useState<SoftBinDataSourceType>({
    CheckOverflow: true,
    Color: 'Green',
    Comment: '',
    HardBin: 'HB1',
    MaxCount: 65536,
    Name: 'FB4',
    Number: 2001,
    key: 3,
  }); // softBin 列表

  const [subflowList, setSubflowList] = useState(subflowIconList); //测试项列表
  const [testUnitData, setTestUnitData] = useState(testUnitDataList); //测试项列表
  const [testUnitItem, setTestUniItem] = useState<TestUnitDataListProps>({
    key: 999,
    testMethod: 'BaseTestItem',
    isFlowUnit: false,
    isStartUnit: true,
    name: 'BaseTestItem',
    number: '000',
    loopCount: 1,
    targetFlowName: '',
    variables: [],
  }); //测试项列表
  const [subflowItem, setSubflowItem] = useState<any>({
    key: 'subflow-1',
    type: 'subflow',
    name: '',
  }); // subflow 测试项想属性
  const [isHiddenSide, setIsHiddenSide] = useState(true); // true 表示展示在页面上
  const [isHiddenFormat, setIsHiddenFormat] = useState(true); // true 表示展示在页面上
  const [isOnLine, setIsOnLine] = useState(false); // 判断是否为在线模式，模式false

  // 选中的测试项节点信息,属性值应与 Test-Unit List 保持一致，都用 nodes中的selected属性代替
  // const [selectedNode, setSelectedNode] = useState<any>({
  //   Class: '',
  //   Name: '',
  //   LoopCount: 1,
  // });
  const [openBinMapForm, setOpenBinMapForm] = useState(false);
  const [openSubFlowModal, setOpenSubFlowModal] = useState(false);
  const [openMainFlowModal, setOpenMainFlowModal] = useState(false);
  interface OpenTestUnitModalProps {
    param: 'add' | 'edit';
    isOpen: boolean;
    values: any;
  }
  const [openTestUnitModal, setOpenTestUnitModal] =
    useState<OpenTestUnitModalProps>({
      param: 'add', // 两个属性，一个是添加新的 test unit，一个是修改 test unit
      isOpen: false,
      values: {},
    });
  const [showSubflowItemModal, setShowSubflowItemModal] = useState(false);
  const [addTestItemModal, setAddTestItemModal] = useState(false); // 拖动基础测试项模板时打开弹窗

  const [openVariablesModal, setOpenVariablesModal] = useState({
    isOpen: false,
    values: [],
  });

  const defaultShowFlowItem = flow2.testFlows.filter((item) => item.isActive)[0]
    .flowName;
  const [activeTestOrFlowItem, setActiveTestOrFlowItem] =
    useState(defaultShowFlowItem);

  const mainflowParams = testFile(flow2).mainflowList.filter(
    (item) => item.flowName === defaultShowFlowItem,
  )[0].flowParams;
  const globalVariables = mainflowParams.globalVariables.map((item, index) => {
    return {
      key: index,
      param: item.param,
      value: item.value,
    };
  });
  const mainParams = Object.assign(mainflowParams, { globalVariables });
  const [activeTestOrFlowItemParams, setActiveTestOrFlowItemParams] =
    useState(mainParams);
  useEffect(() => {
    setActiveTestOrFlowItemParams(mainParams);
  }, [mainParams]);

  const [selected, setSelected] = useState(''); // 选中样式

  const [isEdit, setIsEdit] = useState(false); // 测试项/subflow Name是否可点击

  const [togglePort, setTogglePort] = useState('Top');

  // softBin 中的 HardBin 选择框中的options 列表
  const [hardBinNameList, setHardBinNameList] = useState(
    hardBinData
      .map((item) => item.Name)
      .map((item) => ({
        value: item,
        label: item,
      })),
  );
  const [repeatHardBinNameList, setRepeatHardBinNameList] = useState([]); // hardBin name重复值列表
  const [repeatSoftBinNameList, setRepeatSoftBinNameList] = useState([]); // softBin name重复值列表
  let softBinPortId = 0;
  const getId = () => `${softBinPortId++}`;
  // console.log('简单的flows', analyzeFlow(flows));
  console.log('复杂的flows', testFile(flow2));

  const mainFlowList = testFile(flow2).mainflowList.map((item) => {
    return {
      type: 'mainflow',
      name: item.flowName,
      mainFlowNode: item.flowNodes,
      mainFlowEdges: item.flowEdges,
      param: item.flowParams,
    };
  });

  const subFlowList = testFile(flow2).subflowList.map((item) => {
    return {
      type: 'subflow',
      name: item.flowName,
      subFlowNode: item.flowNodes,
      subFlowEdge: item.flowEdges,
      param: item.flowParams,
      testUnitParams: item.testUnitParams,
    };
  });

  return {
    isHiddenSide,
    setIsHiddenSide,
    isHiddenFormat,
    setIsHiddenFormat,
    // selectedNode,
    // setSelectedNode,
    openBinMapForm,
    setOpenBinMapForm,
    openMainFlowModal,
    setOpenMainFlowModal,
    hardBinData,
    setHardBinData,
    softBinData,
    setSoftBinData,
    options,
    hardBinNameList,
    setHardBinNameList,
    isOnLine,
    setIsOnLine,
    openTestUnitModal,
    setOpenTestUnitModal,
    testUnitData,
    setTestUnitData,
    openSubFlowModal,
    setOpenSubFlowModal,
    selected,
    setSelected,
    repeatHardBinNameList,
    setRepeatHardBinNameList,
    repeatSoftBinNameList,
    setRepeatSoftBinNameList,
    togglePort,
    setTogglePort,
    getId,
    testUnitItem,
    setTestUniItem,
    softBinItem,
    setSoftBinItem,
    subflowItem,
    setSubflowItem,
    showSubflowItemModal,
    setShowSubflowItemModal,
    addTestItemModal,
    setAddTestItemModal,
    subflowList,
    setSubflowList,
    isEdit,
    setIsEdit,
    activeTestOrFlowItem,
    setActiveTestOrFlowItem,
    flows,
    mainFlowList,
    subFlowList,
    activeTestOrFlowItemParams,
    setActiveTestOrFlowItemParams,
    openVariablesModal,
    setOpenVariablesModal,
  };
};
