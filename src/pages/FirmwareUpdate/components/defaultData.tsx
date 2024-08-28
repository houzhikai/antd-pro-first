import React from 'react';
import { Checkbox } from 'antd';
import { statusShow } from '../pages/DetailsPage/components/statusShow';
import { useFUProviderModule } from './containers';
import '../index.css';

export const options = [
  {
    value: 'auto',
    label: 'Auto',
  },
  {
    value: 'manual',
    label: 'Manual',
  },
];
// export const envOptions = [
//   { value: 0, label: '不覆盖' },
//   { value: 1, label: '覆盖' },
// ];
export const GetColumns = (tableWidthObj, isDisabled) => {
  const { ubootEnv, setUbootEnv, selectedKeysList } = useFUProviderModule();
  // 60: 表格占 width 的 60%，150：状态的宽度
  const totalWidth = (window.innerWidth * tableWidthObj.sizeRatio) / 100;
  const width = Math.floor((totalWidth - tableWidthObj.statusWidth) / 3);
  const tableCellPosition = '24px';
  return [
    {
      key: 'firmware',
      width,
      dataIndex: 'firmware',
      title: (
        <div
          style={{ marginLeft: tableCellPosition, height: 46, lineHeight: '46px' }}
          className={isDisabled ? 'disable-row' : ''}
        >
          Firmware
        </div>
      ),
      render: (text, record) => {
        if (record.firmware === 'Uboot') {
          const handleChange = (e) => {
            const value = e.target.checked;
            setUbootEnv((list) => {
              const newList = list.map((item) => {
                if (item.key === record.key) {
                  return { ...item, env: Number(value) };
                } else {
                  return { ...item };
                }
              });
              return newList;
            });
          };
          const env = ubootEnv.filter((item) => item.key === record.key)?.[0]?.env;
          const hasSelectKey = selectedKeysList.includes(record.key);
          return (
            <div>
              {text}
              <Checkbox
                style={{ marginLeft: 10 }}
                // TODO, cancel selectkey , env is been cancelled
                checked={!hasSelectKey ? false : env}
                onChange={handleChange}
                disabled={
                  isDisabled || !record.newVersion || record.key.length === 5 || !hasSelectKey
                }
              >
                Override Env Variables
              </Checkbox>
            </div>
          );
        } else {
          return text;
        }
      },
    },
    {
      key: 'version',
      width,
      dataIndex: 'version',
      title: (
        <div style={{ marginLeft: tableCellPosition }} className={isDisabled ? 'disable-row' : ''}>
          Current Version
        </div>
      ),
      render: (text) => <div style={{ marginLeft: tableCellPosition }}>{text}</div>,
    },
    {
      key: 'newVersion',
      width,
      dataIndex: 'newVersion',
      title: (
        <div style={{ marginLeft: tableCellPosition }} className={isDisabled ? 'disable-row' : ''}>
          New Version
        </div>
      ),
      render: (text) => <div style={{ marginLeft: tableCellPosition }}>{text}</div>,
    },
    {
      key: 'status',
      width: tableWidthObj.statusWidth,
      dataIndex: 'status',
      title: (
        <div style={{ marginLeft: tableCellPosition }} className={isDisabled ? 'disable-row' : ''}>
          Status
        </div>
      ),
      render: (text) => {
        return statusShow(text, 46);
      },
    },
  ];
};
