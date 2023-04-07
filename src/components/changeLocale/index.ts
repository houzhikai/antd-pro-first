export const changeLocale = (val: string) => {
  let value;
  switch (val) {
    case 'en-US':
      value = 'en-US';
      break;
    case 'zh-CN':
      value = 'zh-CN';
      break;
    default:
      value = 'zh-CN';
  }
  return value;
};
