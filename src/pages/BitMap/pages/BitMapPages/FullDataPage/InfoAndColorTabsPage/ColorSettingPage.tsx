import React from 'react'
import { Checkbox, ColorPicker } from 'antd';
import { ProviderFunc } from '../../../../components/containers';
import '../../../../index.css';

const ColorSettingPage = () => {
  const { bitmapColorModalObj, setBitmapColorModalObj, theme, setTriggerTiming } = ProviderFunc();
  return (
    <div className='information-page'>
      <div style={{ margin: '20px 0', paddingLeft: 20 }}>
        <Checkbox>全选</Checkbox>
        <Checkbox>全不选</Checkbox>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: 20 }}>
        {bitmapColorModalObj.colorList.map((item, index) => (
          <div key={item.value} style={{ display: 'flex', width: 84, margin: '4px 0' }}>
            <div style={{ width: 20, marginRight: 10 }}>{item.value}: </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Checkbox />
              <ColorPicker
                style={{ background: theme === 'dark' ? '#1f1f1f' : '#fff' }}
                size='small'
                defaultValue={item.color}
                onChange={(_, hexString) => {
                  // onchange 直接修改颜色，然后与vscode通信 保存颜色配置文件
                  setBitmapColorModalObj((obj) => {
                    const prevColors = obj.colorList
                    const newColors = [...prevColors];
                    newColors[index].color = hexString;
                    return { ...obj, colorList: newColors };
                  });
                  setTriggerTiming((obj) => ({ ...obj, colorList: obj.colorList + 1 }));
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorSettingPage