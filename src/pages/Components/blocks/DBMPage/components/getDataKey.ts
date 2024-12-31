export const getDataKey = (val: string) => {
  let value;
  switch (val) {
    case '0':
      value = 'G';
      break;
    case '1':
      value = 'H';
      break;
    case '2':
      value = 'I';
      break;
    case '3':
      value = 'J';
      break;
    case '4':
      value = 'K';
      break;
    case '5':
      value = 'L';
      break;
    case '6':
      value = 'M';
      break;
    case '7':
      value = 'N';
      break;
    case '8':
      value = 'O';
      break;
    case '9':
      value = 'P';
      break;
    case 'A':
      value = 'A';
      break;
    case 'B':
      value = 'B';
      break;
    case 'C':
      value = 'C';
      break;
    case 'D':
      value = 'D';
      break;
    case 'E':
      value = 'E';
      break;
    case 'F':
      value = 'F';
      break;
    default:
      value = '';
  }
  return value;
};
