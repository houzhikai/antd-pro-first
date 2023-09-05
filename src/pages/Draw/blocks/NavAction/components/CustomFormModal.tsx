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
import {
  HardBinDataSourceType,
  SoftBinDataSourceType,
  defaultHardBinData,
  defaultSoftBinData,
} from './defaultData';
import styles from '../../index.less';

const CustomFormModal = () => {
  const [hardBinData, setHardBinData] = useState(defaultHardBinData);
  const [softBinData, setSoftBinData] = useState(defaultSoftBinData);
  // 删除列占的比例
  const optionWidth: string = '12%';
  // hardBin 的列
  const HardBinColumns: ColumnsType<HardBinDataSourceType> = [
    {
      title: <div style={{ padding: '5px 0' }}> Name</div>,
      dataIndex: 'name',

      render: (text) => <Input defaultValue={text} allowClear />,
    },
    {
      title: 'Number',
      dataIndex: 'number',
      render: (text) => (
        <InputNumber
          style={{ width: '100%' }}
          defaultValue={text}
          controls={false}
        />
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (text) => (
        <Select
          defaultValue={text}
          style={{ width: '100%' }}
          options={[
            { label: 'pass', value: 'pass' },
            { label: 'fail', value: 'fail' },
          ]}
        />
      ),
    },
    {
      title: 'Color',
      dataIndex: 'color',
      render: (text) => <Input defaultValue={text} allowClear />,
    },
    {
      title: '操作',
      align: 'center',
      width: optionWidth,
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = hardBinData.filter((item) => item.key !== record.key);
          setHardBinData(newData);
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
      title: <div style={{ padding: '5px 0' }}> Name</div>,
      dataIndex: 'name',
      render: (text) => <Input defaultValue={text} allowClear />,
    },
    {
      key: 'number',
      title: 'Number',
      dataIndex: 'number',
      render: (text) => <InputNumber defaultValue={text} controls={false} />,
    },
    {
      key: 'hardBin',
      title: 'HardBin',
      dataIndex: 'hardBin',
      render: (text) => (
        <Select
          defaultValue={text}
          allowClear
          options={[
            { label: 'HB1', value: 'HB1' },
            { label: 'HB2', value: 'HB2' },
            { label: 'HB3', value: 'HB3' },
          ]}
        />
      ),
    },
    {
      key: 'maxCount',
      title: 'MaxCount',
      dataIndex: 'maxCount',
      render: (text) => <InputNumber defaultValue={text} controls={false} />,
    },
    {
      key: 'checkOverflow',
      title: 'CheckOverflow',
      dataIndex: 'checkOverflow',
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
      key: 'color',
      title: 'Color',
      dataIndex: 'color',
      render: (text) => <Input defaultValue={text} allowClear />,
    },
    {
      key: 'comment',
      title: 'Comment',
      dataIndex: 'comment',
      render: (text) => (
        <Input placeholder="请输入" defaultValue={text} allowClear />
      ),
    },
    {
      key: 'option',
      title: '操作',
      align: 'center',
      width: optionWidth,
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = softBinData.filter((item) => item.key !== record.key);
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
      key: hardBinDataLength,
      name: '',
      number: undefined,
      type: '',
      color: '',
    };
    setHardBinData([...hardBinData, newData]);
  };
  //   添加 softBin 行
  const handleAddSoftBinRows = () => {
    const softBinDataLength = softBinData.length;
    const newData = {
      key: softBinDataLength,
      name: '',
      number: undefined,
      hardBin: '',
      maxCount: undefined,
      checkOverflow: false,
      color: '',
      comment: '',
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
