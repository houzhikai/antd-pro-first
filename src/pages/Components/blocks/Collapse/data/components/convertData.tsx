import {
  CheckOutlined,
  CloseOutlined,
  Loading3QuartersOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { TestUnitStatus } from "./enum";

export const getTestUnitStatus = (val: any) => {
  let value;
  switch (val) {
    case TestUnitStatus.NOSTART:
      value = <div style={{ width: 24 }} />;
      break;
    case TestUnitStatus.PROCESS:
      value = <Loading3QuartersOutlined spin style={{ color: "#1677ff" }} />;
      break;
    case TestUnitStatus.FINISH:
      value = <CheckOutlined style={{ color: "green" }} />;
      break;
    case TestUnitStatus.ERROR:
      value = <CloseOutlined style={{ color: "red" }} />;
      break;
    case TestUnitStatus.TESTENVIRONMENT:
      value = <EllipsisOutlined />;
      break;
    default:
      value = <div style={{ width: 24 }} />;
      break;
  }
  return value;
};

export const getServiceState = (val: number) => {
  let value;
  switch (val) {
    case 0:
      value = "Idel";
      break;
    case 1:
      value = "Testing";
      break;
    case 2:
      value = "Upgrading";
      break;
    case 3:
      value = "Cal";
      break;
    case 4:
      value = "Diag";
      break;
    default:
      value = "";
      break;
  }
  return value;
};

export const getWholeCaliMode = (val: number) => {
  let value;
  switch (val) {
    case 0:
      value = "DC";
      break;
    case 1:
      value = "AC";
      break;
    case 2:
      value = "DIAG";
      break;
    case 3:
      value = "NONE";
      break;
    default:
      value = "";
      break;
  }
  return value;
};
