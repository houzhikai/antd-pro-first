export const changeMode = (val: string) => {
  let value;
  switch (val) {
    case '0':
      value = '36';
      break;
    case '1':
      value = '32';
      break;
    case '2':
      value = '16';
      break;
    case '3':
      value = '8';
      break;
    case '4':
      value = '4';
      break;
    case '5':
      value = '2';
      break;
    case '6':
      value = '1';
      break;
    default:
      value = '-';
  }
  return value;
};
