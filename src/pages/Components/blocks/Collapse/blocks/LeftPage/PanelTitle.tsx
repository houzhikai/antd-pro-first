import { Checkbox } from "antd";
import "../../index.css";

const PanelTitle = ({
  item,
  selectedKeys,
  setSelectedKeys,
  setActiveKey,
}: any) => {
  const checkedSlotItemAll = item.child
    .map((p: any) => {
      const keys = [p.key];
      const childKeys = p.children.map((t: any) => t.key);
      return keys.concat(childKeys);
    })
    .flat(Infinity);
  const filterItemSlotList = selectedKeys.filter(
    (selectedKey: any) => selectedKey[0] === item.key
  );
  const indeterminate =
    filterItemSlotList.length > 0 &&
    filterItemSlotList.length < checkedSlotItemAll.length; // 半选样式
  const filterTitleKeysList = filterItemSlotList.filter(
    (filterItem: any) => filterItem.length !== 1
  );

  const handleChange = (event: any) => {
    setSelectedKeys((preList: any) => {
      //如果 点击勾选，则添加该slot的全部数组，如果取消勾选，则去除选择的数组
      const filterCheckedKeysList = preList.filter(
        (selectedKey: any) => selectedKey[0] !== item.key
      );
      const newList = event.target.checked
        ? Array.from(new Set([...preList, ...checkedSlotItemAll]))
        : filterCheckedKeysList;
      return newList;
    });
  };

  const handleClick = () => {
    setActiveKey((activeKeyList: any) => {
      const isIncludesActiveKey = activeKeyList.includes(item.key);
      if (isIncludesActiveKey) {
        // 移除 key
        const newList = activeKeyList.filter(
          (activeKey: any) => activeKey !== item.key
        );
        return newList;
      } else {
        // 添加 key
        return activeKeyList.concat(item.key);
      }
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Checkbox
          disabled={item.disabled}
          indeterminate={indeterminate}
          // 下面全部选中则默认为选中
          checked={filterTitleKeysList.length === checkedSlotItemAll.length}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }} onClick={handleClick}>
        <div className={"panelTitle"}>{item.title}</div>
        <div className={"panelStatus"}>{item.status}</div>
      </div>
    </div>
  );
};

export default PanelTitle;
