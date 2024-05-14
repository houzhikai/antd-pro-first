import { useEffect, useState } from 'react';
import { ProviderFunc } from '@/pages/BitMap/components/containers';

const MagnifyingGlass = () => {
  const { width, fullEchartsMaxValue, setDetailsEchartsAxisValue } =
    ProviderFunc();
  const [height, setHeight] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rel, setRel] = useState<any>(null);

  const ratioNumber = 1 / 2; //  占用1 / 4 位置
  const glassWidth = width * ratioNumber;
  const glassHeight = height * ratioNumber;
  // 计算缩略图的高度
  useEffect(() => {
    function updateSize() {
      let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      // vh 100vh， 48：上下padding， 81：导航栏， 20：内容区域margin-top
      setHeight(Math.round(((vh - 48 - 81 - 20) * 40) / 100));
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // 鼠标按下的监听事件
  const onMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(true);
    setRel({ x: e.pageX - pos.x, y: e.pageY - pos.y });
  };

  // 拖动结束后的监听事件
  const onMouseUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(false);
    const xMin =
      e.pageX - rel.x < 0
        ? 0
        : e.pageX - rel.x >= glassWidth
        ? glassWidth
        : e.pageX - rel.x;
    const yMin =
      e.pageY - rel.y < 0
        ? 0
        : e.pageY - rel.y >= glassHeight
        ? glassHeight
        : e.pageY - rel.y;
    const yMinValue = (yMin * fullEchartsMaxValue.yMax) / height;
    const yMaxValue =
      ((yMin + glassHeight) * fullEchartsMaxValue.yMax) / height;
    const axisValue = {
      xMin: Math.round(xMin) / ratioNumber,
      xMax: Math.round(xMin + glassWidth) / ratioNumber,
      yMin: Math.round(yMinValue),
      yMax: Math.round(yMaxValue),
    };
    setDetailsEchartsAxisValue(axisValue);
  };
  // 鼠标拖动时的监听事件
  const onMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!dragging) return;
    setPos({
      x:
        e.pageX - rel.x < 0
          ? 0
          : e.pageX - rel.x >= glassWidth
          ? glassWidth
          : e.pageX - rel.x,
      y:
        e.pageY - rel.y < 0
          ? 0
          : e.pageY - rel.y >= glassHeight
          ? glassHeight
          : e.pageY - rel.y,
    });
  };
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, rel]);

  return (
    //   放大镜的宽高放入style中，便于计算使用
    <div
      style={{
        width: glassWidth,
        height: glassHeight,
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      className="echarts-full-page-magnifying-glass"
      onMouseDown={onMouseDown}
    />
  );
};

export default MagnifyingGlass;
