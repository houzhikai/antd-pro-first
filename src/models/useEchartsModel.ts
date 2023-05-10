import { useState } from 'react';

interface AxisProp {
  x: 'top' | 'bottom';
  y: 'left' | 'right';
}
export default () => {
  const [axis, setAxis] = useState<AxisProp>({ x: 'bottom', y: 'left' }); // x,y轴位置，x：只有上下，y: 只有左右
  const [isAxisInverse, setIsAxisInverse] = useState({ x: false, y: false }); // x,y轴位置是否反转

  const [axisValue, setAsisValue] = useState({
    xMin: 0,
    xMax: 50,
    yMin: 0,
    yMax: 50,
  });
  return {
    axis,
    setAxis,
    isAxisInverse,
    setIsAxisInverse,
    axisValue,
    setAsisValue,
  };
};
