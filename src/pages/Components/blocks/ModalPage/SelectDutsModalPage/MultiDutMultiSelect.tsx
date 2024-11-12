import React, { useState } from 'react';
import { Button, Cascader, Input, message, Tag, Tooltip } from 'antd';
import './index.css';
import CustomFormItemPage from '@/pages/BitMap/pages/NavPage/CustomFormItemPage';

const MultiDutMultiSelect = () => {
  const { SHOW_CHILD } = Cascader;
  //   type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];

  interface Option {
    value: string;
    label: string;
    children?: Option[];
    disabled?: boolean;
  }

  const defaultOptions: Option[] = [
    {
      value: 'test_1',
      label: 'test_1',
      children: [
        {
          value: 'dut_x0_y01111',
          label: 'dut_x0_y0',
        },
        {
          value: 'dut_x0_y111111111111',
          label: 'dut_x0_y1',
        },
        {
          value: 'dut_x0_y2111111111',
          label: 'dut_x0_y2',
        },
        {
          value: 'dut_x1_y3111111111',
          label: 'dut_x1_y3',
        },
        {
          value: 'dut_x1_y41111111111111',
          label: 'dut_x1_y4',
        },
        {
          value: 'dut_x1_y511111111111',
          label: 'dut_x1_y5',
        },
      ],
    },
    {
      value: 'test_2',
      label: 'test_2',
      children: [
        {
          value: 'dut_x2_y0',
          label: 'dut_x2_y0',
        },
        {
          value: 'dut_x2_y1',
          label: 'dut_x2_y1',
        },
        {
          value: 'dut_x2_y2',
          label: 'dut_x2_y2',
        },
        {
          value: 'dut_x2_y3',
          label: 'dut_x2_y3',
        },
        {
          value: 'dut_x1_y4',
          label: 'dut_x1_y4',
        },
        {
          value: 'dut_x1_y5',
          label: 'dut_x1_y5',
        },
      ],
    },
    {
      value: 'test_3',
      label: 'test_3',
      children: [
        {
          value: 'dut_x3_y0',
          label: 'dut_x3_y0',
        },
        {
          value: 'dut_x3_y1',
          label: 'dut_x3_y1',
        },
        {
          value: 'dut_x3_y2',
          label: 'dut_x3_y2',
        },
        {
          value: 'dut_x3_y3',
          label: 'dut_x3_y3',
        },
        {
          value: 'dut_x3_y4',
          label: 'dut_x3_y4',
        },
        {
          value: 'dut_x3_y5',
          label: 'dut_x3_y5',
        },
        {
          value: 'dut_x3_y6',
          label: 'dut_x3_y6',
        },
        {
          value: 'dut_x3_y7',
          label: 'dut_x3_y7',
        },
      ],
    },
  ];
  const [options, setOptions] = useState(defaultOptions);

  const filter = (inputValue: string, path: any) => {
    console.log({ inputValue, path });
    return path.some(
      (option) =>
        (option.label as string)
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1,
    );
  };

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (value) => {
    if (value.length <= 16) {
      setSelectedValues(value);
      // 勾选 少于 16个dut支持选择
      const toggleDisable = (options) => {
        return options.map((option) => {
          const newOption = { ...option };
          if (newOption.children) {
            newOption.children = toggleDisable(newOption.children);
          }
          return newOption;
        });
      };
      setOptions(toggleDisable(options));
    } else {
      message.error('最多只能选择16个标签');
    }
  };
  const tagRender: any = ({ label, _, closable, onClose }) => {
    console.log({ _ });
    return (
      <Tag closable={closable} onClose={onClose} style={{ margin: '4px 6px' }}>
        {label}
      </Tag>
    );
  };

  return (
    <>
      <CustomFormItemPage title="WaferID Path">
        <Input style={{ margin: '0 20px', width: 400 }} value="" disabled />
        <Button type="primary">Browse Path</Button>
      </CustomFormItemPage>

      <CustomFormItemPage title="Test Unit">
        <Cascader
          style={{ margin: '0 20px', width: 530 }}
          placement="bottomLeft"
          popupClassName="custom-cascader"
          multiple
          maxTagCount={16}
          value={selectedValues}
          options={options}
          changeOnSelect
          onChange={handleChange}
          showCheckedStrategy={SHOW_CHILD}
          placeholder="Please select"
          showSearch={{ filter }}
          onSearch={(value) => console.log(value)}
          dropdownRender={(menu) => <div style={{ width: 600 }}>{menu}</div>}
          tagRender={tagRender}
          optionRender={(option) => {
            console.log({ option });
            return (
              <Tooltip placement="bottom" title={option.value}>
                <div>{option.label}</div>
              </Tooltip>
            );
          }}
        />
      </CustomFormItemPage>
    </>
  );
};

export default MultiDutMultiSelect;
