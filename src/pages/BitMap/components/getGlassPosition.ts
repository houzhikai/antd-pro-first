export const getGlassPosition = (
  val,
  width,
  height,
  glassWidth,
  glassHeight,
) => {
  let value = { x: 0, y: height - glassHeight, glassWidth, glassHeight };
  switch (val) {
    case 'top_left':
      value = { x: 0, y: 0, glassWidth, glassHeight };
      break;
    case 'top_right':
      value = { x: width - glassWidth, y: 0, glassWidth, glassHeight };
      break;
    case 'bottom_left':
      value = { x: 0, y: height - glassHeight, glassWidth, glassHeight };
      break;
    case 'bottom_right':
      value = {
        x: width - glassWidth,
        y: height - glassHeight,
        glassWidth,
        glassHeight,
      };
      break;
    default:
      value = { x: 0, y: height - glassHeight, glassWidth, glassHeight };
  }
  return value;
};
