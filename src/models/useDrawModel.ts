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

  const [selectedNode, setSelectedNode] = useState<any>({});
  const [openBinMapForm, setOpenBinMapForm] = useState(false);
  const [openSubFlowModal, setOpenSubFlowModal] = useState(false);
  const [openMainFlowModal, setOpenMainFlowModal] = useState(false);
  const [openTestUnitModal, setOpenTestUnitModal] = useState(false);

  const [selected, setSelected] = useState(''); // 选中样式

  // softBin 中的 HardBin 选择框中的options 列表
  const [hardBinNameList, setHardBinNameList] = useState(
    hardBinData
      .map((item) => item.Name)
      .map((item) => ({
        value: item,
        label: item,
      })),
  );

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
  };
};
