export const getGlassPosition = (
  val,
  width,
  height,
  glassWidth,
  glassHeight,
) => {
  let value = { x: 0, y: height - glassHeight };
  switch (val) {
    case 'TopLeft':
      value = { x: 0, y: 0 };
      break;
    case 'TopRight':
      value = { x: width - glassWidth, y: 0 };
      break;
    case 'BottomLeft':
      value = { x: 0, y: height - glassHeight };
      break;
    case 'BottomRight':
      value = { x: width - glassWidth, y: height - glassHeight };
      break;
    default:
      value = { x: 0, y: height - glassHeight };
  }
  return value;
};
