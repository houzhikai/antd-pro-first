export const getSingleGraphic = (scaleNumber, detailLayout) => {
  return scaleNumber === 256
    ? [
        {
          type: 'rect',
          shape: {
            x: 31 + 20,
            y: 31,
            width: (detailLayout.width * 94) / 100,
            height: (detailLayout.height * 90) / 100,
          },
          style: {
            fill: 'none',
            stroke: '#fff',
            lineWidth: 6,
          },
        },
      ]
    : [];
};
