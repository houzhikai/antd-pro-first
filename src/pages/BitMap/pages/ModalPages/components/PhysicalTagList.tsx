import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Typography, Select, Button, Input, Space } from 'antd';
import ShowTagPage from './ShowTagPage';

const PhysicalTagList = () => {
  const defaultShowInput: {
    key: number | undefined;
    value: string;
    status: undefined | 'warning' | 'error';
  } = { key: undefined, value: '', status: undefined };
  const [isShowInput, setIsShowInput] = useState(defaultShowInput);
  const tagNameList: any = [
    { value: 'physical_file1', label: 'physical_file1', location: '' },
    { value: 'physical_file2', label: 'physical_file2', location: '' },
    { value: 'physical_file3', label: 'physical_file3', location: '' },
  ];
  const [options, setOptions] = useState<any>([].concat(tagNameList));
  const handleAddFile = () => {
    let id = 0;
    const newFileName = {
      value: `new_file${id++}`,
      label: `new_file${id++}`,
      location: '',
    };
    setOptions((list) => [newFileName, ...list]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const status =
      options.filter((option) => option.value === value).length > 0 ||
      value === ''
        ? 'error'
        : undefined;
    setIsShowInput((obj) => {
      return {
        ...obj,
        status,
        value,
      };
    });
  };

  const handlePressEnter = (e, index) => {
    const value = e.target.value;

    if (isShowInput.status !== 'error' && isShowInput.value !== '') {
      const newOptions = options.map((item, idx) => {
        if (index === idx) {
          return {
            ...item,
            value,
            label: value,
          };
        }
        return item;
      });
      setOptions(newOptions);
    }
    if (isShowInput.value === '') {
      setOptions(options);
    }

    setIsShowInput(defaultShowInput);
  };

  return (
    <div>
      <Typography.Title level={4}>
        <span>Physical</span>
        <Select
          style={{ marginLeft: 20, width: 200 }}
          options={options}
          defaultValue={options[0]}
        />
      </Typography.Title>
      {options.map((tag: any, index) => {
        return (
          <Space
            key={tag.value}
            onDoubleClick={() =>
              setIsShowInput((obj) => ({
                ...obj,
                value: tag.label,
                key: index,
              }))
            }
          >
            {isShowInput.key === index ? (
              <div style={{ marginRight: 10 }}>
                <Input
                  autoFocus
                  allowClear
                  value={isShowInput.value}
                  onChange={handleChange}
                  onPressEnter={(e) => handlePressEnter(e, index)}
                  onBlur={(e) => handlePressEnter(e, index)}
                  status={isShowInput.status}
                />
              </div>
            ) : (
              <ShowTagPage setOptions={setOptions} tag={tag} />
            )}
          </Space>
        );
      })}
      <Button
        size="small"
        type="primary"
        onClick={handleAddFile}
        icon={
          <PlusOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      >
        Add a Physical File
      </Button>
    </div>
  );
};

export default PhysicalTagList;
