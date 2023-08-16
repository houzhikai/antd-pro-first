import TextUpdaterNode from './components/CustomNode/TextUpdaterNode';
import CustomInputNode from './components/ReactFlowProvider/customNodes/CustomInput/CustomInputNode';
import BadBin from './components/ReactFlowProvider/customNodes/OutBin/BadBin.tsx/CustomBin';
import GoodBin from './components/ReactFlowProvider/customNodes/OutBin/GoodBin.tsx';
export const nodeTypes = {
  custom: TextUpdaterNode,
  'custom-input': CustomInputNode,
  'good-bin': GoodBin,
  'bad-bin': BadBin,
};
