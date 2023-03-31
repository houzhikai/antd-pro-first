import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, message } from 'antd';

const handleClick = () => {
  message.info('暂无开发');
};
const handleClick1 = () => {
  message.info('暂无开发');
};
const handleClick2 = () => {
  message.warn('暂无开发');
};
const handleClick3 = () => {
  message.error('暂无开发');
};

const menu = {
  items: [
    {
      label: '下拉菜单',
      key: '1',
      onClick: handleClick1,
    },
    {
      label: '下拉菜单2',
      key: '2',

      onClick: handleClick2,
    },
    {
      label: '下拉菜单3',
      key: '3',
      onClick: handleClick3,
    },
  ],
};
const extraButtonList = [
  <Button key="1" onClick={handleClick}>
    次要按钮
  </Button>,
  <Button key="2" onClick={handleClick}>
    次要按钮
  </Button>,
  <Button key="3" type="primary" onClick={handleClick}>
    主要按钮
  </Button>,
  <Dropdown key="dropdown" trigger={['click']} menu={menu}>
    <Button key="4" style={{ padding: '0 8px' }}>
      <EllipsisOutlined />
    </Button>
  </Dropdown>,
];
export default extraButtonList;
