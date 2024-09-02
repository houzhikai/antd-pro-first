import React, { useState } from 'react';
import { Checkbox, message } from 'antd';
import DetailsTablePage from './DetailsTablePage';
import { getDeviceOptionalAllKeys } from '../../components/getDeviceOptionalAllKeys';
import { useAsyncEffect } from 'ahooks';
import { useFUProviderModule } from '../../components/containers';
import myFetch from '@/components/myFetch';

const DetailsPage = () => {
  const {
    activeKey,
    setActiveKey,
    getDeviceListAndHeartObj,
    setSelectedKeysList,
    indeterminateKeys,
    selectedKeysList,
    setIndeterminateKeys,
    tableWidthObj,
    setPromptUser,
    isAutoMode,
    startParams,
  } = useFUProviderModule();

  // 全折叠的半选样式
  const [indeterminateActiveKeys, setIndeterminateActiveKeys] = useState(true);
  // 全折叠的 keys 列表
  const allKeys = (getDeviceListAndHeartObj?.tableList || [])?.map((item) =>
    String(item.slot),
  );
  // 是否全选
  const handleChangeCheckedAll = (e) => {
    const checked = e.target.checked;
    const allSelectedKeysList = getDeviceOptionalAllKeys(
      getDeviceListAndHeartObj.tableList,
    );
    let selectKeysList: any = [];
    if (checked) {
      selectKeysList = allSelectedKeysList;
      setSelectedKeysList(allSelectedKeysList);
    } else {
      selectKeysList = [];
      setSelectedKeysList([]);
    }

    setIndeterminateKeys(
      selectKeysList.length > 0 &&
        selectKeysList.length < allSelectedKeysList.length,
    );
  };
  // 是否全折叠
  const handleChangeFoldPanel = (e) => {
    const checked = e.target.checked;
    const allSlotList = (getDeviceListAndHeartObj?.tableList || []).map(
      (item) => String(item.slot),
    );
    let activeKeyList: any = [];
    if (checked) {
      activeKeyList = allSlotList;
      setActiveKey(allSlotList);
    } else {
      activeKeyList = [];
      setActiveKey([]);
    }
    // 使用 activeKey 时，有异步问题，所以使用 let 做同步处理
    setIndeterminateActiveKeys(
      activeKeyList.length > 0 && activeKeyList.length < allKeys.length,
    );
  };

  // 监听升级完成的 后续操作
  useAsyncEffect(async () => {
    // isAllow = 0 时，才能做以下操作
    const isAllow = getDeviceListAndHeartObj.allow === 0;
    if (!isAllow) return;
    // 0 正常 | 1 正在升级 | 2 等待升级 | 3 升级完成 | 4升级异常 | 5 在位下线 | 6 在位下电 | 7 启动中 | 8 繁忙 | - 其他
    //  获取单板状态列表
    const statusList = getDeviceListAndHeartObj.tableList.map(
      (item) => item.slotStatus,
    );
    if (statusList.includes(1) || statusList.includes(2)) {
      // TODO，都是 正在升级 或者 等待升级 时的操作
      const xxx = getDeviceListAndHeartObj.tableList
        .map((board) =>
          board.children
            .filter(
              (slot) =>
                slot.status === 1 || slot.status === 2 || slot.status === 3,
            )
            .map((item) => item.key),
        )
        .flat();
      setSelectedKeysList(xxx);
    } else if (statusList.includes(4)) {
      // 升级异常时打开弹窗
      setPromptUser((obj) => {
        return {
          ...obj,
          status: true,
          isError: true,
          message:
            'An error was found during the upgrade process. Please contact the engineer for assistance.',
        };
      });
    } else if (statusList.includes(3)) {
      // 升级中是否包含 SMU
      const isHasSMU = getDeviceListAndHeartObj.tableList.some(
        (item) => item.type === 'SMU026' && item.slotStatus === 3,
      );
      if (isHasSMU) {
        // 升级中是否包含 SMU 和 CPLD
        const isHasCPLD = getDeviceListAndHeartObj.tableList
          .filter((item) => item.type === 'SMU026')[0]
          .children.some(
            (item) => item.firmware.includes('CPLD') && item.status === 3,
          );
        if (isHasCPLD) {
          // 升级完成中包含 SMU 和 CPLD 的情况
          setPromptUser((obj) => {
            return {
              ...obj,
              status: true,
              isError: false,
              message:
                'Firmware update completed. Please power off the device and then power on it to complete the upgrade process.',
            };
          });
        } else {
          const uiSlotList = getDeviceListAndHeartObj.tableList
            .filter((item) => item.slotStatus === 3)
            .map((item) => item.slot);
          // 升级完成中包含 SMU 但不包含 CPLD 的情况
          if (isAutoMode) {
            // 自动模式下的判断
            try {
              const res = await myFetch({
                url: `http://${startParams.initIp}:29000/instrument/reboot`,
                params: { uiSlot: uiSlotList },
                isExceptionHand: true,
              });
              if (res.result === '0') {
                console.log(111);
              } else {
                message.error(res.msg);
              }
            } catch (error) {
              // TODO， result = 0 时的判断
              message.success(
                `The slot${uiSlotList.join('，')} restart success`,
              );
            }
          } else {
            // 手动模式下的判断
            setPromptUser((obj) => {
              return {
                ...obj,
                status: true,
                isError: false,
                message:
                  'Firmware update completed. Please restart the device to complete the upgrade process.',
              };
            });
          }
        }
      } else {
        // 升级中不包含 SMU
        const isHasCPLD = getDeviceListAndHeartObj?.tableList
          .filter((item) => item.type !== 'SMU026')
          .map((t) =>
            t?.children?.some(
              (item) => item?.firmware.includes('CPLD') && item?.status === 3,
            ),
          )
          .some((item) => item);
        if (isHasCPLD) {
          // 升级中包含 DRU 和 CPLD
          const uiSlotList = getDeviceListAndHeartObj.tableList
            .filter((item) => item.slotStatus === 3)
            .map((item) => item.slot);
          if (isAutoMode) {
            // 自动模式
            try {
              const res = await myFetch({
                url: `http://${startParams.initIp}:29000/instrument/power`,
                params: {
                  uiSlot: uiSlotList,
                  bPowerFlg: 2,
                },
                isExceptionHand: true,
              });
              if (res.result === '0') {
                console.log(111);
              } else {
                message.error(res.msg);
              }
            } catch (error) {
              // TODO， result = 0 时的判断
              message.success(
                `The slot${uiSlotList.join(
                  '，',
                )} successfully powsered off and power on `,
              );
            }
          } else {
            // 手动模式
            setPromptUser((obj) => {
              return {
                ...obj,
                status: true,
                isError: false,
                message: `Firmware update completed. Please to power off slot${uiSlotList.join(
                  '， slot',
                )} then power on it/them to complete the upgrade process.`,
              };
            });
          }
        } else {
          const uiSlotList = getDeviceListAndHeartObj.tableList
            .filter((item) => item.slotStatus === 3)
            .map((item) => item.slot);
          // 升级中包含 DRU 和 不包含 CPLD
          if (isAutoMode) {
            // 自动模式
            try {
              const res = await myFetch({
                url: `http://${startParams.initIp}:29000/instrument/reboot`,
                params: {
                  uiSlot: uiSlotList,
                  bPowerFlg: 2,
                },
                isExceptionHand: true,
              });
              if (res.result === '0') {
                console.log(111);
              } else {
                message.error(res.msg);
              }
            } catch (error) {
              // TODO， result = 0 时的判断
              message.success(
                `The slot${uiSlotList.join('，slot')} restart success`,
              );
            }
          } else {
            // 手动模式
            setPromptUser((obj) => {
              return {
                ...obj,
                status: true,
                isError: false,
                message: `Firmware update completed. Please restart the slot ${uiSlotList.join(
                  '， slot',
                )} to complete the upgrade process.`,
              };
            });
          }
        }
      }
    } else {
      console.log('排除 1，2，3，4的状态码');
    }
  }, [getDeviceListAndHeartObj.allow]);

  return (
    <>
      {getDeviceListAndHeartObj?.tableList && (
        <div
          style={{ width: `${tableWidthObj.sizeRatio}vw`, margin: '0 auto' }}
        >
          <div>
            <Checkbox
              indeterminate={indeterminateKeys}
              onChange={handleChangeCheckedAll}
              checked={
                selectedKeysList.length > 0 &&
                selectedKeysList.length ===
                  getDeviceOptionalAllKeys(getDeviceListAndHeartObj?.tableList)
                    .length &&
                getDeviceListAndHeartObj?.tableList?.length
              }
            >
              All Select
            </Checkbox>
            <Checkbox
              indeterminate={indeterminateActiveKeys}
              onChange={handleChangeFoldPanel}
              checked={
                activeKey.length === allKeys.length && allKeys.length !== 0
              }
            >
              All Collapse
            </Checkbox>

            <DetailsTablePage
              allKeys={allKeys}
              setIndeterminate={setIndeterminateActiveKeys}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
