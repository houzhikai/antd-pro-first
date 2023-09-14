import { Button, Popover } from 'antd';
import styles from '../index.less';
import { useModel } from '@umijs/max';

const TogglePortDirection = () => {
  const { togglePort, setTogglePort } = useModel('useDrawModel');
  const buttonList = [
    { type: 'source', className: 'top', position: 'Top', id: 'a' },
    { type: 'target', className: 'left', position: 'Left', id: 'a' },
    { type: 'source', className: 'bottom', position: 'Bottom', id: 'a' },
    { type: 'source', className: 'right', position: 'Right', id: 'a' },
  ];
  const handleToggle = (position) => {
    setTogglePort(position);
  };
  const portList = (
    <>
      {buttonList.map((item) => (
        <Button
          disabled={item.position === togglePort}
          key={item.className}
          type="primary"
          className={styles['bottom-item']}
          onClick={() => handleToggle(item.position)}
        >
          {item.position}
        </Button>
      ))}
    </>
  );
  return (
    <Popover placement="right" title="" content={portList} trigger="hover">
      <Button className={styles['bottom-item']}>切换port方向</Button>
    </Popover>
  );
};

export default TogglePortDirection;
