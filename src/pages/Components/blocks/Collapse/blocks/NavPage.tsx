import logo from "../../icon/caldiag.png";
import { Button, Image, Popconfirm } from "antd";
import { WholeStatus } from "../data/components/enum";

import "../index.css";

const NavPage = ({ socketRef, wholeStatus }: any) => {
  const handleClickStart = () => {
    socketRef.current.sendMsg("abc");
  };

  return (
    <div className={"nav-wrapper"}>
      <div className={"myLogo"}>
        <div>
          <Image src={logo} preview={false} width={40} title="Cal&Diag" />
        </div>
        <h3 className="logo-title">Cal&Diag</h3>
      </div>
      <div>
        <Button
          disabled={
            wholeStatus.status === WholeStatus.NOTALLOW ||
            wholeStatus.status === WholeStatus.DIAGING
          }
          className={"nav-button"}
          type="primary"
          onClick={handleClickStart}
        >
          Start
        </Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to stop Cal&Diag?"
          okText="Yes"
          cancelText="No"
        >
          <Button
            disabled={
              wholeStatus.status === WholeStatus.NOTALLOW ||
              wholeStatus.status === WholeStatus.NOTSTART
            }
            danger
            type="primary"
          >
            Stop
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default NavPage;
