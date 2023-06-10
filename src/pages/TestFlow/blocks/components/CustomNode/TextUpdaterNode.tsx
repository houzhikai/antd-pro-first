import { Handle, Position } from 'reactflow';

function TextUpdaterNode({ data }) {
  return (
    <div style={{ border: '1px solid #1b1a2c', padding: '10px' }}>
      {data.label}
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        isConnectable={true}
      />
      <Handle type="source" position={Position.Right} id="b" />
      <Handle type="source" position={Position.Bottom} id="c" />
      {/* <Handle type="source" position={Position.Left} id="d" /> */}
    </div>
  );
}

export default TextUpdaterNode;
