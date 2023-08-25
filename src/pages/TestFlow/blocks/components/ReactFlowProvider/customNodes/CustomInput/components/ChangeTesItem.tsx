import { Button, Popover } from 'antd';
import LoopNode from '../../LoopNode';
import MiddleNode from '../../MiddleNode';
import BadBin from '../../OutBin/BadBinNode';
import GoodBin from '../../OutBin/GoodBinNode';
import CustomInputNode from '../index';

import styles from '../index.less';

const ChangeTesItem = () => {
  const list = (
    <div>
      <CustomInputNode />
      <MiddleNode />
      <GoodBin margin="10px 0" />
      <BadBin />
      <LoopNode />
    </div>
  );
  return (
    <Popover placement="right" title="" content={list} trigger="hover">
      <Button className={styles['bottom-item']}>切换测试项</Button>
    </Popover>
  );
};

export default ChangeTesItem;
