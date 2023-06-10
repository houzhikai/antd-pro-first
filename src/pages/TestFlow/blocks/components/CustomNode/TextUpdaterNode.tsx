import { Button } from 'antd';
import { Handle, NodeToolbar, Position } from 'reactflow';

function TextUpdaterNode({ data }) {
  function remModelData() {
    throw new Error('Function not implemented.');
  }

  return (
    <div style={{ border: '1px solid #1b1a2c', padding: '10px' }}>
      <NodeToolbar isVisible={data.toolbarVisible} position={Position.Top}>
        <Button
          danger
          onClick={() => {
            console.log(11);
            remModelData();
          }}
        >
          aaaaaaaaa
        </Button>
      </NodeToolbar>
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
