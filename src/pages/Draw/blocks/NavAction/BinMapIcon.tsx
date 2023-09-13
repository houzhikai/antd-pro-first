import { Tooltip, Image } from 'antd';
import binMap from '@/icon/draw/binMap.svg';
import styles from '../index.less';
import { useModel } from '@umijs/max';

const BinMapIcon = () => {
  const {
    setOpenBinMapForm,
    setSoftBinData,
    setHardBinData,
    options,
    setHardBinNameList,
    isOnLine,
    setRepeatHardBinNameList,
  } = useModel('useDrawModel');
  const handleSave = () => {
    if (!isOnLine) {
      setRepeatHardBinNameList([]);
      setHardBinData(options.HardBin);
      setSoftBinData(options.SoftBin);
      setHardBinNameList(
        options.HardBin.map((item) => item.Name).map((item) => ({
          value: item,
          label: item,
        })),
      );
      setOpenBinMapForm(true);
      // message.warning('暂无开发');
    }
  };
  return (
    <Tooltip placement="bottomLeft" title="binMap">
      <div className={styles.gap}>
        <Image
          style={
            isOnLine
              ? { filter: 'opacity(0.3)', cursor: 'not-allowed' }
              : undefined
          }
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

export default BinMapIcon;
