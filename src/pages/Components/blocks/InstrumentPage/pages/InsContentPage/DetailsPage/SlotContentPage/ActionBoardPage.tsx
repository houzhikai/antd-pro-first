import { Button, Popconfirm, message } from 'antd';
import { useInstrumentPageProvider } from '../../../../components/container';
import '../../../../index.css';
import { StatusType, UpdateType } from '../../../../components/ENUM';

const ActionBoardPage = ({ webContent, instrumentParm }: any) => {
  const { initIp, setWebRefresh } = useInstrumentPageProvider();
  // isDisable: 0 不在位 1 在位 2 在位未上电
  const isDisable = webContent?.detail
    ?.filter((item: { label: string }) => item.label === '健康状态')
    .map((item: { value: string }) => item.value)[0];
  const isUpdate = webContent?.detail
    ?.filter((item: { label: string }) => item.label === '业务状态')
    .map((item: { value: string }) => item.value)[0];
  // const ip = instrumentParm.split('&')[0].split('?ip=')[1];
  const uiSlot = Number(instrumentParm.split('&')[1].split('=')[1]);
  // 上电
  const handlePowerOn = () => {
    fetch(`http://${initIp}:28700/develop/instrument/power`, {
      method: 'POST',
      body: JSON.stringify({
        uiSlot, //item.slot,
        bPowerFlg: 1, // 0 下电， 1 上电， 2 下电再上电
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.result === '0') {
          message.success('操作成功', 5);
        } else {
          message.error(res.msg, 5);
        }
      })
      .catch(() => {
        message.error('操作失败', 5);
        // message.error('上下电接口接口出错');
      })
      .finally(() => {
        setWebRefresh((c: number) => c + 1);
      });
  };
  // 下电
  const handlePowerOff = () => {
    fetch(`http://${initIp}:28700/develop/instrument/power`, {
      method: 'POST',
      body: JSON.stringify({
        uiSlot, //item.slot,
        bPowerFlg: 0, // 0 下电， 1 上电， 2 下电再上电
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.result === '0') {
          message.success('操作成功', 5);
        }
        if (res.result !== '0') {
          message.error(res.msg, 5);
        }
      })
      .catch(() => {
        message.error('操作失败', 5);
      })
      .finally(() => {
        setWebRefresh((c: number) => c + 1);
      });
  };
  // DRU 重启接口
  const handleDRUReboot = () => {
    fetch(`http://${initIp}:28700/manage/instrument/reboot`, {
      method: 'POST',
      body: JSON.stringify({
        uiSlot, //item.slot,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.result !== '0') {
          message.error(res.msg);
        }
      })
      .catch(() => {
        // 重启接口没有返回值 默认为重启成功
        message.success('操作成功', 5);
        // message.error('DRU重启接口接口出错');
      })
      .finally(() => {
        setWebRefresh((c: number) => c + 1);
      });
  };

  return (
    <div className="ins-action-board">
      {/* <div className="ins-SMUActionBoard-title">SMU</div> */}
      <div>
        {/* SMU没有上下电重启 */}
        {/* 6 不在位 8 在位下电 */}
        {!instrumentParm.includes('slot=0') && (
          <Popconfirm
            title="确定上电？"
            onConfirm={handlePowerOn}
            okText="确定"
            cancelText="取消"
            disabled={
              !isDisable ||
              isDisable === StatusType.NotPosition ||
              isDisable === StatusType.OffPosition ||
              isUpdate === UpdateType.Upgrading
            }
          >
            <Button
              className="ins-action-board-item"
              type="primary"
              size="small"
              disabled={
                !isDisable ||
                isDisable === StatusType.NotPosition ||
                isDisable === StatusType.OffPosition ||
                isUpdate === UpdateType.Upgrading
              }
            >
              上电
            </Button>
          </Popconfirm>
        )}
        {!instrumentParm.includes('slot=0') && (
          <Popconfirm
            title="确定下电？"
            onConfirm={handlePowerOff}
            okText="确定"
            cancelText="取消"
            disabled={
              !isDisable ||
              isDisable === StatusType.NotPosition ||
              isDisable === StatusType.InPlacePowerOff ||
              isUpdate === UpdateType.Upgrading
            }
          >
            <Button
              className="ins-action-board-item"
              type="primary"
              size="small"
              disabled={
                !isDisable ||
                isDisable === StatusType.NotPosition ||
                isDisable === StatusType.InPlacePowerOff ||
                isUpdate === UpdateType.Upgrading
              }
            >
              下电
            </Button>
          </Popconfirm>
        )}
        {!instrumentParm.includes('slot=0') && (
          <Popconfirm
            title="确定重启？"
            onConfirm={handleDRUReboot}
            okText="确定"
            cancelText="取消"
            disabled={
              !isDisable ||
              isDisable === StatusType.NotPosition ||
              isDisable === StatusType.OffPosition ||
              isDisable === StatusType.InPlacePowerOff ||
              isUpdate === UpdateType.Upgrading
            }
          >
            <Button
              className="ins-action-board-item"
              type="primary"
              size="small"
              disabled={
                !isDisable ||
                isDisable === StatusType.NotPosition ||
                isDisable === StatusType.OffPosition ||
                isDisable === StatusType.InPlacePowerOff ||
                isUpdate === UpdateType.Upgrading
              }
            >
              重启
            </Button>
          </Popconfirm>
        )}
      </div>
    </div>
  );
};

export default ActionBoardPage;
