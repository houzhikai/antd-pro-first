import { Handle, Position, useStore } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import './index.less';
import { useModel } from '@umijs/max';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = { zIndex: 1 };

export default function CustomNode({ id, data }) {
  const { startNodeName } = useModel('useTestFlowModel');
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  //   const label = isTarget ? 'Drop here' : 'Drag to connect';

  return (
    <div className={startNodeName === data.label ? 'customNode' : ''}>
      {/* <div className="name1">Name: {data.label}</div> */}
      <InputToolTip defaultValue={data.label} className="name1" />
      <div
        className="customNodeBody"
        style={{
          borderStyle: isTarget ? 'dashed' : 'solid',
          backgroundColor: isTarget ? '#ffcce3' : '#ccd9f6',
        }}
      >
        {!isConnecting && (
          <Handle
            className="customHandle"
            position={Position.Right}
            type="source"
            style={sourceStyle}
          />
        )}
        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
        />
        我是测试项关键属性
      </div>
    </div>
  );
}
