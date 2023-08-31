import CustomInputNode from './customNodes/CustomInput/CustomInputNode';
import LoopNode from './customNodes/LoopNode';
import MiddleNode from './customNodes/MiddleNode';
import BadBin from './customNodes/OutBin/BadBinNode';
import GoodBin from './customNodes/OutBin/GoodBinNode';
import Subflow from './customNodes/subflow';

export const nodeTypes: any = {
  'custom-input': CustomInputNode,
  'good-bin': GoodBin,
  'bad-bin': BadBin,
  'custom-middleNode': MiddleNode,
  'custom-subflow': Subflow,
  'custom-loop': LoopNode,
};
