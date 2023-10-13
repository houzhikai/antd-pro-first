import { useCallback } from 'react';
import { useStore, getStraightPath, EdgeLabelRenderer } from 'reactflow';

import { getEdgeParams } from './utils';

function FloatingEdge({ id, source, target, markerEnd, style, label }) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source]),
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target]),
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />
      <EdgeLabelRenderer>
        {label && (
          <div
            style={{
              position: 'absolute',
              transform: `translate(-40%, -40%) translate(${labelX}px,${labelY}px)`,
              background: 'transparent',
              fontSize: 12,
              fontWeight: 700,
              margin: '10px -20px',
            }}
          >
            {label}
          </div>
        )}
      </EdgeLabelRenderer>
    </>
  );
}

export default FloatingEdge;
