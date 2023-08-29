import { Button, Popover } from 'antd';
import { useModel } from '@umijs/max';

import styles from '../index.less';

const AddHandle = () => {
  const { setHandleList } = useModel('useTestFlowModel');
  const buttonList = [
    { type: 'source', className: 'top', position: 'Top', id: '0' },
    { type: 'target', className: 'left', position: 'Left', id: '1' },
    { type: 'source', className: 'bottom', position: 'Bottom', id: '2' },
    { type: 'source', className: 'right', position: 'Right', id: '3' },
  ];

  const handleAddHandle = (item) => {
    if (item.type === 'source') {
      item.style = { background: '#FFF', border: '1px solid #1a192b' };
    }
    setHandleList((preList) => [...preList, item]);
  };

  const list = (
    <>
      {buttonList.map((item) => (
        <Button
          key={item.className}
          type="primary"
          className={styles['bottom-item']}
          onClick={() => handleAddHandle(item)}
        >
          {item.position}
        </Button>
      ))}
    </>
  );
  return (
    <Popover placement="right" title="" content={list} trigger="hover">
      <Button className={styles['bottom-item']}>添加测试项节点</Button>
    </Popover>
  );
};

export default AddHandle;
