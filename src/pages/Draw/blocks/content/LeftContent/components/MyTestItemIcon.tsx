import { Popconfirm, Tag } from 'antd';
import styles from '../index.less';
import { CloseCircleOutlined } from '@ant-design/icons';
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
}

const MyTestItemIcon = (props: MyTestItemIconProps) => {
  const { onDragStart, Class, color, type, index } = props;
  const [open, setOpen] = useState(false);
  const { testUnitData, setTestUnitData, subflowList, setSubflowList } =
    useModel('useDrawModel');

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
  return (
    <div style={{ textAlign: 'center', margin: '6px 0' }}>
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
            className={styles.classToolTip}
            closeIcon={<CloseCircleOutlined style={{ color: 'white' }} />}
            closable={type !== 'test-method' || Class !== 'BaseTestItem'}
            color={color}
            onClose={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            <span> {Class}</span>
          </Tag>
        </Popconfirm>
      </div>
    </div>
  );
};

export default MyTestItemIcon;
