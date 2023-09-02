import CustomNode from './customNodes/CustomNode';
import CustomInputNode from './customNodes/CustomInput/CustomInputNode';
import LoopNode from './customNodes/LoopNode/LoopNode';
import MiddleNode from './customNodes/MiddleNode/MiddleNode';
import BadBin from './customNodes/OutBin/BadBinNode/BadBin';
import GoodBin from './customNodes/OutBin/GoodBinNode/GoodBin';
import Subflow from './customNodes/subflow/Subflow';

export const nodeTypes: any = {
  'custom-input': CustomInputNode,
  'good-bin': GoodBin,
  'bad-bin': BadBin,
  'custom-middleNode': MiddleNode,
  'custom-subflow': Subflow,
  'custom-loop': LoopNode,
  custom: CustomNode,
};
