import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Checkbox, Collapse } from "antd";
import TreePage from "./TreePage";
import { analysisMenuList } from "../../data/analysisMenuList";
import OpenLog from "./OpenLog";
import PanelTitle from "./PanelTitle";

const MenuPage = ({
  setTabsItems,
  tabsItems,
  setActiveTabsKey,
  interfaceDataList,
  defalutSelectedKey,
}: any) => {
  const [selectedKeys, setSelectedKeys] = useState(defalutSelectedKey); // 选择所有的slot及以下树形结构的checkbox

  // 最初的数据源
  const slotList = analysisMenuList(interfaceDataList) || [];
  const defaultActiveKey = slotList?.[0]?.key || "0";
  const [activeKey, setActiveKey] = useState([defaultActiveKey]); // 控制折叠/展开的手风琴key值

  const allSelected = slotList.map((item) => {
    // const keyList = [item.key];
    const childKeysList = item.child.map((t: any) => t.key);
    const sunKeysList = item.child
      .map((p: any) => p.children.map((o: any) => o.key))
      .flat(Infinity);
    return childKeysList.concat(sunKeysList);
  });
  const allTreeCheckedList = allSelected.flat(Infinity);
  const handleAllChange = (e: any) => {
    setSelectedKeys(e.target.checked ? allTreeCheckedList : []);
  };
  const checkAll = selectedKeys.length === allTreeCheckedList.length;
  const indeterminate =
    selectedKeys.length > 0 && selectedKeys.length < allTreeCheckedList.length;

  const items: CollapseProps["items"] = slotList.map((item) => {
    return {
      key: item.key,
      showArrow: false,
      label: (
        <PanelTitle
          item={item}
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          setActiveKey={setActiveKey}
        />
      ),
      extra: (
        <OpenLog
          item={item}
          tabsItems={tabsItems}
          setTabsItems={setTabsItems}
          setActiveTabsKey={setActiveTabsKey}
        />
      ),
      children: (
        <TreePage
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          item={item}
        />
      ),
    };
  });
  return (
    <div>
      <Checkbox
        checked={checkAll}
        indeterminate={indeterminate}
        onChange={handleAllChange}
      >
        全选
      </Checkbox>
      <Collapse
        style={{ maxHeight: "650px", overflowY: "auto" }}
        activeKey={activeKey}
        items={items}
        collapsible="icon"
      />
    </div>
  );
};

export default MenuPage;
