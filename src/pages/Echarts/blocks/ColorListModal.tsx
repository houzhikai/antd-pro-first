import { useModel } from '@umijs/max';
import { Modal, Tooltip } from 'antd';

function ColorListModal() {
  const { isShowModal, setIsShowModal } = useModel('useEchartsModel');

  const handleOk = () => {
    setIsShowModal(false);
  };

  const handleCancel = () => {
    setIsShowModal(false);
  };
  const colorList = [
    { name: '科技蓝', color: '#1677ff' },
    { name: '明清', color: '#13c2c2' },
    { name: '日暮', color: '#faad14' },
    { name: '火山', color: '#f6531c' },
    { name: '暗绿', color: '#84af9b' },
    { name: '灰色', color: '#d0d0d0' },
  ];
  const handleSelectColor = (color: string) => {
    console.log(1, color);
  };

  return (
    <Modal
      title="选择想要更改的颜色"
      open={isShowModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div style={{ display: 'flex', marginTop: 20 }}>
        {colorList.map((item) => (
          <Tooltip title={item.name} color={item.color}>
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
    </Modal>
  );
}

export default ColorListModal;
