import CoordinateSystemOrientation from './components/CoordinateSystemOrientation';
import SetAxisValue from './components/SetAxisValue';

import styles from '../index.less';

const NavAction = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div>已实现的功能： 1. 放大缩小，2. 调整坐标系</div> */}
      {/* 坐标系方向 */}
      <CoordinateSystemOrientation />
      {/* 设置坐标轴的首尾数值 */}
      <SetAxisValue />
      {/* 自定义颜色 */}
      {/* 是否展示格子数据 */}
    </div>
  );
};
export default NavAction;
