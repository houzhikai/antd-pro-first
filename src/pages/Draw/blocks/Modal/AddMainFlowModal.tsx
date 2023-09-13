import { Divider, Modal, Image } from 'antd';
import { useModel } from '@umijs/max';
import { PlusOutlined } from '@ant-design/icons';
import { mainFlowItemList } from '@/components/dataList/draw/mainFlow';

import styles from '../index.less';
import { useState } from 'react';

const AddMainFlowModal = () => {
  const { openMainFlowModal, setOpenMainFlowModal, selected, setSelected } =
    useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [newFlow, setNewFlow] = useState({ nodes: [], edges: [] });

  const handleOk = () => {
    if (selected === 'empty') {
      setNodes([]);
      setEdges([]);
    } else {
      setNodes(newFlow.nodes);
      setEdges(newFlow.edges);
    }
    setOpenMainFlowModal(false);
  };

  const handleCancel = () => {
    setOpenMainFlowModal(false);
  };
  const handleSelectMainFlowItem = (nodes, edges, name) => {
    setNewFlow({ nodes, edges });
    setSelected(name);
  };
  const handleEmpty = () => {
    setSelected('empty');
  };

  return (
    <Modal
      title="新建Main Flow"
      open={openMainFlowModal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
      okText="创建"
      okButtonProps={{ disabled: selected === '' ? true : false }}
    >
      <Divider />
      <div className={styles['mainFlow']}>
        <div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={
                selected === 'empty'
                  ? { border: '2px solid skyblue' }
                  : undefined
              }
              className={styles['mainFlow-item-empty']}
              onClick={handleEmpty}
            >
              <PlusOutlined style={{ fontSize: 46 }} />
            </div>
            <div>空白页面</div>
          </div>
        </div>
        {mainFlowItemList.map((item) => (
          <div
            key={item.id}
            style={{ textAlign: 'center' }}
            onClick={() =>
              handleSelectMainFlowItem(
                item.mainFlowNode,
                item.mainFlowEdges,
                item.name,
              )
            }
          >
            <Image
              style={
                selected === item.name
                  ? { border: '2px solid skyblue' }
                  : undefined
              }
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
