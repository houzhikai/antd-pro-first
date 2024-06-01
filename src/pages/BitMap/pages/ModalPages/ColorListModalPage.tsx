import React, { useEffect, useState } from 'react';
import { ColorPicker, Modal, Table } from 'antd';
import { ProviderFunc } from '../../components/containers';
import '../../index.css';

const ColorListModalPage = () => {
  const { modifyColorModalObj, setModifyColorModalObj, selectedTreeDataList } =
    ProviderFunc();
  const [colorList, setColorList] = useState(modifyColorModalObj.colorList);

  useEffect(() => {
    setColorList(modifyColorModalObj.colorList);
  }, [modifyColorModalObj.open]);

  const handleOk = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: false, colorList }));
  };

  const handleCancel = () => {
    setModifyColorModalObj((obj) => ({
      ...obj,
      open: false,
      colorList: modifyColorModalObj.colorList,
    }));
  };

  const dataSource = [
    {
      file1: 'Pass',
      and: '+',
      file2: 'Pass',
      color: colorList[0],
    },
    {
      file1: 'Fail',
      and: '+',
      file2: 'Pass',
      color: colorList[1],
    },
    {
      file1: 'Pass',
      and: '+',
      file2: 'Fail',
      color: colorList[2],
    },
    {
      file1: 'Fail',
      and: '+',
      file2: 'Fail',
      color: colorList[3],
    },
  ];

  const columns: any = [
    {
      title: <div>{selectedTreeDataList?.[1]?.dut || ''}</div>,
      dataIndex: 'file2',
      key: 'file2',
      align: 'center',
    },
    {
      title: '&',
      dataIndex: 'and',
      key: 'and',
      align: 'center',
    },
    {
      title: <div>{selectedTreeDataList?.[0]?.dut || ''}</div>,
      dataIndex: 'file1',
      key: 'file1',
      align: 'center',
    },
    {
      title: 'color',
      dataIndex: 'color',
      key: 'color',
      align: 'center',
      render: (text, _, index) => {
        return (
          <ColorPicker
            defaultValue={text}
            onChange={(_, hexString) => {
              setColorList((prevColors) => {
                const newColors = [...prevColors];
                newColors[index] = hexString;
                return newColors;
              });
            }}
          />
        );
      },
    },
  ];

  return (
    <div>
      <Modal
        title="Color List"
        // open={true}
        open={modifyColorModalObj.open}
        okText="Save"
        cancelText="Cancel"
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <div>
          File1: {selectedTreeDataList?.[0]?.location || ''}/
          {selectedTreeDataList?.[0]?.dut || ''}
        </div>
        <div>
          File2: {selectedTreeDataList?.[1]?.location || ''}/
          {selectedTreeDataList?.[1]?.dut || ''}
        </div>
        <br />
        <Table
          bordered={false}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </Modal>
    </div>
  );
};

export default ColorListModalPage;
