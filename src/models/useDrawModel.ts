import { options } from '@/pages/Draw/blocks/NavAction/components/defaultData';
import { useState } from 'react';

export default () => {
  const [hardBinData, setHardBinData] = useState(options.HardBin);
  const [softBinData, setSoftBinData] = useState(options.SoftBin);
  const [isHiddenSide, setIsHiddenSide] = useState(true); // true 表示展示在页面上
  const [isHiddenFormat, setIsHiddenFormat] = useState(true); // true 表示展示在页面上

  const [selectedNode, setSelectedNode] = useState<any>({});
  const [openBinMapForm, setOpenBinMapForm] = useState(false);
  const [openMainFlowModal, setOpenMainFlowModal] = useState(false);

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
  };
};
