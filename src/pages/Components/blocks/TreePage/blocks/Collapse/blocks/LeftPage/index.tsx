import MenuPage from './MenuPage';
import CurrentMode from './CurrentMode';
import styles from '../../index.less';

const LeftPage = ({ setTabsItems, tabsItems, setActiveTabsKey }: any) => {
  return (
    <div className={styles['left-page']}>
      <CurrentMode />
      <MenuPage
        setTabsItems={setTabsItems}
        tabsItems={tabsItems}
        setActiveTabsKey={setActiveTabsKey}
      />
    </div>
  );
};

export default LeftPage;
