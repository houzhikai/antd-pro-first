export const converse = (val: string) => {
  let value;
  switch (val) {
    case '0':
      value = 'X36';
      break;
    case '1':
      value = 'X32';
      break;
    case '2':
      value = 'X16';
      break;
    case '3':
      value = 'X8';
      break;
    case '4':
      value = 'X4';
      break;
    case '5':
      value = 'X2';
      break;
    case '6':
      value = 'X1';
      break;
    default:
      value = '-';
  }
  return value;
};
