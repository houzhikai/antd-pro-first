import MenuPage from "./MenuPage";
import CurrentMode from "./CurrentMode";
import { useEffect, useState } from "react";
import { getSelectedKeyList } from "../../data/getSelectedKeyList";
import { getWholeCaliMode } from "../../data/components/convertData";

import "../../index.css";
import { WholeCaliMode } from "../../data/components/enum";

const LeftPage = ({
  setTabsItems,
  tabsItems,
  setActiveTabsKey,
  wholeStatus,
}: any) => {
  const mode = ["AC", "DC", "DIAG"].map((item) => {
    return {
      label: item,
      value: item,
      disabled:
        // 校准诊断模式 0：DC  1：AC   2：DIAG 3:None
        wholeStatus.caliMode === WholeCaliMode.NONE
          ? false
          : getWholeCaliMode(wholeStatus.caliMode) !== item,
    };
  });
  const filterNotDisableList = mode.filter((item) => !item.disabled);
  const defaultMode =
    filterNotDisableList.length === 1 ? filterNotDisableList?.[0].label : "AC";
  // 校准诊断模式，caliMode为None时默认 AC，其它都是对应非禁用的模式
  const [value, setValue] = useState(defaultMode);
  const defalutType =
    value === "AC"
      ? ["Auto-adjustment", "Standard", "Verify Only", "TDR"]
      : value === "DC"
      ? ["Standard", "Verify Only"]
      : ["Standard"];
  const [valueAC, setValueAC] = useState(defalutType[0]);
  const [defalutSelectedKey, setDefalutSelectedKey] = useState([
    "0-0-1",
    "0-0-0",
  ]);

  useEffect(() => {
    setValueAC(defalutType[0]);
  }, [value]);
  useEffect(() => {
    setDefalutSelectedKey(
      getSelectedKeyList(value, valueAC, wholeStatus.boards)
    );
  }, [valueAC]);
  console.log({ defalutSelectedKey });
  return (
    <div className="left-page">
      <CurrentMode
        defalutType={defalutType}
        value={value}
        setValue={setValue}
        valueAC={valueAC}
        setValueAC={setValueAC}
        mode={mode}
      />
      <MenuPage
        defalutSelectedKey={defalutSelectedKey}
        interfaceDataList={wholeStatus.boards}
        setTabsItems={setTabsItems}
        tabsItems={tabsItems}
        setActiveTabsKey={setActiveTabsKey}
      />
    </div>
  );
};

export default LeftPage;
