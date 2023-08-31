import { Button, Popover } from 'antd';
import LoopNode from '../../customNodes/LoopNode';
import MiddleNode from '../../customNodes/MiddleNode';
import BadBin from '../../customNodes/OutBin/BadBinNode';
import GoodBin from '../../customNodes/OutBin/GoodBinNode';
import CustomInputNode from '../../customNodes/CustomInput';

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
      <Button className={styles['bottom-item']}>切换测试项(暂无功能)</Button>
    </Popover>
  );
};

export default ChangeTesItem;
