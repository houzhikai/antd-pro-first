import { Select } from 'antd';
import { statusShow } from './statusShow';
import { useFUProviderModule } from './containers';

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
export const GetColumns = () => {
  const { ubootEnv, setUbootEnv } = useFUProviderModule();
  return [
    {
      key: 'firmware',
      width: '25%',
      dataIndex: 'firmware',
      title: '固件',
    },
    {
      key: 'version',
      width: '25%',
      dataIndex: 'version',
      title: '版本',
    },
    {
      key: 'newVersion',
      width: '25%',
      dataIndex: 'newVersion',
      title: '新版本',
      render: (text, record) => {
        if (record.firmware === 'Uboot') {
          const handleChange = (value) => {
            setUbootEnv((list) => {
              const xxx = list.map((item) => {
                if (item.key === record.key) {
                  return { ...item, env: Number(value) };
                } else {
                  return { ...item };
                }
              });
              return xxx;
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
                disabled={!record.newVersion || record.key.length === 5}
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
      width: '25%',
      dataIndex: 'status',
      title: '状态',
      render: (text) => {
        return statusShow(text);
      },
    },
  ];
};
