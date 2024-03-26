import React from 'react';
import { Tabs } from 'antd';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const TabsPage = ({
  tabsItems,
  setTabsItems,
  activeTabsKey,
  setActiveTabsKey,
}: any) => {
  const onChange = (key: string) => {
    setActiveTabsKey(key);
  };

  const onEdit = (targetKey: TargetKey) => {
    // 删除
    const targetIndex = tabsItems.findIndex((pane:any) => pane.key === targetKey);
    const newPanes = tabsItems.filter((pane:any) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeTabsKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveTabsKey(key);
    }
    setTabsItems(newPanes);
  };

  return (
    <div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeTabsKey}
        type="editable-card"
        onEdit={onEdit}
        items={tabsItems}
      />
    </div>
  );
};

export default TabsPage;
