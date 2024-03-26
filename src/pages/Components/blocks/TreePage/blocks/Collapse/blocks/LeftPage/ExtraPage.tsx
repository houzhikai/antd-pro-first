import { Checkbox, Tooltip } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import styles from '../../index.less';
import DiagLogContent from '../RightPage/DiagLogContent';

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
}) => {
  const checkedSlotItemAll = item.child
    .map((p) => {
      const keys = [p.key];
      const childKeys = p.children.map((t) => t.key);
      return keys.concat(childKeys);
    })
    .flat(Infinity);
  const filterItemSlotList = selectedKeys.filter(
    (selectedKey) => selectedKey[0] === item.key,
  );
  const indeterminate =
    filterItemSlotList.length > 0 &&
    filterItemSlotList.length < checkedSlotItemAll.length; // 半选样式
  const filterTitleKeysList = filterItemSlotList.filter(
    (filterItem) => filterItem.length !== 1,
  );

  const handleChange = (event) => {
    setSelectedKeys((preList) => {
      //如果 点击勾选，则添加该slot的全部数组，如果取消勾选，则去除选择的数组
      const filterCheckedKeysList = preList.filter(
        (selectedKey) => selectedKey[0] !== item.key,
      );
      const newList = event.target.checked
        ? Array.from(new Set([...preList, ...checkedSlotItemAll]))
        : filterCheckedKeysList;
      return newList;
    });
  };

  const handleOpenSlot = () => {
    const hasTabsItem = tabsItems
      .map((tabsItem) => tabsItem.key)
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
        <span className={styles.panelTitle}>{item.title}</span>
        <span>{item.status}</span>
      </div>
      <div className={styles['extra-icon']} onClick={handleOpenSlot}>
        <Tooltip title="Open Diag">
          <ProfileOutlined />
        </Tooltip>
      </div>
    </div>
  );
};

export default ExtraPage;
