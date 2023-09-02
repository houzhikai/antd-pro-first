import { Image, Dropdown, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import arrowRight from '@/icon/draw/arrow-right.svg';
import step from '@/icon/draw/toolbarIconList/arrow-step.svg';
import smoothStep from '@/icon/draw/toolbarIconList/smoothStep.svg';
import styles from '../index.less';

const DefaultArrowStyle = () => {
  const items: MenuProps['items'] = [
    {
      label: <Image src={step} style={{ width: 24 }} preview={false} />,
      key: 'shape',
    },
    {
      label: <Image src={smoothStep} style={{ width: 24 }} preview={false} />,
      key: 'format',
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'shape') {
      message.warning('暂无开发');
      //   setIsHiddenSide((c) => !c);
    } else if (e.key === 'format') {
      message.warning('暂无开发');
      //   setIsHiddenFormat((c) => !c);
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown menu={menuProps} arrow trigger={['click']}>
      <Space>
        <div className={styles.gap}>
          <Image
            src={arrowRight}
            preview={false}
            width={16}
            className={styles.save}
          />
        </div>
        <DownOutlined style={{ marginTop: 8, marginLeft: -12, fontSize: 12 }} />
      </Space>
    </Dropdown>
  );
};

export default DefaultArrowStyle;
