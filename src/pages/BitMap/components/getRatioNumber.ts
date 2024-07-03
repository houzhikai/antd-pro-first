export const getRatioNumber = (scaleNumber) => {
  let value = 1;
  switch (scaleNumber) {
    case 0.125:
      value = 0.01;
      break;
    case 0.2:
      value = 0.1;
      break;
    case 1:
      value = 0.2;
      break;
    case 4:
      value = 0.4;
      break;
    case 16:
      value = 0.6;
      break;
    case 64:
      value = 0.8;
      break;
    case 256:
      value = 1;
      break;
  }
  return value;
};
