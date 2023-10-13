import { useStore, Handle, Position } from 'reactflow';
import styles from './index.less';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = { zIndex: 1 };
const FenBinNode = ({ id, data }) => {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.customNodeBody}
        style={{
          borderStyle: isTarget ? 'dashed' : 'solid',
          backgroundColor: isTarget ? '#ccd9f6' : 'transparent',
        }}
      >
        {!isConnecting && (
          <Handle
            className={styles.customHandle}
            position={Position.Right}
            type="source"
            style={sourceStyle}
          />
        )}
        <Handle
          className={styles.customHandle}
          position={Position.Left}
          type="target"
        />
        {data.label}
      </div>
    </div>
  );
};

export default FenBinNode;
