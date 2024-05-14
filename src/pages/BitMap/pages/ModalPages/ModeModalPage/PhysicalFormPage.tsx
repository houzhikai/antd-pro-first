import React from 'react';
import { Button, Input, Select, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const PhysicalFormModal = () => {
  const handleAddSoftBinRows = () => {};
  const dataSource = [{ fileName: '11', location: 'xxxx' }];
  const columns = [
    {
      key: 'fileName',
      dataIndex: 'fileName',
      title: '文件名',
      render: (text) => {
        const handelChange = (value) => {
          console.log(value);
        };
        return (
          <Input
            style={{ border: 'none' }}
            value={text}
            onChange={handelChange}
          />
        );
      },
    },
    {
      key: 'location',
      dataIndex: 'location',
      title: '本地地址',
    },
    {
      key: 'option',
      dataIndex: 'option',
      title: '操作',
      render: () => <Button type="link">Delete</Button>,
    },
  ];
  const options = [
    { value: '11', label: '11' },
    { value: '22', label: '22' },
  ];
  return (
    <>
      <Typography.Title level={4}>
        <span>Physical</span>
        <Select style={{ marginLeft: 20, width: 200 }} options={options} />
      </Typography.Title>
      <div>
        <Table
          style={{ maxHeight: '70vh', overflowX: 'hidden', overflowY: 'auto' }}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          sticky
          bordered
        />
      </div>
      <Button
        className="table"
        icon={
          <PlusOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
        style={{ width: '100%' }}
        type="dashed"
        size="middle"
        onClick={handleAddSoftBinRows}
      >
        Add a Physical File
      </Button>
    </>
  );
};

export default PhysicalFormModal;
