export const getMaxAddress = (val: string) => {
  let value;
  switch (val) {
    case '0':
      value = '7FF';
      break;
    case '1':
      value = 'FFF';
      break;
    case '2':
      value = '1FFF';
      break;
    case '3':
      value = '3FFF';
      break;
    case '4':
      value = '7FFF';
      break;
    case '5':
      value = 'FFFF';
      break;
    case '6':
      value = '1FFFF';
      break;
    default:
      value = '-';
  }
  return value;
};
