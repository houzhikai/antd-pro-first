import { useModel } from '@umijs/max';
import { Button, Modal, Tooltip, Image } from 'antd';
import otherColor from '@/icon/otherColor.svg';
import { colorList, standardColorList } from './components/data';
import { Colorpicker, AnyColorFormat } from 'antd-colorpicker';
import { useState } from 'react';

const ColorListModal = () => {
  const { isShowModal, setIsShowModal, setChangeColor } =
    useModel('useEchartsModel');

  const handleCancel = () => {
    setIsShowModal((obj) => {
      return {
        ...obj,
        isOpen: false,
      };
    });
  };

  const handleSelectColor = (color: string) => {
    setChangeColor((pre) => {
      let newArr = [...pre];
      newArr.splice(isShowModal.order, 1, color); // 选中第n个坐标，删除一个，将color替换
      return newArr;
    });
  };

  const [color, setColor] = useState<AnyColorFormat>({
    r: 0,
    g: 0,
    b: 0,
    a: 0.5,
  });

  const onChange = (color: AnyColorFormat) => {
    console.log(color, 11);
    setColor(color);
  };

  return (
    <Modal
      title="选择想要更改的颜色"
      open={isShowModal.isOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" type="primary" onClick={handleCancel}>
          关闭
        </Button>,
      ]}
    >
      <div>标准色</div>
      <div style={{ display: 'flex', margin: '20px 0' }}>
        {standardColorList.map((item) => (
          <div
            key={item}
            style={{
              margin: '0 10px',
              width: 20,
              height: 20,
              cursor: 'pointer',
              background: item,
            }}
            onClick={() => handleSelectColor(item)}
          />
        ))}
      </div>
      <div>主题颜色</div>
      <div style={{ display: 'flex', margin: '20px 0' }}>
        {colorList.map((item) => (
          <Tooltip key={item.color} title={item.name} color={item.color}>
            <div
              style={{
                margin: '0 10px',
                width: 20,
                height: 20,
                cursor: 'pointer',
                background: item.color,
              }}
              onClick={() => handleSelectColor(item.color)}
            />
          </Tooltip>
        ))}
      </div>
      <div>
        <Image
          style={{ width: 18, height: 18, marginRight: 10 }}
          src={otherColor}
          preview={false}
        />
        自定义颜色...
      </div>

      <Colorpicker value={color} onChange={onChange} />
    </Modal>
  );
};

export default ColorListModal;
