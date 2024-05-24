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
        {colorList.map((color, index) => (
          <div key={index} className="bit-map-color-modal">
            <span className="bit-map-color-modal-label">{index}:</span>
            <ColorPicker
              defaultValue={color}
              onChange={(_, hexString) => {
                setColorList((prevColors) => {
                  const newColors = [...prevColors];
                  newColors[index] = hexString;
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
