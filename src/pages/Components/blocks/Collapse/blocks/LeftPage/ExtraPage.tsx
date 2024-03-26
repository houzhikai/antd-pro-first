import { Checkbox, Tooltip } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import DiagLogContent from '../RightPage/DiagLogContent';
import  '../../index.css';

// 已废弃
const ExtraPage = ({
  setSelectedKeys,
  item,
  selectedKeys,
  setTabsItems,
  tabsItems,
  setActiveTabsKey,
  activeKey,
  setActiveKey,
}:any) => {
  const checkedSlotItemAll = item.child
    .map((p: { key: any; children: any[]; }) => {
      const keys = [p.key];
      const childKeys = p.children.map((t: { key: any; }) => t.key);
      return keys.concat(childKeys);
    })
    .flat(Infinity);
  const filterItemSlotList = selectedKeys.filter(
    (selectedKey: any[]) => selectedKey[0] === item.key,
  );
  const indeterminate =
    filterItemSlotList.length > 0 &&
    filterItemSlotList.length < checkedSlotItemAll.length; // 半选样式
  const filterTitleKeysList = filterItemSlotList.filter(
    (filterItem: string | any[]) => filterItem.length !== 1,
  );

  const handleChange = (event: { target: { checked: any; }; }) => {
    setSelectedKeys((preList: any[]) => {
      //如果 点击勾选，则添加该slot的全部数组，如果取消勾选，则去除选择的数组
      const filterCheckedKeysList = preList.filter(
        (selectedKey: any[]) => selectedKey[0] !== item.key,
      );
      const newList = event.target.checked
        ? Array.from(new Set([...preList, ...checkedSlotItemAll]))
        : filterCheckedKeysList;
      return newList;
    });
  };

  const handleOpenSlot = () => {
    const hasTabsItem = tabsItems
      .map((tabsItem: { key: any; }) => tabsItem.key)
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
    setActiveKey(activeKey);
  };

  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Checkbox
          indeterminate={indeterminate}
          // 下面全部选中则默认为选中
          checked={filterTitleKeysList.length === checkedSlotItemAll.length}
          onChange={handleChange}
        />
        <span className={'panelTitle'}>{item.title}</span>
        <span>{item.status}</span>
      </div>
      <div className={'extra-icon'} onClick={handleOpenSlot}>
        <Tooltip title="Open Diag">
          <ProfileOutlined />
        </Tooltip>
      </div>
    </div>
  );
};

export default ExtraPage;
