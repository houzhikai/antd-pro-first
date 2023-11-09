const autoFormatPosition = (nodes) => {
  // 横向排列
  let testUnitNumber = nodes.filter((item) => item.type !== 'fen-bin').length;
  const newNodes = nodes.map((item, index) => {
    if (item.type !== 'fen-bin') {
      return {
        ...item,
        position: { x: 0 + index * 200, y: 0 }, // x轴默认为0
      };
    }
    return {
      ...item,
      position: { x: 35 + (index - testUnitNumber) * 200, y: 240 }, // y轴默认为35，是第一个node节点的中间位置
    };
  });
  return { newNodes };
};

export default autoFormatPosition;
