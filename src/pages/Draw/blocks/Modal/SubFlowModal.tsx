import { useModel } from '@umijs/max';
import { Modal, Image } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { mainFlowItemList } from '@/components/dataList/draw/mainFlow';
import styles from '../index.less';

const SubflowModal = () => {
  const { openSubFlowModal, setOpenSubFlowModal } = useModel('useDrawModel');
  const handleCancel = () => {
    setOpenSubFlowModal(false);
  };
  const handleOK = () => {
    setOpenSubFlowModal(false);
  };

  return (
    <div>
      <Modal
        width={700}
        title="Subflow"
        open={openSubFlowModal}
        onOk={handleOK}
        onCancel={handleCancel}
        okText="保存"
        cancelText="取消"
        maskClosable={false}
        centered
      >
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
    </div>
  );
};

export default SubflowModal;
