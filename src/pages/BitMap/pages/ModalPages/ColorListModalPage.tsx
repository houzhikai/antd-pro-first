import React, { useEffect, useState } from 'react';
import { ColorPicker, Modal, Table } from 'antd';
import { ProviderFunc } from '../../components/containers';
import '../../index.css';

const ColorListModalPage = () => {
  const { modifyColorModalObj, setModifyColorModalObj, selectedTreeDataList, theme, setEchartsDataColor, setTriggerTiming } =
    ProviderFunc();
  const [colorList, setColorList] = useState(modifyColorModalObj.colorList || []);

  useEffect(() => {
    setColorList(modifyColorModalObj.colorList);
  }, [modifyColorModalObj.open]);

  const handleOk = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: false, colorList }));
    const newColorList = colorList.map((item, index)=>{
      return {  value: index + 1,  color: item }
    })
    setEchartsDataColor(newColorList)
    setTriggerTiming(obj=> ({...obj, colorList: obj.colorList + 1}))
  };

  const handleCancel = () => {
    setModifyColorModalObj((obj) => ({
      ...obj,
      open: false,
      colorList: modifyColorModalObj.colorList,
    }));
  };

  const dataSource = [
     // value = 1
     {
      file1: 'Fail',
      file2: 'Pass',
      color: colorList[0],
    },
    // value = 2
    {
      file1: 'Pass',
      file2: 'Fail',
      color: colorList[1],
    },
    // value = 3
    {
      file1: 'Fail',
      file2: 'Fail',
      color: colorList[2],
    },
  ];

  const columns: any = [
    {
      title: 'Dut1',
      dataIndex: 'file1',
      key: 'file1',
      align: 'center',
    },
    {
      title: 'Dut2',
      dataIndex: 'file2',
      key: 'file2',
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
            style={{background: theme === 'dark' ? '#1f1f1f' : '#fff'}}
            size='small'
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
          Dut1: {selectedTreeDataList?.[0]?.location || ''}/{selectedTreeDataList?.[0]?.name || ''}
        </div>
        <div>
          Dut2: {selectedTreeDataList?.[1]?.location || ''}/{selectedTreeDataList?.[1]?.name || ''}
        </div>
        <br />
        <Table
          size='small'
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
