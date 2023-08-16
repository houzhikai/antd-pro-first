import CustomNode1 from './CustomNode1';
import { onDragStart } from '@/components/onDragStart';
import CustomInput from './customNodes/CustomInput';
import GoodBin from './customNodes/OutBin/GoodBin.tsx';
import BadBin from './customNodes/OutBin/BadBin.tsx';

export default () => {
  return (
    <aside>
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
      <GoodBin />
      <BadBin />
    </aside>
  );
};
