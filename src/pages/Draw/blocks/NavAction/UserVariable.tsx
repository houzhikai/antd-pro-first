import { Tooltip, Image, message } from 'antd';
import userPersonnel from '@/icon/draw/toolbarIconList/user-personnel.svg';

import styles from '../index.less';

const UserVariable = () => {
  const handleSave = () => {
    message.warning('用户变量，暂无开发');
  };
  return (
    <Tooltip placement="bottomLeft" title="用户变量">
      <div className={styles.gap}>
        <Image
          src={userPersonnel}
          preview={false}
          width={16}
          className={styles.save}
          onClick={handleSave}
        />
      </div>
    </Tooltip>
  );
};

export default UserVariable;
