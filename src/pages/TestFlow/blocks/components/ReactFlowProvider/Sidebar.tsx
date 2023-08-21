import CustomNode1 from './CustomNode1';
import { onDragStart } from '@/components/onDragStart';
import CustomInput from './customNodes/CustomInput';
import GoodBin from './customNodes/OutBin/GoodBinNode';
import BadBin from './customNodes/OutBin/BadBinNode';
import MiddleNode from './customNodes/MiddleNode';
import Subflow from './customNodes/subflow';
import LoopNode from './customNodes/LoopNode';
import { useModel } from '@umijs/max';

export default () => {
  const { theme } = useModel('useTestFlowModel');
  return (
    <aside style={{ background: theme === '#fff' ? '#fff' : '#272822' }}>
      <div className="description">您能将下面测试项拖到右边操作</div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
      {/* 自定义的上右下节点node */}
      <CustomNode1 />
      <CustomInput />
      <MiddleNode />
      <GoodBin margin="10px 0" />
      <BadBin />
      <LoopNode />
      <Subflow />
    </aside>
  );
};
