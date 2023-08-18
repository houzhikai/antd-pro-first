import TextUpdaterNode from './components/CustomNode/TextUpdaterNode';
import CustomInputNode from './components/ReactFlowProvider/customNodes/CustomInput/CustomInputNode';
import LoopNode from './components/ReactFlowProvider/customNodes/LoopNode/LoopNode';
import MiddleNode from './components/ReactFlowProvider/customNodes/MiddleNode/MiddleNode';
import BadBin from './components/ReactFlowProvider/customNodes/OutBin/BadBinNode/BadBin';
import GoodBin from './components/ReactFlowProvider/customNodes/OutBin/GoodBinNode/GoodBin';
import Subflow from './components/ReactFlowProvider/customNodes/subflow/Subflow';
export const nodeTypes = {
  custom: TextUpdaterNode,
  'custom-input': CustomInputNode,
  'good-bin': GoodBin,
  'bad-bin': BadBin,
  'custom-middleNode': MiddleNode,
  'custom-subflow': Subflow,
  'custom-loop': LoopNode,
};
