import { Popover, Button } from 'antd';
import { useModel } from '@umijs/max';

import styles from '../index.less';

const RemoveHandle = () => {
  const { setHandleList, handleList } = useModel('useTestFlowModel');
  //   已经存在的port被禁用，不可再次选中
  const positionList = handleList.map((item) => item.position);

  const buttonList = [
    { type: 'source', className: 'top', position: 'Top', id: '0' },
    { type: 'target', className: 'left', position: 'Left', id: '1' },
    { type: 'source', className: 'bottom', position: 'Bottom', id: '2' },
    { type: 'source', className: 'right', position: 'Right', id: '3' },
  ];
  const handleRemoveHandle = (item) => {
    setHandleList((preList) =>
      preList.filter((pre) => pre.position !== item.position),
    );
  };

  const list = (
    <>
      {buttonList.map((item) => (
        <Button
          disabled={!positionList.includes(item.position)}
          key={item.className}
          type="primary"
          className={styles['bottom-item']}
          onClick={() => handleRemoveHandle(item)}
        >
          {item.position}
        </Button>
      ))}
    </>
  );
  return (
    <Popover placement="right" title="" content={list} trigger="hover">
      <Button className={styles['bottom-item']}>移除测试项节点</Button>
    </Popover>
  );
};

export default RemoveHandle;
