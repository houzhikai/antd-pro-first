import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  Popconfirm,
  Typography,
  message,
} from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useInstrumentPageProvider } from '../../../../components/container';
import '../../../../index.css';
import { StatusType } from '../../../../components/ENUM';

const SMUActionBoardPage = () => {
  const { menuList, initIp, setWebRefresh } = useInstrumentPageProvider();
  const [selectedDRUIpList, setSelectedDRUIpList] = useState([
    { ip: '', uiSlot: '' },
  ]); // 拿到ip的列表

  const [checkedList, setCheckedList] = useState([]); // 控制全选半选 列表
  const list = menuList[0].children
    .filter((item: { type: string; title: string }, index: number) => {
      if (index === 0) {
        if (item.title === 'Slot 0') {
          return false;
        }
        return !item.type.includes('SMU');
      } else {
        return !item.type.includes('SMU');
      }
    })
    .map(
      (item: { title: string; type: string; status: string; ip: string }) => {
        return {
          name: `${item.title} - ${item.type}`,
          status: item.status,
          ip: item.ip,
        };
      },
    );

  const options = list.map(
    (item: { name: string; status: string; ip: string }) => {
      return {
        label: item.name,
        value: item.ip,
        disabled: item.status === StatusType.NotPosition,
      };
    },
  );

  const filterDisableOptions = options.filter(
    (item: { disabled: string }) => !item.disabled,
  );
  const checkAll = filterDisableOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < filterDisableOptions.length;

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    // checkedList is used
    const optionsListValue = options
      .filter((item: { disabled: boolean }) => !item.disabled)
      .map((item: { value: string }) => item.value);
    setCheckedList(e.target.checked ? optionsListValue : []);

    const optionsList = options
      .filter((item: { disabled: boolean }) => !item.disabled)
      .map((item: { label: string }) => item.label);
    const selectedIpList = options
      .filter((item: { label: string }) =>
        (e.target.checked ? optionsList : []).includes(item.label),
      )
      .map((item: { value: string }) => item.value);
    const newList = selectedIpList.map((item: any) => {
      const uiSlot = item?.split('.')[2];
      return {
        ip: item,
        uiSlot,
      };
    });
    setSelectedDRUIpList(newList);
  };

  const handleGroupChange = (list: any) => {
    setCheckedList(list);
    const newList = list.map((item: any) => {
      const uiSlot = item?.split('.')[2];
      return {
        ip: item,
        uiSlot,
      };
    });
    setSelectedDRUIpList(newList);
  };
  // 上电
  const handlePowerOn = () => {
    let result: { success: string[]; fails: string[]; catch: string[] } = {
      success: [],
      fails: [],
      catch: [],
    };
    selectedDRUIpList.forEach((item) =>
      fetch(`http://${initIp}:28700/develop/instrument/power`, {
        method: 'POST',
        body: JSON.stringify({
          uiSlot: Number(item.uiSlot), //item.slot,
          bPowerFlg: 1, // 0 下电， 1 上电， 2 下电再上电
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === '0') {
            result.success.push(item.uiSlot);
          } else {
            result.fails.push(item.uiSlot);
            // message.error(res.msg);
          }
        })
        .catch(() => {
          result.catch.push(item.uiSlot);
        })
        .finally(() => {
          setWebRefresh((c: number) => c + 1);
        }),
    );
    setTimeout(() => {
      message.open({
        type:
          result.catch.length > 0 || result.fails.length > 0
            ? 'error'
            : 'success',
        content: (
          <span>
            {result.success.length !== 0 && (
              <span>
                Slot {result.success.join('、')}上电成功&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {result.fails.length !== 0 && (
              <span>
                Slot {result.fails.join('、')}上电失败&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {result.catch.length !== 0 && (
              <span>Slot {result.catch.join('、')}请求失败</span>
            )}
          </span>
        ),
        duration: 5,
      });
    }, 500);
  };
  // 下电
  const handlePowerOff = () => {
    let result: { success: string[]; fails: string[]; catch: string[] } = {
      success: [],
      fails: [],
      catch: [],
    };
    selectedDRUIpList.forEach((item) =>
      fetch(`http://${initIp}:28700/develop/instrument/power`, {
        method: 'POST',
        body: JSON.stringify({
          uiSlot: Number(item.uiSlot), //item.slot,
          bPowerFlg: 0, // 0 下电， 1 上电， 2 下电再上电
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === '0') {
            result.success.push(item.uiSlot);
          } else {
            result.fails.push(item.uiSlot);
            // message.error(res.msg);
          }
        })
        .catch(() => {
          result.catch.push(item.uiSlot);
          // message.error('上下电接口接口出错');
        })
        .finally(() => {
          setWebRefresh((c: number) => c + 1);
        }),
    );
    setTimeout(() => {
      message.open({
        type:
          result.catch.length > 0 || result.fails.length > 0
            ? 'error'
            : 'success',
        content: (
          <span>
            {result.success.length !== 0 && (
              <span>
                Slot {result.success.join('、')}下电成功&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {result.fails.length !== 0 && (
              <span>
                Slot {result.fails.join('、')}下电失败&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {result.catch.length !== 0 && (
              <span>Slot {result.catch.join('、')}请求失败</span>
            )}
          </span>
        ),
        duration: 5,
      });
    }, 500);
  };
  // 重启
  const handlePowerReboot = () => {
    let result: { success: string[]; fails: string[]; catch: string[] } = {
      success: [],
      fails: [],
      catch: [],
    };
    selectedDRUIpList.forEach((item) =>
      fetch(`http://${initIp}:28700/manage/instrument/reboot`, {
        method: 'POST',
        body: JSON.stringify({
          uiSlot: Number(item.uiSlot), //item.slot,
          // uiSlot: Number(9), //item.slot,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === '0') {
            result.success.push(item.uiSlot);
          } else {
            result.fails.push(item.uiSlot);
            // message.error(res.msg);
          }
        })
        .catch(() => {
          result.catch.push(item.uiSlot);
        })
        .finally(() => {
          setWebRefresh((c: number) => c + 1);
        }),
    );
    setTimeout(() => {
      message.open({
        type: result.fails.length > 0 ? 'error' : 'success',
        content: (
          <span>
            {result.success.length !== 0 && (
              <span>
                Slot {result.success.join('、')}单板重启成功 &nbsp;&nbsp;&nbsp;
              </span>
            )}
            {result.catch.length !== 0 && (
              <span>
                Slot {result.catch.join('、')}单板重启成功&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {result.fails.length !== 0 && (
              <span>Slot {result.fails.join('、')}单板重启失败</span>
            )}
          </span>
        ),
        duration: 5,
      });
    }, 500);
  };

  return (
    <>
      <div className="ins-SMUActionBoard-title">
        <Typography.Title level={5}>单板控制</Typography.Title>
      </div>
      <div>
        <Popconfirm
          title="确定上电？"
          onConfirm={handlePowerOn}
          okText="确定"
          cancelText="取消"
          disabled={checkedList.length <= 0}
        >
          <Button
            className="ins-SMUActionBoard-item"
            type="primary"
            size="small"
            disabled={checkedList.length <= 0}
          >
            上电
          </Button>
        </Popconfirm>
        <Popconfirm
          title="确定下电？"
          onConfirm={handlePowerOff}
          okText="确定"
          cancelText="取消"
          disabled={checkedList.length <= 0}
        >
          <Button
            className="ins-SMUActionBoard-item"
            type="primary"
            size="small"
            disabled={checkedList.length <= 0}
          >
            下电
          </Button>
        </Popconfirm>
        <Popconfirm
          title="确定单板重启？"
          onConfirm={handlePowerReboot}
          okText="确定"
          cancelText="取消"
          disabled={checkedList.length <= 0}
        >
          <Button
            className="ins-SMUActionBoard-item"
            type="primary"
            size="small"
            disabled={checkedList.length <= 0}
          >
            单板重启
          </Button>
        </Popconfirm>
      </div>
      <div className="ins-SMUActionBoard-content">
        <div className="ins-SMUActionBoard-header">
          <div>
            <Checkbox
              style={{ marginTop: 20 }}
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              全选
            </Checkbox>
          </div>
        </div>
        <Divider />
        <Checkbox.Group
          style={{ marginBottom: 20 }}
          options={options}
          value={checkedList}
          onChange={handleGroupChange}
        />
      </div>
    </>
  );
};

export default SMUActionBoardPage;
