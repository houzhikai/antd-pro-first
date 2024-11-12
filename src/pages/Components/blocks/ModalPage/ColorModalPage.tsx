import { Button, ColorPicker, Modal } from 'antd';
import React, { useState } from 'react';

const ColorModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const colorConfigList = [
    { valueNumber: 0, color: 'green' },
    { valueNumber: 1, color: 'red' },
    { valueNumber: 2, color: 'yellow' },
    { valueNumber: 3, color: 'grey' },
    { valueNumber: 4, color: 'green' },
    { valueNumber: 5, color: 'red' },
    { valueNumber: 6, color: 'yellow' },
    { valueNumber: 7, color: 'grey' },
    { valueNumber: 8, color: 'green' },
    { valueNumber: 9, color: 'red' },
    { valueNumber: 10, color: 'yellow' },
    { valueNumber: 11, color: 'grey' },
    { valueNumber: 12, color: 'green' },
    { valueNumber: 13, color: 'red' },
    { valueNumber: 14, color: 'yellow' },
    { valueNumber: 15, color: 'grey' },
  ];

  return (
    <div>
      <Button onClick={showModal}>Open Modal</Button>
      <Modal
        title="Color List"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorConfigList.map((item) => (
            <div key={item.valueNumber} style={{ display: 'flex', width: 100 }}>
              <div style={{ width: 20, marginRight: 10 }}>
                {item.valueNumber}:
              </div>
              <div>
                {' '}
                <ColorPicker
                  size="small"
                  defaultValue={item.color}
                  onChange={() => {
                    //   setColorList((prevColors) => {
                    //     const newColors = [...prevColors];
                    //     newColors[item.valueNumber] = hexString;
                    //     return newColors;
                    //   });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ColorModalPage;
