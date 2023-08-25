import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { subflowEdge, subflowNode } from '../../CustomFlow/subflow';

import styles from './index.less';

const Subflow = () => {
  let { nodes, setNodes, edges, setEdges } = useModel('useTestFlowModel');
  let newNodes: any = [];
  let newEdges: any = [];
  useEffect(() => {
    newNodes = nodes.concat(subflowNode);
    newEdges = edges.concat(subflowEdge);
    // console.log({ nodes, subflowNode, subflowEdge, newNodes });
    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  return (
    <div>
      <Handle
        className={styles.top}
        type="target"
        position={Position.Top}
        id="a"
      />
      <Handle
        className={styles.left}
        type="target"
        position={Position.Left}
        id="b"
      />
      <Handle
        className={styles.right}
        type="target"
        position={Position.Right}
        id="c"
      />
      <Handle
        className={styles.bottom}
        type="target"
        position={Position.Bottom}
        id="d"
      />
    </div>
  );
};

export default Subflow;
