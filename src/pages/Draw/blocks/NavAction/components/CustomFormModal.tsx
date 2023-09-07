import {
  Input,
  Table,
  Button,
  Select,
  Popconfirm,
  Switch,
  InputNumber,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { HardBinDataSourceType, SoftBinDataSourceType } from './defaultData';
import styles from '../../index.less';
import { useModel } from '@umijs/max';

const CustomFormModal = () => {
  const { hardBinData, setHardBinData, softBinData, setSoftBinData } =
    useModel('useDrawModel');
  const xxx = hardBinData
    .map((item) => item.Name)
    .map((item) => ({
      value: item,
      label: item,
    }));
  const [hardBinNameList, setHardBinNameList] = useState(xxx);
  // 删除列占的比例
  const optionWidth: string = '12%';
  // hardBin 的列
  const HardBinColumns: ColumnsType<HardBinDataSourceType> = [
    {
      key: 'Name',
      title: <div style={{ padding: '5px 0' }}> Name</div>,
      dataIndex: 'Name',
      render: (_, record, idx) => {
        const handleChange = (e) => {
          const newHardBinData = hardBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Name: e.target.value };
            }
            return item;
          });
          setHardBinData(newHardBinData);
          setHardBinNameList(
            newHardBinData
              .map((item) => item.Name)
              .map((item) => ({
                value: item,
                label: item,
              })),
          );
        };
        return (
          <>
            <Input
              value={record.Name}
              onChange={handleChange}
              status={record.Name === '' ? 'error' : ''}
              allowClear
            />
            {record.Name === '' ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'Number',
      title: 'Number',
      dataIndex: 'Number',
      render: (text, record, idx) => {
        const handleChange = (value) => {
          const newBinData = hardBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Number: value };
            }
            return item;
          });
          setHardBinData(newBinData);
        };
        return (
          <>
            <InputNumber
              style={{ width: '100%' }}
              value={record.Number}
              onChange={handleChange}
              status={!record.Number ? 'error' : ''}
              controls={false}
            />
            {!record.Number ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'Type',
      title: 'Type',
      dataIndex: 'Type',
      render: (text, record, idx) => {
        const handleChange = (value) => {
          const newHardBinData = hardBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Type: value };
            }
            return item;
          });
          setHardBinData(newHardBinData);
        };
        return (
          <>
            <Select
              style={{ width: '100%' }}
              defaultValue={text}
              onChange={handleChange}
              status={record.Type === '' ? 'error' : ''}
              options={[
                { label: 'Pass', value: 'Pass' },
                { label: 'Fail', value: 'Fail' },
              ]}
            />
            {record.Type === '' ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'Color',
      title: 'Color',
      dataIndex: 'Color',
      render: (_, record, idx) => {
        const handleChange = (e) => {
          const newHardBinData = hardBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Color: e.target.value };
            }
            return item;
          });
          setHardBinData(newHardBinData);
        };
        return (
          <>
            <Input
              value={record.Color}
              onChange={handleChange}
              status={record.Color === '' ? 'error' : ''}
              allowClear
            />
            {record.Color === '' ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'option',
      title: '操作',
      align: 'center',
      width: optionWidth,
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = hardBinData.filter((item) => item.Key !== record.Key);
          setHardBinData(newData);
          setHardBinNameList(
            newData
              .map((item) => item.Name)
              .map((item) => ({
                value: item,
                label: item,
              })),
          );
        };
        return (
          <Popconfirm
            title="删除此项?"
            onConfirm={() => handleRemoveRow(record)}
            okText="确定"
            cancelText="取消"
          >
            <Button style={{ margin: '5px 0' }} type="link">
              删除
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  // softBin 的列
  const SoftBinColumns: ColumnsType<SoftBinDataSourceType> = [
    {
      key: 'Name',
      title: <div style={{ padding: '5px 0' }}>Name</div>,
      dataIndex: 'Name',
      render: (text, record, idx) => {
        const handleChange = (e) => {
          const newSoftBinData = softBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Name: e.target.value };
            }
            return item;
          });
          setSoftBinData(newSoftBinData);
        };
        return (
          <>
            <Input
              value={text}
              onChange={handleChange}
              status={record.Name === '' ? 'error' : ''}
              allowClear
            />
            {record.Name === '' ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'Number',
      title: 'Number',
      dataIndex: 'Number',
      render: (text, record, idx) => {
        const handleChange = (value) => {
          const newSoftBinData = softBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Number: value };
            }
            return item;
          });
          setSoftBinData(newSoftBinData);
        };
        return (
          <>
            <InputNumber
              value={text}
              onChange={handleChange}
              status={!record.Number ? 'error' : ''}
              controls={false}
            />
            {!record.Number ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'HardBin',
      title: 'HardBin',
      dataIndex: 'HardBin',
      width: '12%',
      render: (text, record, idx) => {
        const handleChange = (value) => {
          const newSoftBinData = softBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, HardBin: value };
            }
            return item;
          });
          setSoftBinData(newSoftBinData);
        };
        const isHasOptions = hardBinNameList
          .map((item) => item.label)
          .includes(text);
        return (
          <>
            <Select
              value={text}
              style={{ width: '100%' }}
              onChange={handleChange}
              status={record.HardBin === '' || !isHasOptions ? 'error' : ''}
              options={hardBinNameList}
            />
            {record.HardBin === '' ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : !isHasOptions ? (
              <div style={{ color: 'red' }}>* 值已不存在</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'MaxCount',
      title: 'MaxCount',
      dataIndex: 'MaxCount',
      render: (text, record, idx) => {
        const handleChange = (value) => {
          const newSoftBinData = softBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, MaxCount: value };
            }
            return item;
          });
          setSoftBinData(newSoftBinData);
        };
        return (
          <>
            <InputNumber
              value={text}
              onChange={handleChange}
              status={!record.MaxCount ? 'error' : ''}
              controls={false}
            />
            {!record.MaxCount ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'CheckOverflow',
      title: 'CheckOverflow',
      dataIndex: 'CheckOverflow',
      align: 'center',
      render: (text) => (
        <Switch
          checkedChildren="true"
          unCheckedChildren="false"
          defaultChecked={text}
        />
      ),
    },
    {
      key: 'Color',
      title: 'Color',
      dataIndex: 'Color',
      render: (text, record, idx) => {
        const handleChange = (e) => {
          const newSoftBinData = softBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Color: e.target.value };
            }
            return item;
          });
          setSoftBinData(newSoftBinData);
        };
        return (
          <>
            <Input
              value={text}
              onChange={handleChange}
              status={record.Name === '' ? 'error' : ''}
              allowClear
            />
            {record.Color === '' ? (
              <div style={{ color: 'red' }}>* 不能为空</div>
            ) : null}
          </>
        );
      },
    },
    {
      key: 'Comment',
      title: 'Comment',
      dataIndex: 'Comment',
      render: (text, _, idx) => {
        const handleChange = (e) => {
          const newSoftBinData = softBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Comment: e.target.value };
            }
            return item;
          });
          setSoftBinData(newSoftBinData);
        };
        return (
          <Input
            placeholder="请输入"
            value={text}
            onChange={handleChange}
            allowClear
          />
        );
      },
    },
    {
      key: 'option',
      title: '操作',
      align: 'center',
      width: optionWidth,
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = softBinData.filter((item) => item.Key !== record.Key);
          setSoftBinData(newData);
        };
        return (
          <Popconfirm
            title="删除此项?"
            onConfirm={() => handleRemoveRow(record)}
            okText="确定"
            cancelText="取消"
          >
            <Button style={{ margin: '5px 0' }} type="link">
              删除
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  // 添加 hardBin 行
  const handleAddHardBinRows = () => {
    const hardBinDataLength = hardBinData.length;
    const newData = {
      Key: hardBinDataLength,
      Name: '',
      Number: undefined,
      Type: '',
      Color: '',
    };
    setHardBinData([...hardBinData, newData]);
  };
  //   添加 softBin 行
  const handleAddSoftBinRows = () => {
    const softBinDataLength = softBinData.length;
    const newData = {
      Key: softBinDataLength,
      Name: '',
      Number: undefined,
      HardBin: '',
      MaxCount: undefined,
      CheckOverflow: false,
      Color: '',
      Comment: '',
    };
    setSoftBinData([...softBinData, newData]);
  };

  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <div className={styles['binMap-header']}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>HardBin</div>
        <Button type="primary" size="middle" onClick={handleAddHardBinRows}>
          添加一行
        </Button>
      </div>
      <Table
        className={styles['table']}
        columns={HardBinColumns}
        dataSource={hardBinData}
        pagination={false}
      />
      <div className={styles['binMap-header']}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>SoftBin</div>
        <Button type="primary" size="middle" onClick={handleAddSoftBinRows}>
          添加一行
        </Button>
      </div>
      <Table
        className={styles['table']}
        columns={SoftBinColumns}
        dataSource={softBinData}
        pagination={false}
      />
    </div>
  );
};

export default CustomFormModal;
