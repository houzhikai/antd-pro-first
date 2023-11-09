import { useStore, Handle, Position } from 'reactflow';
import styles from './index.less';
import { useContext } from 'react';
import { NodesContext } from '../../../../MiddleContent';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = { zIndex: 1 };

const FenBinNode = ({ id, data, selected }) => {
  const testUnitParamsList: any = useContext(NodesContext);
  const params = testUnitParamsList?.softBinNameColorList?.filter(
    (item) => item.value === data.label,
  )[0];

  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  return (
    <div
      style={
        params?.value === data.label ? { background: params?.label } : undefined
      }
      className={
        selected ? `${styles.wrapper} ${styles.selected}` : styles.wrapper
      }
    >
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
        <div
          style={
            params?.label
              ? { color: 'white', fontSize: 18, fontWeight: 400 }
              : { color: '#000' }
          }
        >
          {data.label}
        </div>
      </div>
    </div>
  );
};

export default FenBinNode;
