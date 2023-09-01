import { Tooltip, Image, message } from 'antd';
import binMap from '@/icon/draw/binMap.svg';
import styles from '../index.less';

const BinMapForm = () => {
  const handleSave = () => {
    message.warning('暂无开发');
  };
  return (
    <Tooltip placement="bottomLeft" title="binMap">
      <div className={styles.gap}>
        <Image
          src={binMap}
          preview={false}
          width={16}
          className={styles.save}
          onClick={handleSave}
        />
      </div>
    </Tooltip>
  );
};

export default BinMapForm;
