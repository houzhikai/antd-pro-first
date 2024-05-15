import { FolderOpenOutlined } from '@ant-design/icons';
import { Image, Switch } from 'antd';
import option from '@/icon/bitmap/option.svg';
import { ProviderFunc } from '../../components/containers';
import otherColor from '@/icon/otherColor.svg';
import '../../index.css';

const NavActionPage = () => {
  const {
    setModifyColorModalObj,
    setModeModalObj,
    switchObj,
    setSwitchObj,
    setSelectedTreeDataList,
  } = ProviderFunc();
  // 打开 mode 弹窗
  const handleOpenModeModal = () => {
    setModeModalObj((obj) => ({ ...obj, open: true }));
  };
  // 打开 颜色选择 弹窗
  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };

  const handleChangeIsStack = (checked) => {
    // 堆叠模式切换单一模式将树形勾选框清空
    if (switchObj.isStack) {
      setSelectedTreeDataList([]);
    }
    setSwitchObj((obj) => ({ ...obj, isStack: checked }));
  };
  const handleChangeIsLogic = (checked) => {
    setSwitchObj((obj) => ({ ...obj, isLogical: checked }));
  };

  return (
    <div className="bit-map-nav-page">
      <FolderOpenOutlined
        className="bit-map-nav-gap"
        style={{ fontSize: 20 }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <div className="bit-map-nav-gap" onClick={handleOpenModeModal}>
        <Image width={20} preview={false} src={option} />
      </div>
      <div className="bit-map-nav-gap" onClick={handleOpenColorListModal}>
        <Image width={20} preview={false} src={otherColor} />
      </div>
      <Switch
        className="bit-map-nav-gap"
        defaultChecked={switchObj.isStack}
        checkedChildren="Stack"
        unCheckedChildren="Single"
        onChange={handleChangeIsStack}
      />
      <Switch
        className="bit-map-nav-gap"
        defaultChecked={switchObj.isLogical}
        checkedChildren="Logical"
        unCheckedChildren="Physical"
        onChange={handleChangeIsLogic}
      />
    </div>
  );
};

export default NavActionPage;
