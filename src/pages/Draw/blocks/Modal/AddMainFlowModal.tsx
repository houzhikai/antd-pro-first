import { Divider, Modal, Image } from 'antd';
import { useModel } from '@umijs/max';
import mainFlowItem1 from '@/icon/draw/subflow/reactflow.png';
import { PlusOutlined } from '@ant-design/icons';

import styles from '../index.less';

const AddMainFlowModal = () => {
  const { openMainFlowModal, setOpenMainFlowModal } = useModel('useDrawModel');

  const handleOk = () => {
    setOpenMainFlowModal(false);
  };

  const handleCancel = () => {
    setOpenMainFlowModal(false);
  };

  const mainFlowItemList = [{ id: 1, name: 'mainflow 1', icon: mainFlowItem1 }];
  return (
    <Modal
      title="Main Flow"
      open={openMainFlowModal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
      okText="创建"
    >
      <Divider />
      <div className={styles['mainFlow']}>
        <div>
          <div style={{ textAlign: 'center' }}>
            <div className={styles['mainFlow-item-empty']}>
              <PlusOutlined style={{ fontSize: 46 }} />
            </div>
            <div>空白页面</div>
          </div>
        </div>
        {mainFlowItemList.map((item) => (
          <div key={item.id} style={{ textAlign: 'center' }}>
            <Image
              className={styles['mainFlow-item']}
              src={item.icon}
              preview={false}
            />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default AddMainFlowModal;
