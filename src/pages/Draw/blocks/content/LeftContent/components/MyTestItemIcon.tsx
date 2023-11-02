import { Popconfirm, Tag } from 'antd';
import styles from '../index.less';
import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { useState } from 'react';

interface MyTestItemIconProps {
  onDragStart?: any;
  size?: number;
  name?: string;
  Class: string;
  color: string;
  type: string;
  index?: number;
  item?: any;
  list: any;
  setList: any;
}

const MyTestItemIcon = (props: MyTestItemIconProps) => {
  const { onDragStart, Class, color, type, item, list, setList } = props;
  const [open, setOpen] = useState(false);
  const { activeTestOrFlowItem, setActiveTestOrFlowItem } =
    useModel('useDrawModel');

  const handleConfirm = () => {
    const newDataList = list.filter((item) => item.name !== Class);
    setList(newDataList);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleClick = (item) => {
    if (item?.type) {
      setActiveTestOrFlowItem(item?.name);
    }
  };
  return (
    <div
      style={{ textAlign: 'center', margin: '6px 0' }}
      onDoubleClick={() => handleClick(item)}
    >
      <div
        onDragStart={(event) =>
          onDragStart ? onDragStart(event, 'input') : null
        }
        draggable
      >
        <Popconfirm
          title="Are you sure to delete this item?"
          open={open}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
        >
          <Tag
            style={
              activeTestOrFlowItem === Class
                ? { border: '1px solid #f60' }
                : undefined
            }
            className={styles.classToolTip}
            // eslint-disable-next-line react/jsx-no-undef
            icon={activeTestOrFlowItem === Class ? <CheckOutlined /> : null}
            closeIcon={<CloseCircleOutlined style={{ color: 'white' }} />}
            closable={type !== 'test-method' || Class !== 'BaseTestItem'}
            color={activeTestOrFlowItem === Class ? '#f60' : color}
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
