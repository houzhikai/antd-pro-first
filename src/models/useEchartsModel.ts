import { useState } from 'react';

interface AxisProp {
  x: 'top' | 'bottom';
  y: 'left' | 'right';
}
export default () => {
  const [axis, setAxis] = useState<AxisProp>({ x: 'bottom', y: 'left' }); // x,y轴位置，x：只有上下，y: 只有左右
  const [isAxisInverse, setIsAxisInverse] = useState({ x: false, y: false }); // x,y轴位置是否反转
  // 坐标轴上的首尾值
  const [axisValue, setAsisValue] = useState({
    xMin: 0,
    xMax: 50,
    yMin: 0,
    yMax: 50,
  });

  const [isShowModal, setIsShowModal] = useState({ isOpen: false, order: 0 }); // 1. 是否打开颜色选择器 2. 点击颜色的序号

  const [changeColor, setChangeColor] = useState([
    '#04b200',
    '#03ff01',
    '#fd0003',
    '#3f6063',
    '#fffd00',
    '#00007e',
    '#ff00ff',
  ]); // 自定义背景颜色

  return {
    axis,
    setAxis,
    isAxisInverse,
    setIsAxisInverse,
    axisValue,
    setAsisValue,
    isShowModal,
    setIsShowModal,
    changeColor,
    setChangeColor,
  };
};
