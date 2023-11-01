import { useModel } from '@umijs/max';
import { Modal, Image } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { subFlowItemList } from '@/components/dataList/draw/subflow';
import styles from '../index.less';
import { useState } from 'react';

const SubflowModal = () => {
  const {
    openSubFlowModal,
    setOpenSubFlowModal,
    selected,
    setSelected,
    setOpenSubFlowAttributeModal,
  } = useModel('useDrawModel');
  // const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [newFlow, setNewFlow] = useState({ nodes: [], edges: [] });
  const handleCancel = () => {
    setOpenSubFlowModal(false);
  };
  const handleOK = () => {
    // if (selected === 'empty') {
    //   setNodes([]);
    //   setEdges([]);
    // } else {
    //   setNodes(newFlow.nodes);
    //   setEdges(newFlow.edges);
    // }
    setOpenSubFlowModal(false);
    setOpenSubFlowAttributeModal((obj) => {
      return {
        ...obj,
        isOpen: true,
        type: 'subflow',
        name: selected,
        param: {
          ...obj.param,
          flowName: selected,
        },
        mainFlowNode: selected === 'empty' ? [] : newFlow.nodes,
        mainFlowEdges: selected === 'empty' ? [] : newFlow.edges,
      };
    });
  };

  const handleSelectedSubflowItem = (nodes, edges, name) => {
    setNewFlow({ nodes, edges });
    setSelected(name);
  };
  const handleEmpty = () => {
    setSelected('empty');
  };

  return (
    <div>
      <Modal
        width={700}
        title="新建Subflow"
        open={openSubFlowModal}
        onOk={handleOK}
        onCancel={handleCancel}
        okText="创建"
        cancelText="取消"
        maskClosable={false}
        centered
        okButtonProps={{ disabled: selected === '' ? true : false }}
      >
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
          {subFlowItemList.map((item) => (
            <div
              key={item.id}
              style={{ textAlign: 'center' }}
              onClick={() =>
                handleSelectedSubflowItem(
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
    </div>
  );
};

export default SubflowModal;
