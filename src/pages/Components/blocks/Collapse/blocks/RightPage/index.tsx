import TabsPage from './TabsPage';

const RightPage = ({
  tabsItems,
  setTabsItems,
  activeTabsKey,
  setActiveTabsKey,
}: any) => {
  return (
    <div style={{ flex: '1' }}>
      <TabsPage
        tabsItems={tabsItems}
        setTabsItems={setTabsItems}
        activeTabsKey={activeTabsKey}
        setActiveTabsKey={setActiveTabsKey}
      />
    </div>
  );
};

export default RightPage;
