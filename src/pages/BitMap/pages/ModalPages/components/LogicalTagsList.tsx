import React, { useState } from 'react';
import { Typography, Select, Button, Input, Space } from 'antd';
import { initLogicalOptions } from '@/pages/BitMap/components/initValues';
import { PlusOutlined } from '@ant-design/icons';
import ShowTagPage from './ShowTagPage';
import { ProviderFunc } from '../../../components/containers';

const LogicalTagsList = () => {
  const { setModeSelectedOptions } = ProviderFunc();
  const defaultShowInput: {
    key: number | undefined;
    value: string;
    status: undefined | 'warning' | 'error';
  } = { key: undefined, value: '', status: undefined };
  const [isShowInput, setIsShowInput] = useState(defaultShowInput);
  const tagNameList: any = [
    { value: 'Tag1', label: 'Tag1', location: '/var/partner/logical/Tag1' },
    { value: 'Tag2', label: 'Tag2', location: '/var/partner/logical/Tag2' },
    { value: 'Tag3', label: 'Tag3', location: '/var/partner/logical/Tag3' },
  ];
  const [options, setOptions] = useState<any>([].concat(tagNameList));
  const LogicalOptions = initLogicalOptions.concat(options);
  const handleAddFile = () => {
    let id = 0;
    const newFileName = {
      value: `new_file${id++}`,
      label: `new_file${id++}`,
      location: '',
    };
    setOptions((list) => [newFileName, ...list]);
  };

  const handleChangeTagLabel = (e) => {
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

  const handleChangeLogicalOptions = (value) => {
    const newOptions = LogicalOptions.filter((item) => item.value === value)[0];
    setModeSelectedOptions((obj) => ({ ...obj, logical: newOptions }));
  };

  return (
    <div>
      <Typography.Title level={4}>
        <span>Logical</span>
        <Select
          style={{ marginLeft: 20, width: 200 }}
          options={LogicalOptions}
          defaultValue={initLogicalOptions[0]}
          onChange={handleChangeLogicalOptions}
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
                  onChange={handleChangeTagLabel}
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
        Add a Logical File
      </Button>
    </div>
  );
};

export default LogicalTagsList;
