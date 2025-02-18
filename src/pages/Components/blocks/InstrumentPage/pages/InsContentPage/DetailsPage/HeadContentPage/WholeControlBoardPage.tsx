import React from 'react';
import { Typography, message } from 'antd';
import { useInstrumentPageProvider } from '../../../../components/container';
// import MyTooltipPage from '@/components/commons/MyTooltipPage';
import MyRebootPage from '@/components/commons/MyRebootPage';

const SMUActionBoardPage = () => {
  const { initIp, setWebRefresh } = useInstrumentPageProvider();
  const handleSMUReboot = () => {
    console.log(111);
    fetch(`http://${initIp}:28700/manage/instrument/reboot1`, {
      method: 'POST',
      body: JSON.stringify({
        uiSlot: Number(0), //item.slot,
        // uiSlot: Number(9), //item.slot,  异常情况的测试
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.result === '0') {
          message.success('整机重启成功');
        }
        if (res.result !== '0') {
          message.error(res.msg);
        }
      })
      .catch(() => {
        // 重启接口没有返回值 默认为重启成功
        message.success('整机重启成功');
        // message.error('DRU重启接口接口出错');
      })
      .finally(() => {
        setWebRefresh((c: number) => c + 1);
      });
  };
  return (
    <div>
      <div className="ins-SMUActionBoard-title">
        <Typography.Title level={5}>整机控制</Typography.Title>
      </div>
      {/* <MyTooltipPage
        onConfirm={handleSMUReboot}
        type="button"
        title="确定重启整机?"
        label="整机重启"
      /> */}
      <MyRebootPage
        title="确定重启整机?"
        onConfirm={handleSMUReboot}
        label="整机重启"
      />
    </div>
  );
};

export default SMUActionBoardPage;
