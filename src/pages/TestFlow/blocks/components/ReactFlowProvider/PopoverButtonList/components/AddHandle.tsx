import { Button, Popover } from 'antd';
import { useModel } from '@umijs/max';

import styles from '../index.less';

const AddHandle = () => {
  const { setHandleList, handleList } = useModel('useTestFlowModel');

  //   已经存在的port被禁用，不可再次选中
  const positionList = handleList.map((item) => item.position);

  const handleAddHandle = (item) => {
    if (item.type === 'source') {
      item.style = { background: '#FFF', border: '1px solid #1a192b' };
    }
    setHandleList((preList) => [...preList, item]);
  };

  const list: any = [
    {
      id: 0,
      position: 'source',
      buttonList: [
        { type: 'source', className: 'top', position: 'Top', id: '0' },
        { type: 'source', className: 'left', position: 'Left', id: '1' },
        { type: 'source', className: 'bottom', position: 'Bottom', id: '2' },
        { type: 'source', className: 'right', position: 'Right', id: '3' },
      ],
    },
    {
      id: 1,
      position: 'target',
      buttonList: [
        { type: 'target', className: 'top', position: 'Top', id: '0' },
        { type: 'target', className: 'left', position: 'Left', id: '1' },
        { type: 'target', className: 'bottom', position: 'Bottom', id: '2' },
        { type: 'target', className: 'right', position: 'Right', id: '3' },
      ],
    },
  ];
  const portList = (
    <>
      {list.map((item) => (
        <Popover
          key={item.id}
          placement="right"
          trigger="hover"
          content={item.buttonList.map((t) => (
            <Button
              disabled={positionList.includes(t.position)}
              key={t.className}
              type="primary"
              className={styles['bottom-item']}
              onClick={() => handleAddHandle(t)}
            >
              {t.position}
            </Button>
          ))}
        >
          <Button className={styles['bottom-item']}>{item.position}</Button>
        </Popover>
      ))}
    </>
  );
  return (
    <Popover placement="right" title="" content={portList} trigger="hover">
      <Button className={styles['bottom-item']}>添加测试项节点</Button>
    </Popover>
  );
};

export default AddHandle;
