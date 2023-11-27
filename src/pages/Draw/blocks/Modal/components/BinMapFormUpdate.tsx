import {
  Button,
  Switch,
  Table,
  Input,
  InputNumber,
  Select,
  Popconfirm,
  ColorPicker,
  Divider,
  Dropdown,
  Space,
  theme,
} from 'antd';
import styles from '../../index.less';
import { useModel } from '@umijs/max';
import { mergeDataSource } from './BinMapFunc';
import { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { newData, colorList, DataType } from './BinMapFunc/binMapDataList';
import React from 'react';

const { useToken } = theme;
const BinMapFormUpdate = () => {
  const { token } = useToken();
  const { hardBinData, softBinData, setHardBinData } = useModel('useDrawModel');

  const [dataSource, setDataSource] = useState(
    mergeDataSource(hardBinData, softBinData),
  );

  const columns: ColumnsType<DataType> = [
    {
      key: 'SoftBin',
      title: <div style={{ padding: '5px 0' }}> SoftBin</div>,
      dataIndex: 'SoftBin',
      render: (text, record, idx) => {
        const handleChange = (e) => {
          const newHardBinData = hardBinData.map((item, index) => {
            if (idx === index) {
              return { ...item, Name: e.target.value };
            }
            return item;
          });
          setHardBinData(newHardBinData);
        };
        return <Input value={text} onChange={handleChange} allowClear />;
      },
    },
    {
      key: 'SoftBinNum',
      title: <div style={{ padding: '5px 0' }}> SoftBinNum</div>,
      dataIndex: 'SoftBinNum',
      render: (text) => {
        return <InputNumber value={text} controls={false} />;
      },
    },
    {
      key: 'HardBin',
      title: <div style={{ padding: '5px 0' }}> HardBin</div>,
      dataIndex: 'HardBin',
      render: (text) => {
        const items = [
          { key: 'HB1', label: 'HB1' },
          { key: 'HB2', label: 'HB2' },
        ];
        const contentStyle: React.CSSProperties = {
          backgroundColor: token.colorBgElevated,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadowSecondary,
        };

        const menuStyle: React.CSSProperties = {
          boxShadow: 'none',
        };

        return (
          //   <Select style={{ width: '100%' }} options={options} value={text} />
          <Dropdown
            menu={{ items }}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu as React.ReactElement, {
                  style: menuStyle,
                })}
                <Divider style={{ margin: 0 }} />
                <Space style={{ padding: 8 }}>
                  <Button type="primary">
                    <PlusOutlined />
                    add
                  </Button>
                </Space>
              </div>
            )}
          >
            <Space>
              {text}
              <DownOutlined />
            </Space>
          </Dropdown>
        );
      },
    },
    {
      key: 'HardBinNum',
      title: <div style={{ padding: '5px 0' }}> HardBinNum</div>,
      dataIndex: 'HardBinNum',
      render: (text) => {
        return <InputNumber value={text} controls={false} />;
      },
    },
    {
      key: 'Type',
      title: <div style={{ padding: '5px 0' }}> Type</div>,
      dataIndex: 'Type',
      render: (text) => {
        const options = [
          { value: 'Pass', label: 'Pass' },
          { value: 'Fail', label: 'Fail' },
        ];
        return (
          <Select style={{ width: '100%' }} options={options} value={text} />
        );
      },
    },
    {
      key: 'MaxCount',
      title: <div style={{ padding: '5px 0' }}> MaxCount</div>,
      dataIndex: 'MaxCount',
      render: (text) => {
        return <InputNumber value={text} controls={false} />;
      },
    },
    {
      key: 'CheckOverflow',
      title: <div style={{ padding: '5px 0' }}> CheckOverflow</div>,
      dataIndex: 'CheckOverflow',
      align: 'center',
      render: (text) => {
        return <Switch defaultChecked={text} />;
      },
    },
    {
      key: 'Color',
      title: <div style={{ padding: '5px 0' }}> Color</div>,
      dataIndex: 'Color',
      width: '6%',
      render: (text, _, idx) => {
        const handleChangeColor = (color, hex) => {
          const newData = dataSource.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                Color: hex,
              };
            }
            return item;
          });
          setDataSource(newData);
        };
        return (
          <>
            <ColorPicker
              value={text}
              onChange={handleChangeColor}
              presets={colorList}
            />
          </>
        );
      },
    },
    {
      key: 'Comment',
      title: <div style={{ padding: '5px 0' }}> Comment</div>,
      dataIndex: 'Comment',
      render: (text) => {
        return <Input style={{ width: '100%' }} value={text} allowClear />;
      },
    },
    {
      key: 'Options',
      title: <div style={{ padding: '5px 0' }}> Options</div>,
      dataIndex: 'Options',
      width: '6%',
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = dataSource.filter((item) => item.key !== record.key);
          setDataSource(newData);
        };
        return (
          <Popconfirm
            title="Are you sure to delete item?"
            onConfirm={() => handleRemoveRow(record)}
            okText="OK"
            cancelText="Cancel"
          >
            <Button style={{ margin: '5px 0' }} type="link">
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  const handleAddSoftBinRows = () => {
    setDataSource([...dataSource, newData]);
  };
  return (
    <>
      <div>
        <Table
          style={{ maxHeight: '70vh', overflowX: 'hidden', overflowY: 'auto' }}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          sticky
        />
      </div>
      <Button
        className={styles['table']}
        icon={<PlusOutlined />}
        style={{ width: '100%' }}
        type="dashed"
        size="middle"
        onClick={handleAddSoftBinRows}
      >
        Add a row
      </Button>
    </>
  );
};

export default BinMapFormUpdate;
