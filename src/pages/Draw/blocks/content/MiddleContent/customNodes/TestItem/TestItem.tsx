import { Handle, Position, useStore } from 'reactflow';
import InputToolTip from '@/components/InputToolTip';
import styles from './index.less';
import { useModel } from '@umijs/max';
import { useContext } from 'react';
import { NodesContext } from '../../../MiddleContent';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = { zIndex: 1 };

export default function CustomNode({ id, data, selected }) {
  const testUnitParamsList: any = useContext(NodesContext);
  // const a = xxx.map((item) => item.data.label)[0];
  const isRepeat = testUnitParamsList.filterList.includes(data.label);
  // const { startNodeName } = useModel('useTestFlowModel');
  const { isEdit, setIsEdit } = useModel('useDrawModel');
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  //   const label = isTarget ? 'Drop here' : 'Drag to connect';
  const handleToggle = () => {
    setIsEdit(true);
  };
  const params = testUnitParamsList?.selectedNode?.filter(
    (item) => item.name === data.label,
  )[0];

  return (
    <div
      className={selected ? styles.selected : styles.default}
      //  className={startNodeName === data.label ? 'customNode' : ''}
    >
      {/* <div className="name1">Name: {data.label}</div> */}
      {/* <InputToolTip defaultValue={data.label} className="name1" /> */}
      {isEdit ? (
        <InputToolTip
          setIsEdit={setIsEdit}
          defaultValue={data.label}
          className={styles.name}
        />
      ) : (
        <div
          style={isRepeat ? { border: '1px solid red' } : undefined}
          className={styles.name1}
          onDoubleClick={handleToggle}
        >
          {data.label}
        </div>
      )}
      <div
        className={styles.customNodeBody}
        style={{
          borderStyle: isTarget ? 'dashed' : 'solid',
          backgroundColor: isTarget ? '#ffcce3' : '#428feb',
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
        <div style={{ color: '#f6f7fa' }}>
          <div className={styles.keyProperty}>{params?.number}</div>
          <div className={styles.keyProperty}>{params?.testMethod}</div>
        </div>
      </div>
    </div>
  );
}
