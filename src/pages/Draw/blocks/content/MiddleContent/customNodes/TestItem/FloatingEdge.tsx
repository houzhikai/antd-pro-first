import { useCallback } from 'react';
import {
  useStore,
  getStraightPath,
  EdgeLabelRenderer,
  BaseEdge,
} from 'reactflow';

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

  const [edgePath] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  const newEdgePath = edgePath.includes('NaN') ? 'M 176,100L 141,82' : edgePath;
  // const [edgePath, labelX, labelY] = getStraightPath({
  //   sourceX: sx,
  //   sourceY: sy,
  //   targetX: tx,
  //   targetY: ty,
  // });
  // const edgeX = sx + (tx - sx) * 0.25; // 你可以根据需要调整位置
  // const edgeY = sy + (ty - sy) * 0.25; // 你可以根据需要调整位置
  const edgeX = tx > sx ? sx + 20 : sx; // 你可以根据需要调整位置
  const edgeY = ty > sy ? sy : sy - 30; // 你可以根据需要调整位置
  const left = Number.isNaN(edgeX) ? 0 : edgeX;
  const top = Number.isNaN(edgeY) ? 0 : edgeY;
  return (
    <>
      {/* <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      /> */}
      <BaseEdge
        id={id}
        path={newEdgePath}
        markerEnd={markerEnd}
        style={style}
        label={label}
      />
      <EdgeLabelRenderer>
        {label && (
          <div
            style={{
              position: 'absolute',
              // transform: `translate(-40%, -40%) translate(${labelX}px,${labelY}px)`,
              left,
              top,
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
