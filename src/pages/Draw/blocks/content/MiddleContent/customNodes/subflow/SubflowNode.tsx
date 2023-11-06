import { Handle, Position, useStore } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import styles from './index.less';
import { useModel } from '@umijs/max';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = { zIndex: 1 };

const SubflowNode = ({ id, data, selected }) => {
  // const { startNodeName } = useModel('useTestFlowModel');
  const { isEdit, setIsEdit } = useModel('useDrawModel');
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  //   const label = isTarget ? 'Drop here' : 'Drag to connect';
  const handleToggle = () => {
    setIsEdit(true);
  };

  return (
    <div
      className={selected ? styles.selected : styles.default}
      //  className={startNodeName === data.label ? 'customNode' : ''}
    >
      {isEdit ? (
        <InputToolTip
          setIsEdit={setIsEdit}
          defaultValue={data.label}
          className={styles.name}
        />
      ) : (
        <div className={styles.name1} onDoubleClick={handleToggle}>
          {data.label}
        </div>
      )}
      <div
        className={styles.customNodeBody}
        style={{
          borderStyle: isTarget ? 'dashed' : 'solid',
          backgroundColor: isTarget ? '#ffcce3' : '#bfa',
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
        {/* 我是subflow关键属性 */}
      </div>
    </div>
  );
};
export default SubflowNode;
