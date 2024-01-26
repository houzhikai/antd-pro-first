// import CoordinateSystemOrientation from './components/CoordinateSystemOrientation';
// import SetAxisValue from './components/SetAxisValue';
// import SetAxisName from './components/SetAxisName';

import styles from '../index.less';
import MyLogo from '@/components/MyLogo';
import logo from '@/icon/wafermapLogo.png';
import ModeChange from './NavAction/ModeChange';
import UploadExcel from './NavAction/UploadExcel';

const NavAction = () => {
  return (
    <div className={styles.wrapper}>
      <MyLogo src={logo} title="WaferMap" />
      <div className={styles.gapSeparator} />
      <ModeChange />
      <UploadExcel />
      {/* <div>已实现的功能： 1. 放大缩小，2. 调整坐标系</div> */}
      {/* 坐标系方向 */}
      {/* <CoordinateSystemOrientation /> */}
      {/* 修改横、纵轴的值 */}
      {/* <SetAxisName /> */}
      {/* 设置坐标轴的首尾数值 */}
      {/* <SetAxisValue /> */}
      {/* 是否展示格子数据 */}
    </div>
  );
};
export default NavAction;
