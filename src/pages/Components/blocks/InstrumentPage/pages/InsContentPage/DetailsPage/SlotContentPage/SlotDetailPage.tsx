import React from 'react';
import { Descriptions } from 'antd';
import { mockDetailData } from '../../../../mockData/interfaceData';
import { useInstrumentPageProvider } from '../../../../components/container';
import './../../../../index.css';
import myFetch from '@/components/myFetch';
import { useAsyncEffect } from 'ahooks';

const SlotDetailPage = ({ webContent, setWebContent, setSlotErrPage }) => {
  const { instrumentParm, initIp, detailRefresh, textColor } =
    useInstrumentPageProvider();

  // 调用单板详情
  useAsyncEffect(async () => {
    try {
      const res = await myFetch({
        url: `http://${initIp}:28700/instrument/detail/slot${instrumentParm}`,
        isExceptionHand: true,
      });
      if (res.result === '0') {
        setWebContent(res.data);
      } else {
        // message.error(res.msg);
        setWebContent([]);
        setSlotErrPage(true);
      }
    } catch (error) {
      // message.error(`获取单板详情出错`, 5);
      // setSlotErrPage(true);
      setWebContent(mockDetailData);
    }
  }, [instrumentParm, detailRefresh]);

  return (
    <div>
      <Descriptions
        title="详情"
        column={2}
        colon={true}
        bordered
        className="content-descriptions"
        labelStyle={{ width: '20%' }}
        contentStyle={{ width: '30%' }}
      >
        {webContent?.detail?.map((item: any, index: number) => {
          return (
            <Descriptions.Item key={index} label={item.label}>
              {item.label.includes('在位状态') ? (
                <div>
                  {item.value === '0'
                    ? '不在位'
                    : item.value === '1'
                    ? '在位'
                    : item.value === '2'
                    ? '在位未上电'
                    : 'NA'}
                </div>
              ) : item.label === '健康状态' ? (
                item.value === '0' ? (
                  <div>正常</div>
                ) : item.value === '1' ? (
                  <div>正常</div>
                ) : item.value === '2' ? (
                  <div style={{ color: textColor.warning }}>告警</div>
                ) : item.value === '3' ? (
                  <div style={{ color: textColor.warning }}>告警</div>
                ) : item.value === '4' ? (
                  <div style={{ color: textColor.error }}>错误</div>
                ) : item.value === '5' ? (
                  <div style={{ color: textColor.error }}>错误</div>
                ) : item.value === '6' ? (
                  <div>不在位</div>
                ) : item.value === '7' ? (
                  <div>在位下线</div>
                ) : item.value === '8' ? (
                  <div>在位下电</div>
                ) : item.value === '9' ? (
                  <div>启动中</div>
                ) : (
                  <div style={{ color: 'black' }}>NA</div>
                )
              ) : item.label === '业务状态' ? (
                item.value === '0' ? (
                  <div>空闲</div>
                ) : item.value === '1' ? (
                  <div>测试中</div>
                ) : item.value === '2' ? (
                  <div>升级中</div>
                ) : item.value === '3' ? (
                  <div>校准中</div>
                ) : item.value === '4' ? (
                  <div>诊断中</div>
                ) : item.value === '5' ? (
                  <div>自检中</div>
                ) : (
                  <div>NA</div>
                )
              ) : item.label === '温度状态' ? (
                item.value === '0' ? (
                  <div>正常</div>
                ) : item.value === '1' ? (
                  <div style={{ color: textColor.warning }}>告警</div>
                ) : item.value === '2' ? (
                  <div style={{ color: textColor.error }}>过温下电</div>
                ) : (
                  <div>{item.value}</div>
                )
              ) : (
                <div>{item.value}</div>
              )}
            </Descriptions.Item>
          );
        })}
      </Descriptions>

      <Descriptions
        title="固件版本"
        column={2}
        bordered
        className="content-descriptions"
        labelStyle={{ width: '20%' }}
        contentStyle={{ width: '30%' }}
      >
        {webContent?.firmware?.map((item: any, index: number) => (
          <Descriptions.Item key={index} label={item.label}>
            {item.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
};

export default SlotDetailPage;
