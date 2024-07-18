export const getOutSideBlocks = (scaleNumber, detailLayout, position) => {
  const includeX = position === 'hasXY' || position === 'hasX';
  const includeY = position === 'hasXY' || position === 'hasY';
  return scaleNumber === 256
    ? [
        {
          // 上边线
          type: 'line',
          shape: {
            x1: includeY ? 40 : 0,
            x2: 1024 * 0.5,
            y1: includeX ? 40 : 0,
            y2: includeX ? 40 : 0,
          },
          style: { stroke: '#fff', lineWidth: 2 },
        },
        {
          // 右边线
          type: 'line',
          shape: {
            x1: 1024 * 0.5 - 10,
            x2: 1024 * 0.5 - 10,
            y1: includeX ? 40 : 0,
            y2: 1024 * 0.5,
          },
          style: { stroke: '#fff', lineWidth: 2 },
        },
        {
          // 下边线
          type: 'line',
          shape: {
            x1: includeY ? 40 : 0,
            x2: 1024 * 0.5,
            y1: 1024 * 0.5,
            y2: 1024 * 0.5,
          },
          style: { stroke: '#fff', lineWidth: 2 },
        },
        {
          // 左边线
          type: 'line',
          shape: {
            x1: position === 'hasY' || position === 'hasXY' ? 40 : 0,
            x2: position === 'hasY' || position === 'hasXY' ? 40 : 0,
            y1: position === 'hasX' || position === 'hasXY' ? 40 : 0,
            y2: 1024 * 0.5,
          },
          style: { stroke: '#fff', lineWidth: 2 },
        },
        // {
        //   type: 'line',
        //   shape: {
        //     x: position === 'hasY' || position === 'hasXY' ? 40 : 0,
        //     y: position === 'hasX' || position === 'hasXY' ? 40 : 0,
        //     width: detailLayout.width,
        //     height: detailLayout.height,
        //   },
        //   style: {
        //     stroke: '#fff',
        //     lineWidth: 4,
        //   },
        // },
        // {
        //   type: 'line',
        //   shape: {
        //     x: position === 'hasY' || position === 'hasXY' ? 40 : 0,
        //     y: position === 'hasX' || position === 'hasXY' ? 40 : 0,
        //     width: detailLayout.width,
        //     height: detailLayout.height,
        //   },
        //   style: {
        //     stroke: '#bfa',
        //     lineWidth: 4,
        //   },
        // },
        // {
        //   type: 'line',
        //   shape: {
        //     x: position === 'hasY' || position === 'hasXY' ? 40 : 0,
        //     y: position === 'hasX' || position === 'hasXY' ? 40 : 0,
        //     width: detailLayout.width,
        //     height: detailLayout.height,
        //   },
        //   style: {
        //     stroke: '#fba',
        //     lineWidth: 4,
        //   },
        // },
        // {
        //   type: 'line',
        //   shape: {
        //     x: position === 'hasY' || position === 'hasXY' ? 40 : 0,
        //     y: position === 'hasX' || position === 'hasXY' ? 40 : 0,
        //     width: detailLayout.width,
        //     height: detailLayout.height,
        //   },
        //   style: {
        //     stroke: '#000',
        //     lineWidth: 4,
        //   },
        // },
      ]
    : [];
};
