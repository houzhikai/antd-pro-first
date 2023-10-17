import { Popconfirm, Tag } from 'antd';
import styles from '../index.less';
import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { SubflowNode1, SubflowEdge1 } from '@/pages/Draw/blocks/Flows/Subflow1';
import { SubflowNode2, SubflowEdge2 } from '@/pages/Draw/blocks/Flows/Subflow2';
import { useModel } from '@umijs/max';
import { useState } from 'react';

interface MyTestItemIconProps {
  onDragStart: any;
  size?: number;
  name?: string;
  Class: string;
  color: string;
  type: string;
  index?: number;
  item?: any;
}

const MyTestItemIcon = (props: MyTestItemIconProps) => {
  const { onDragStart, Class, color, type, index, item } = props;
  const [open, setOpen] = useState(false);
  const {
    testUnitData,
    setTestUnitData,
    subflowList,
    setSubflowList,
    activeTestOrFlowItem,
    setActiveTestOrFlowItem,
  } = useModel('useDrawModel');

  const { setNodes, setEdges } = useModel('useTestFlowModel');

  const handleConfirm = (index) => {
    if (type === 'test-method') {
      const newDataList = testUnitData.filter((item) => item.Class !== Class);
      setTestUnitData(newDataList);
    } else if (type === 'subflow') {
      const newDataList = subflowList.filter((item, idx) => idx !== index);
      setSubflowList(newDataList);
    }
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleClick = (item, index) => {
    setActiveTestOrFlowItem(item?.name);
    if (index === 0) {
      setNodes(SubflowNode1);
      setEdges(SubflowEdge1);
    } else {
      setNodes(SubflowNode2);
      setEdges(SubflowEdge2);
    }
  };
  return (
    <div
      style={{ textAlign: 'center', margin: '6px 0' }}
      onClick={() => handleClick(item, index)}
    >
      <div onDragStart={(event) => onDragStart(event, 'input')} draggable>
        <Popconfirm
          title="Are you sure to delete this item?"
          open={open}
          onConfirm={() => handleConfirm(index)}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
        >
          <Tag
            style={
              activeTestOrFlowItem === Class
                ? { border: '3px solid #f60' }
                : undefined
            }
            className={styles.classToolTip}
            // eslint-disable-next-line react/jsx-no-undef
            icon={activeTestOrFlowItem === Class ? <CheckOutlined /> : null}
            closeIcon={<CloseCircleOutlined style={{ color: 'white' }} />}
            closable={type !== 'test-method' || Class !== 'BaseTestItem'}
            color={color}
            onClose={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            <span>{Class}</span>
          </Tag>
        </Popconfirm>
      </div>
    </div>
  );
};

export default MyTestItemIcon;
