import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import "../../index.css";

const CurrentMode = ({
  value,
  setValue,
  valueAC,
  setValueAC,
  defalutType,
  mode,
}: any) => {
  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>
        <Radio.Group
          options={mode}
          onChange={handleChange}
          value={value}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className={"left-Radio-group"}>
        <Radio.Group
          options={defalutType}
          onChange={(e: any) => setValueAC(e.target.value)}
          value={valueAC}
        />
      </div>
    </>
  );
};

export default CurrentMode;
