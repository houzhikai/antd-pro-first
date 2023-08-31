import { Dropdown, Image, Space } from 'antd';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import viewList from '@/icon/draw/list.svg';

import styles from '../index.less';
import { useModel } from '@umijs/max';

const ViewList = () => {
  const { isHiddenSide, setIsHiddenSide, isHiddenFormat, setIsHiddenFormat } =
    useModel('useDrawModel');
  const items: MenuProps['items'] = [
    {
      label: '形状',
      key: 'shape',
      icon: isHiddenSide ? <CheckOutlined /> : <div style={{ width: 16 }} />,
      //   icon: <Image src={shape} style={{ width: 12 }} preview={false} />,
    },
    {
      label: '格式',
      key: 'format',
      icon: isHiddenFormat ? <CheckOutlined /> : <div style={{ width: 16 }} />,
      //   icon: <div style={{ width: 16 }} />, // 当没有icon时，需要有一个隐藏的占位符
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'shape') {
      setIsHiddenSide((c) => !c);
    } else if (e.key === 'format') {
      setIsHiddenFormat((c) => !c);
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className={styles.gap}>
      <Dropdown menu={menuProps} arrow trigger={['click']}>
        <Space>
          <Image
            src={viewList}
            preview={false}
            width={16}
            className={styles.save}
          />
          <DownOutlined
            style={{ marginTop: 8, marginLeft: -4, fontSize: 12 }}
          />
        </Space>
      </Dropdown>
    </div>
  );
};

export default ViewList;
