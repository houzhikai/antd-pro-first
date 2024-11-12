import { Button, ColorPicker, Divider, Modal, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'
import { ProviderFunc } from '../../../../components/containers';
import { otherColor } from '../../../../icons/base64/otherColor';

const ColorSettingModal = () => {
  const { theme, setTriggerTiming, bitmapColorModalObj, setBitmapColorModalObj } = ProviderFunc();

  // 页面展示的颜色列表，只供展示使用，保存时的颜色列表用 bitmapColorModalObj.colorList
  const [viewColorList, setViewColorList] = useState(bitmapColorModalObj.colorList || []);

  // useEffect(() => {
  //   setColorList(bitmapColorModalObj.colorList);
  // }, [bitmapColorModalObj.open]);

  const handleOpenColorListModal = () => setBitmapColorModalObj((obj) => ({ ...obj, open: true }));

  const handleOk = () => {
    // 修改 颜色配置文件 列表信息
    setBitmapColorModalObj((obj) => ({ ...obj, open: false, viewColorList }));
    // 向vscode传递消息
    setTriggerTiming((obj) => ({ ...obj, colorList: obj.colorList + 1 }));
  }

  const handleCancel = () => {
    setBitmapColorModalObj((obj) => ({ ...obj, open: false }));
  }

  return (
    <>
      <Tooltip title='Color Settings' placement='bottom'>
        <Button
          className='bit-map-nav-gap'
          type='text'
          icon={<img width={20} src={otherColor} />}
          onClick={handleOpenColorListModal}
        />
      </Tooltip>
      <Modal
        title='Color List'
        width={700}
        open={bitmapColorModalObj.open}
        okText='Save'
        cancelText='Cancel'
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        destroyOnClose
      >
        <span>label为fail bit的数量，不关心哪块dut有问题</span>
        <Divider />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {viewColorList.map((item, index) => (
            <div key={item.value} style={{ display: 'flex', width: 100 }}>
              <div style={{ width: 20, marginRight: 10 }}>{item.value}: </div>
              <div>
                <ColorPicker
                  style={{ background: theme === 'dark' ? '#1f1f1f' : '#fff' }}
                  size='small'
                  defaultValue={item.color}
                  onChange={(_, hexString) => {
                    // onchange 只修改页面的颜色配置，保存时的颜色配置由 bitmapColorModalObj.colorList 接管
                    setViewColorList((prevColors) => {
                      const newColors = [...prevColors];
                      newColors[index].color = hexString;
                      return newColors;
                    });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* visualMap: {
      show: true,
      min: 1,
      max: 16,
      type: 'piecewise',
      pieces: bitmapColorModalObj.colorList.slice(1),
      orient: 'vertical',
      inverse: true,
      left: '0',
      top: '0',
    }, */}
      </Modal>
    </>
  )
}

export default ColorSettingModal