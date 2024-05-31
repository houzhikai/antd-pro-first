import { FolderOpenOutlined } from '@ant-design/icons';
import { Button, Image, Switch } from 'antd';
import { ProviderFunc } from '../../components/containers';
import option from '@/icon/bitmap/option.svg';
import otherColor from '@/icon/otherColor.svg';
import { treeDataList } from '../../mockData/mockTreeData';
import ConvertPage from '../RightPage/DetailDataPage/NavAction/ConvertPage';
import myFetch from '@/components/myFetch';
import '../../index.css';

const NavActionPage = () => {
  const {
    setModifyColorModalObj,
    setModeModalObj,
    switchObj,
    setSwitchObj,
    setSelectedTreeDataList,
    setTreeDutsList,
    bitMapPort,
    vscodeParams,
    setOpenPhysicalObj,
  } = ProviderFunc();
  // 选择文件夹
  const handleSelectFolder = async () => {
    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/selectbitmapdir`,
        params: { dirName: 'afmtest_00', location: 'E:\\desktop\\afmtest_00' },
        isExceptionHand: true,
      });
      setTreeDutsList(res.data);
    } catch (error) {
      setTreeDutsList(treeDataList);
    }
  };
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

  const handleOpenModal = () => {
    setOpenPhysicalObj((obj) => ({ ...obj, open: true }));
  };

  return (
    <div className="bit-map-nav-page">
      <Button
        className="bit-map-nav-gap"
        type="primary"
        size="small"
        onClick={handleOpenModal}
      >
        Select Physical file
      </Button>
      {/* 选择文件夹 */}
      <FolderOpenOutlined
        className="bit-map-nav-gap"
        style={{ fontSize: 20 }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={handleSelectFolder}
      />
      {/* 打开位图关系modal */}
      <div className="bit-map-nav-gap" onClick={handleOpenModeModal}>
        <Image width={20} preview={false} src={option} />
      </div>
      {/* 颜色选择器 */}
      <div className="bit-map-nav-gap" onClick={handleOpenColorListModal}>
        <Image width={20} preview={false} src={otherColor} />
      </div>
      {/* 单一 / 堆叠模式 */}
      <Switch
        className="bit-map-nav-gap"
        defaultChecked={switchObj.isStack}
        checkedChildren="Stack"
        unCheckedChildren="Single"
        onChange={handleChangeIsStack}
      />
      {/* 逻辑 / 物理模式 */}
      <Switch
        className="bit-map-nav-gap"
        defaultChecked={switchObj.isLogical}
        checkedChildren="Logical"
        unCheckedChildren="Physical"
        disabled
        onChange={handleChangeIsLogic}
      />
      <ConvertPage />
    </div>
  );
};

export default NavActionPage;
