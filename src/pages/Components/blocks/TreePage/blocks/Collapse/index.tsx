import { createRef, useState } from 'react';
import LeftPage from './blocks/LeftPage';
import NavPage from './blocks/NavPage';
import RightPage from './blocks/RightPage';
import styles from './index.less';
import DiagLogContent from './blocks/RightPage/DiagLogContent';
import WebSocketComponent from './webSocket/Client';
const socketRef = createRef<any>();

const CollapsePage: React.FC = () => {
  const defaultPanes = [
    {
      label: 'Slot 0',
      children: <DiagLogContent />,
      key: '0',
      closable: false,
    },
  ];

  const [tabsItems, setTabsItems] = useState(defaultPanes);
  const [activeTabsKey, setActiveTabsKey] = useState(defaultPanes[0].key);

  return (
    <>
      <NavPage socketRef={socketRef} />
      <div className={styles['content-page']}>
        <LeftPage
          setTabsItems={setTabsItems}
          tabsItems={tabsItems}
          setActiveTabsKey={setActiveTabsKey}
        />
        <RightPage
          tabsItems={tabsItems}
          setTabsItems={setTabsItems}
          activeTabsKey={activeTabsKey}
          setActiveTabsKey={setActiveTabsKey}
        />
      </div>
      <WebSocketComponent
        url="ws://192.168.3.17:9090"
        onMessage={() => {
          // TODO
          // console.log({ message });
        }}
        setLoading={() => {}}
        ref={socketRef}
      />
    </>
  );
};

export default CollapsePage;
