export const modifyList = (selectedKeysList, selectedRowKeys, slot) => {
  const isAllExist = selectedRowKeys.every((item) =>
    selectedKeysList.includes(item),
  );
  //  如果 全部存在，则删除arr2的数据，否则，添加 arr2，且数组去重

  let newList: any = [];
  if (isAllExist) {
    if (selectedKeysList.length === 0) {
      newList.push(selectedRowKeys);
    } else {
      // item: '0-2',
      newList = selectedKeysList.filter((item) => item[0] !== String(slot));
    }
  } else {
    newList = selectedKeysList.concat(selectedRowKeys);
  }
  const list = Array.from(new Set(newList));
  return list;
};
