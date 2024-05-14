export const convertHexToBinary = (hexStr) => {
  const regexp = /^[0-9a-fA-F]+$/;
  // 如果符合16进制数要求，则转换成二进制数
  if (regexp.test(hexStr)) {
    let binary = '';
    for (let i = 0; i < hexStr.length; i++) {
      const decimal = parseInt(hexStr[i], 16); // 将16进制数转换为十进制
      const bin = ('0000' + decimal.toString(2)).slice(-4); // 将十进制转换为二进制，并确保二进制字符串为4位
      binary += bin;
    }
    return binary;
  }
};
