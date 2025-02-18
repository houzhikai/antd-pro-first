import React, { useEffect } from 'react';
import { WarningOutlined } from '@ant-design/icons';
import { Descriptions, Tooltip, Alert, message } from 'antd';
import { useInstrumentPageProvider } from '../../../../components/container';

const HeadDetailsPage = () => {
  const {
    instrumentParm,
    initIp,
    detailRefresh,
    textColor,
    webContent,
    setWebContent,
    isHeadErrDetails,
    setIsHeadErrDetails,
  } = useInstrumentPageProvider();

  // 调用M5000详情
  useEffect(() => {
    fetch(`http://${initIp}:28700/instrument/detail/head${instrumentParm}`, {
      method: 'Get',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result === '0') {
          setWebContent(res.data);
        } else {
          setWebContent([]);
          message.error(res.msg);
          setIsHeadErrDetails(true);
        }
      })
      .catch(() => {
        setIsHeadErrDetails(true);
        // message.error(`获取设备头详情出错`, 5);
      })
      .finally(() => {});
  }, [instrumentParm, detailRefresh]);

  return (
    <div>
      {isHeadErrDetails ? (
        <Alert
          style={{ marginBottom: '24px' }}
          type="error"
          message="获取设备头详情数据失败"
          showIcon
        />
      ) : (
        <Descriptions
          title="详情"
          column={2}
          bordered
          className="content-descriptions"
          labelStyle={{ width: '20%' }}
          contentStyle={{ width: '30%' }}
        >
          {/* 详情 */}
          {webContent?.detail?.map((item: any, index: number) => {
            if (item.label === '在位') {
              return (
                <Descriptions.Item key={index} label={item.label}>
                  {item.value === '0'
                    ? '否'
                    : item.value === '1'
                    ? '是'
                    : item.value}
                </Descriptions.Item>
              );
            } else {
              return (
                <Descriptions.Item key={index} label={item.label}>
                  {item.value}
                </Descriptions.Item>
              );
            }
          })}
          {/* 电源 */}
          {webContent?.power?.map((item: any, index: number) => {
            return (
              <>
                {item.label !== '整机电源状态' ? (
                  <Descriptions.Item key={index} label={item.label}>
                    <div>
                      {item.status?.map((p: any) => (
                        <div key={`${p.label}`}>
                          {p.label === '健康状态' ? (
                            p.value === '0' ? (
                              <div>正常</div>
                            ) : p.value === '1' ? (
                              <div>不在位</div>
                            ) : p.value === '2' ? (
                              <div style={{ color: textColor.warning }}>
                                告警
                              </div>
                            ) : p.value === '3' ? (
                              <div style={{ color: textColor.error }}>错误</div>
                            ) : (
                              <div>NA</div>
                            )
                          ) : (
                            ''
                          )}
                        </div>
                      ))}
                    </div>
                  </Descriptions.Item>
                ) : (
                  <Descriptions.Item span={2} key={index} label={item.label}>
                    <span>
                      {item.value === '0' ? (
                        <span>正常</span>
                      ) : item.value === '1' ? (
                        <span style={{ color: textColor.warning }}>
                          无备份电源
                        </span>
                      ) : item.value === '2' ? (
                        <span style={{ color: textColor.error }}>
                          电源功耗不足
                        </span>
                      ) : (
                        ''
                      )}
                    </span>
                    {item.err && (
                      <Tooltip placement="right" title={item.err}>
                        <WarningOutlined
                          style={{
                            marginLeft: 10,
                            cursor: 'pointer',
                            color:
                              item.value === '1'
                                ? textColor.warning
                                : item.value === '2'
                                ? textColor.error
                                : undefined,
                          }}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        />
                      </Tooltip>
                    )}
                  </Descriptions.Item>
                )}
              </>
            );
          })}
          {/* 风扇 */}
          {webContent?.fan?.map((item: any, index: number) => {
            return (
              <>
                {item.label !== '整机风扇状态' ? (
                  <Descriptions.Item
                    key={`${item.label}${index}`}
                    label={item.label}
                  >
                    <div>
                      {item.status?.map((p: any, idx: number) => (
                        <div key={`${item.label}${idx}`}>
                          {p.label === '健康状态' ? (
                            p.value === '0' ? (
                              <div>正常</div>
                            ) : p.value === '1' ? (
                              <div style={{ color: textColor.warning }}>
                                告警
                              </div>
                            ) : p.value === '2' ? (
                              <div style={{ color: textColor.error }}>错误</div>
                            ) : (
                              <div>NA</div>
                            )
                          ) : (
                            ''
                          )}
                        </div>
                      ))}
                    </div>
                  </Descriptions.Item>
                ) : null}
              </>
            );
          })}
        </Descriptions>
      )}
    </div>
  );
};

export default HeadDetailsPage;
