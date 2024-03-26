import { ProfileOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import DiagLogContent from "../RightPage/DiagLogContent";
import "../../index.css";

const OpenLog = ({ item, tabsItems, setTabsItems, setActiveTabsKey }: any) => {
  const handleOpenSlot = () => {
    const hasTabsItem = tabsItems
      .map((tabsItem: any) => tabsItem.key)
      .includes(item.key);
    if (!hasTabsItem) {
      setTabsItems([
        ...tabsItems,
        {
          label: `Slot ${item.key}`,
          children: <DiagLogContent />,
          key: item.key,
          closable: true,
        },
      ]);
    }
    setActiveTabsKey(item.key);
    // 点击icon不会影响展开效果
  };
  return (
    <div className={"extra-icon"} onClick={handleOpenSlot}>
      <Tooltip title="Open Diag">
        <ProfileOutlined />
      </Tooltip>
    </div>
  );
};

export default OpenLog;
