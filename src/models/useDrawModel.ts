import { testUnitDataList } from '@/components/dataList/draw/testUnitDataList';
import { options } from '@/pages/Draw/blocks/NavAction/components/defaultData';
import { useState } from 'react';

export default () => {
  const [hardBinData, setHardBinData] = useState(options.HardBin);
  const [softBinData, setSoftBinData] = useState(options.SoftBin);

  const [testUnitData, setTestUnitData] = useState(testUnitDataList);
  const [isHiddenSide, setIsHiddenSide] = useState(true); // true 表示展示在页面上
  const [isHiddenFormat, setIsHiddenFormat] = useState(true); // true 表示展示在页面上
  const [isOnLine, setIsOnLine] = useState(false); // 判断是否为在线模式，模式false

  // 选中的测试项节点信息,属性值应与 Test-Unit List 保持一致
  const [selectedNode, setSelectedNode] = useState<any>({
    Class: '',
    Name: '',
    LoopCount: 1,
  });
  const [openBinMapForm, setOpenBinMapForm] = useState(false);
  const [openSubFlowModal, setOpenSubFlowModal] = useState(false);
  const [openMainFlowModal, setOpenMainFlowModal] = useState(false);
  const [openTestUnitModal, setOpenTestUnitModal] = useState(false);

  const [selected, setSelected] = useState(''); // 选中样式

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

  return {
    isHiddenSide,
    setIsHiddenSide,
    isHiddenFormat,
    setIsHiddenFormat,
    selectedNode,
    setSelectedNode,
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
  };
};
