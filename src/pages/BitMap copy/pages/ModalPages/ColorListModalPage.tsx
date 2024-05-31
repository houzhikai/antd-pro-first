import { useEffect, useState } from 'react';
import { ColorPicker, Modal } from 'antd';
import { ProviderFunc } from '../../components/containers';
import '../../index.css';

const ColorListModalPage = () => {
  const { modifyColorModalObj, setModifyColorModalObj } = ProviderFunc();
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

  return (
    <div>
      <Modal
        title="Color List"
        open={modifyColorModalObj.open}
        okText="Save"
        cancelText="Cancel"
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <div>File1: </div>
        <div>File2: </div>
        <br />
        <div>File2 & File1</div>
        {colorList.map((item, index) => (
          <div key={index} className="bit-map-color-modal">
            <span className="bit-map-color-modal-label">{item.label}:</span>
            <ColorPicker
              defaultValue={item.color}
              onChange={(_, hexString) => {
                setColorList((prevColors) => {
                  const newColors = [...prevColors];
                  newColors[index].color = hexString;
                  return newColors;
                });
              }}
            />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default ColorListModalPage;
