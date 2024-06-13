export const getTooltipDutDetailsInfo = (
  scaleNumber,
  params,
  baseConversion,
) => {
  const scale = scaleNumber >= 1 ? Math.sqrt(scaleNumber) : 1;
  const X = params.data[0] * scale || '';
  const Y = params.data[1] * scale || '';
  const baseX =
    baseConversion === 'Hex'
      ? X.toString(16).toUpperCase()
      : baseConversion === 'Oct'
      ? X.toString(8)
      : X;
  const baseY =
    baseConversion === 'Hex'
      ? Y.toString(16).toUpperCase()
      : baseConversion === 'Oct'
      ? Y.toString(8)
      : Y;
  const pageX = String(Math.floor(params?.data?.[0] / 1024));
  const pageY = String(Math.floor(params?.data?.[0] / (1024 / scale / 8)));
  //  奇数反转，偶数不反转
  const isReversal = Number(pageY) / 2 !== 0;
  const getIO = (X, isReversal) => {
    const ioRange = Math.floor(Number(X) / 16);
    const io = isReversal ? 8 - (ioRange % 8) : ioRange % 8;
    return io;
  };
  const ioNumber = getIO(X, isReversal);
  return `
            XY: ${baseX}, ${baseY} <br />
            Block_XY: 0, 0 <br />
            Page_XY: ${pageX || ''}, ${pageY || ''} <br />
            IO: D${ioNumber} <br />
            `;
};
