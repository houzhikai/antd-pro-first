import { ProfileOutlined } from '@ant-design/icons';
import styles from '../../index.less';
import { Tooltip } from 'antd';
import DiagLogContent from '../RightPage/DiagLogContent';

const OpenLog = ({ item, tabsItems, setTabsItems, setActiveTabsKey }) => {
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
  };
  return (
    <div className={styles['extra-icon']} onClick={handleOpenSlot}>
      <Tooltip title="Open Diag">
        <ProfileOutlined />
      </Tooltip>
    </div>
  );
};

export default OpenLog;
