import type { MenuProps } from 'antd';
import { Button, Dropdown, message } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '75%',
  },
  {
    key: '2',
    label: '100%',
  },
  {
    key: '3',
    label: '150%',
  },
  {
    key: '4',
    label: '200%',
  },
];

const DropDownPage = () => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('暂未开发！');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div style={{ marginRight: 10 }}>
      <Dropdown menu={menuProps}>
        <Button>Zoom</Button>
      </Dropdown>
    </div>
  );
};

export default DropDownPage;
