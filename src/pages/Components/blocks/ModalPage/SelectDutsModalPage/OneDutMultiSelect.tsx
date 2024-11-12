import CustomFormItemPage from '@/pages/BitMap/pages/NavPage/CustomFormItemPage';
import { PlusCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Input, Select, Tag, Tooltip } from 'antd';
import React, { useState } from 'react';

const OneDutMultiSelect = () => {
  const defaultList = [
    { key: 1, testUnit: 'test1', dut: 'dutX0Y0' },
    { key: 2, testUnit: 'test1', dut: 'dutX1Y0' },
    { key: 3, testUnit: 'test2', dut: 'dutX0Y0' },
    { key: 4, testUnit: 'test2', dut: 'dutX1Y0' },
  ];
  const [list, setList] = useState<any[]>(defaultList);
  const handleAddDuts = () => {
    setList((list) => {
      const newDuts = {
        key: list.length,
        testUnit: `test${list.length}`,
        dut: `dutX${list.length}Y${list.length}`,
      };
      console.log({ newDuts, 111: Array.from(new Set([newDuts, ...list])) });
      return Array.from(new Set([newDuts, ...list]));
    });
  };

  return (
    <>
      <CustomFormItemPage title="WaferID Path">
        <Input style={{ margin: '0 20px', width: 400 }} value="" disabled />
        <Button type="primary">Browse Path</Button>
      </CustomFormItemPage>

      <CustomFormItemPage title="Test Unit">
        <Select style={{ margin: '0 20px', width: 400 }} />
      </CustomFormItemPage>

      <CustomFormItemPage title="Dut">
        <Input addonBefore="X" style={{ marginLeft: 20, width: 200 }} />
        <Input addonBefore="Y" style={{ marginRight: 20, width: 200 }} />
        <Button
          type="text"
          disabled={list.length >= 16}
          onClick={handleAddDuts}
          icon={
            <PlusCircleOutlined
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          }
        />
      </CustomFormItemPage>

      <CustomFormItemPage
        title={
          <span>
            Select Duts List
            <Tooltip title="最多选择16个">
              <QuestionCircleOutlined
                style={{ marginLeft: 10, fontSize: 14 }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </Tooltip>
          </span>
        }
      >
        <div style={{ marginLeft: 175, display: 'flex', flexWrap: 'wrap' }}>
          {list.map((item) => {
            return (
              <div key={item.key} style={{ margin: '6px 0', width: '50%' }}>
                <Tag closable>
                  {item.testUnit}-{item.dut}
                </Tag>
              </div>
            );
          })}
        </div>
      </CustomFormItemPage>
    </>
  );
};

export default OneDutMultiSelect;
