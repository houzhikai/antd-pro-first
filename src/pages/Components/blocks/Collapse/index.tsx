import React, { createRef, useState } from "react";
import LeftPage from "./blocks/LeftPage";
import NavPage from "./blocks/NavPage";
import RightPage from "./blocks/RightPage";
import DiagLogContent from "./blocks/RightPage/DiagLogContent";
import WebSocketComponent from "./webSocket/Client";
import { interfaceDataList } from "./data/interfaace";

const socketRef = createRef<any>();
import "./index.css";

const CollapsePage: React.FC = () => {
  const defaultPanes = [
    {
      label: "Slot 0",
      children: <DiagLogContent />,
      key: "0",
      closable: false,
    },
  ];

  const [tabsItems, setTabsItems] = useState(defaultPanes);
  const [activeTabsKey, setActiveTabsKey] = useState(defaultPanes[0].key);
  const wholeStatus = {
    caliMode: interfaceDataList.data.caliMode,
    deviceType: interfaceDataList.data.deviceType,
    envCheck: interfaceDataList.data.envCheck,
    status: interfaceDataList.data.status,
    boards: interfaceDataList.data.boards,
  };

  return (
    <>
      <NavPage socketRef={socketRef} wholeStatus={wholeStatus} />
      <div className="content-page">
        <LeftPage
          wholeStatus={wholeStatus}
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
        onMessage={(message) => {
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
