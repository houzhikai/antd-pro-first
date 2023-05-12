import { useModel } from '@umijs/max';
import { Button, Input, Modal } from 'antd';
import { useState } from 'react';

const SetAxisName = () => {
  const { changeAxisName, setChangeAxisName } = useModel('useEchartsModel');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeXAxisName = (e) => {
    setChangeAxisName((obj) => {
      return {
        ...obj,
        x: e.target.value,
      };
    });
  };

  const handleChangeYAxisName = (e) => {
    setChangeAxisName((obj) => {
      return {
        ...obj,
        y: e.target.value,
      };
    });
  };

  return (
    <div style={{ margin: '0 12px' }}>
      <Button type="primary" size="large" onClick={showModal}>
        修改坐标轴名称
      </Button>
      <Modal
        title="修改坐标轴名称"
        open={isModalOpen}
        centered
        maskClosable={false}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" type="primary" onClick={handleCancel}>
            关闭
          </Button>,
        ]}
      >
        X Legent
        <Input
          style={{ margin: '10px 0' }}
          placeholder="修改x轴名称"
          value={changeAxisName.x}
          onChange={handleChangeXAxisName}
          onPressEnter={handleChangeXAxisName}
        />
        Y Legent
        <Input
          placeholder="修改y轴名称"
          value={changeAxisName.y}
          onChange={handleChangeYAxisName}
          onPressEnter={handleChangeYAxisName}
        />
      </Modal>
    </div>
  );
};

export default SetAxisName;
