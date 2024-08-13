import { Select } from 'antd';
import { statusShow } from '../pages/DetailsPage/components/statusShow';
import { useFUProviderModule } from './containers';
import '../index.css';

export const options = [
  {
    value: 'auto',
    label: '自动',
  },
  {
    value: 'manual',
    label: '手动',
  },
];
export const envOptions = [
  { value: 0, label: '不覆盖' },
  { value: 1, label: '覆盖' },
];
export const GetColumns = (tableWidthObj, isDisabled) => {
  const { ubootEnv, setUbootEnv } = useFUProviderModule();
  // 60: 表格占 width 的 60%，150：状态的宽度
  const totalWidth = (window.innerWidth * tableWidthObj.sizeRatio) / 100;
  const width = Math.floor((totalWidth - tableWidthObj.statusWidth) / 3);
  return [
    {
      key: 'firmware',
      width,
      dataIndex: 'firmware',
      title: <div className={isDisabled ? 'disable-row' : ''}>固件</div>,
    },
    {
      key: 'version',
      width,
      dataIndex: 'version',
      title: <div className={isDisabled ? 'disable-row' : ''}>版本</div>,
    },
    {
      key: 'newVersion',
      width,
      dataIndex: 'newVersion',
      title: <div className={isDisabled ? 'disable-row' : ''}>新版本</div>,
      render: (text, record) => {
        if (record.firmware === 'Uboot') {
          const handleChange = (value) => {
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
          const env =
            ubootEnv.filter((item) => item.key === record.key)?.[0]?.env || 0;
          return (
            <div>
              {text}
              <Select
                style={{ width: 100, marginLeft: 4 }}
                options={envOptions}
                value={env}
                onChange={handleChange}
                disabled={
                  isDisabled || !record.newVersion || record.key.length === 5
                }
              />
            </div>
          );
        } else {
          return text;
        }
      },
    },
    {
      key: 'status',
      width: tableWidthObj.statusWidth,
      dataIndex: 'status',
      title: <div className={isDisabled ? 'disable-row' : ''}>状态</div>,
      render: (text) => {
        return statusShow(text);
      },
    },
  ];
};
