// 获取 XY 的坐标
const getXY = (baseConversion, X, Y) => {
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
  return { baseX, baseY };
};

const getBlockXY = (X, Y, configInfo) => {
  const blockX = Math.floor(
    X / (configInfo.layoutConfig.xMax / configInfo.duts.row),
  );
  const blockY = Math.floor(
    Y / (configInfo.layoutConfig.yMax / configInfo.duts.col),
  );
  const isFirstRow =
    configInfo.continuous_block_arrange.direction.slice(0, 3) === 'row';

  const blockId = isFirstRow ? blockX + blockY * 2 : blockX * 2 + blockY;
  return { blockX, blockY, blockId };
};

const getPageXY = (X, Y, configInfo, blockId) => {
  const blockDotsPosition = configInfo.layoutConfig.dots;
  const pageDotsPosition = configInfo.continuous_page_arrange.origin;
  const isRowPageDirection =
    configInfo.continuous_page_arrange.direction.slice(0, 3) === 'row';
  let pageX = '';
  let pageY = '';
  // 初始化 pageX 的值
  const defaultPageX =
    Math.floor(
      X /
        (configInfo.layoutConfig.xMax /
          configInfo.duts.col /
          configInfo.blocks.col),
    ) % configInfo.blocks.col;
  // 初始化 pageY 的值
  const defaultPageY =
    Math.floor(
      Y /
        (configInfo.layoutConfig.yMax /
          configInfo.duts.row /
          configInfo.blocks.row),
    ) % configInfo.blocks.row;
  // 判断条件，整理 pageX pageY 的值
  if (blockDotsPosition === 'bottom_left') {
    if (pageDotsPosition === 'bottom_left') {
      pageX = String(defaultPageX);
      pageY = String(defaultPageY);
    } else if (pageDotsPosition === 'bottom_right') {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(defaultPageY);
    } else if (pageDotsPosition === 'top_right') {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    } else {
      pageX = String(defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    }
  } else if (blockDotsPosition === 'bottom_right') {
    if (pageDotsPosition === 'bottom_left') {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(defaultPageY);
    } else if (pageDotsPosition === 'bottom_right') {
      pageX = String(defaultPageX);
      pageY = String(defaultPageY);
    } else if (pageDotsPosition === 'top_right') {
      pageX = String(defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    } else {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    }
  } else if (blockDotsPosition === 'top_right') {
    if (pageDotsPosition === 'bottom_left') {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    } else if (pageDotsPosition === 'bottom_right') {
      pageX = String(defaultPageX);
      pageY = String(configInfo.blocks.col - 1 - defaultPageY);
    } else if (pageDotsPosition === 'top_right') {
      pageX = String(defaultPageX);
      pageY = String(defaultPageY);
    } else {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(defaultPageY);
    }
  } else {
    if (pageDotsPosition === 'bottom_left') {
      pageX = String(defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    } else if (pageDotsPosition === 'bottom_right') {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(configInfo.blocks.row - 1 - defaultPageY);
    } else if (pageDotsPosition === 'top_right') {
      pageX = String(configInfo.blocks.col - 1 - defaultPageX);
      pageY = String(defaultPageY);
    } else {
      pageX = String(defaultPageX);
      pageY = String(defaultPageY);
    }
  }
  const pageId = isRowPageDirection
    ? Number(pageX) +
      Number(pageY) * configInfo.blocks.col +
      configInfo.blocks.row * configInfo.blocks.col * blockId
    : Number(pageX) * configInfo.blocks.row +
      Number(pageY) +
      configInfo.blocks.row * configInfo.blocks.col * blockId;
  return { pageX, pageY, pageId };
};

const getIO = (X, isReversal, configInfo) => {
  const ioRange = Math.floor(Number(X) % configInfo.pages.col);
  const xxx = configInfo.pages.col / configInfo.dq;
  const io = isReversal
    ? configInfo.dq - 1 - Math.floor(ioRange / xxx)
    : Math.round(ioRange / xxx) - 1;
  return io;
};

export const getTooltipDutDetailsInfo = (
  scaleNumber,
  params,
  baseConversion,
  configInfo,
) => {
  // console.log({ configInfo });
  const scale = scaleNumber >= 1 ? Math.sqrt(scaleNumber) : 1;
  const X = params.data[0] * scale;
  const Y = params.data[1] * scale;
  // 获取 XY 的坐标
  const { baseX, baseY } = getXY(baseConversion, X, Y);
  // 获取 block 的坐标
  const { blockX, blockY, blockId } = getBlockXY(X, Y, configInfo);
  // 获取 page 的坐标
  const { pageX, pageY, pageId } = getPageXY(X, Y, configInfo, blockId);
  // 获取 IO
  const isReversal =
    configInfo.need_dq_direction_reserve === 'odd'
      ? Number(pageId) % 2 !== 0
      : Number(pageId) % 2 === 0;
  const ioNumber = getIO(X, isReversal, configInfo);

  return `
          XY: ${baseX}, ${baseY} <br />
          Block: B${blockId} {X=${blockX}, Y=${blockY}} <br />
          Page : P${pageId} {X=${pageX || ''}, Y=${pageY || ''}} <br />
          IO: D${ioNumber} <br />
        `;
};
