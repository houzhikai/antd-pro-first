import { useEffect, useRef, useState } from 'react';
import { ProviderFunc } from '@/pages/BitMap/components/containers';
import { getRatioNumber } from '../../../components/getRatioNumber';
import { getGlassPosition } from '@/pages/BitMap/components/getGlassPosition';

// TODO, 点击页面时会与放大镜有冲突，需要解决
const MagnifyingGlass = ({ height }) => {
  const magnifierRef = useRef<any>(null);
  const { width, configInfo, detailsValues, setDetailsValues, scaleNumber } =
    ProviderFunc();

  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState<any>({ x: 0, y: 0 });
  const [isOutside, setIsOutside] = useState(false); // 判断是否点击放大镜外的区域

  const ratioNumber = getRatioNumber(scaleNumber); // 占用详图可视区域
  // 放大镜宽度
  const glassWidth = width * ratioNumber;
  // 放大镜高度
  const glassHeight = height * ratioNumber;
  // 圆点位置
  const dots = configInfo.layoutConfig.dots;
  // 放大镜初始位置, dots: TopLeft, TopRight, BottomLeft, BottomRight
  const [defaultGlassPosition, setDefaultGlassPosition] = useState(
    getGlassPosition(
      configInfo.layoutConfig.dots,
      width,
      height,
      glassWidth,
      glassHeight,
    ),
  );

  const [pos, setPos] = useState({
    x: defaultGlassPosition.x,
    y: defaultGlassPosition.y,
  });
  // useEffect(() => {
  //   // dots: TopLeft, TopRight, BottomLeft, BottomRight
  //   let x = defaultGlassPosition.x;
  //   let y = defaultGlassPosition.y;
  //   if (dots === 'TopLeft') {
  //     x = Math.floor((width * detailsValues.xStart) / 100);
  //     y = Math.floor((height * detailsValues.yStart) / 100);
  //   } else if (dots === 'TopRight') {
  //     x = Math.floor(width - (width * detailsValues.xEnd) / 100);
  //     y = Math.floor((height * detailsValues.yStart) / 100);
  //   } else if (dots === 'BottomLeft') {
  //     x = Math.floor((width * detailsValues.xStart) / 100);
  //     y = Math.floor(height - (height * detailsValues.yEnd) / 100);
  //   } else if (dots === 'BottomRight') {
  //     x = Math.floor(width - (width * detailsValues.xEnd) / 100);
  //     y = Math.floor(height - (height * detailsValues.yEnd) / 100);
  //   }
  //   setDefaultGlassPosition({ x, y });
  // }, [detailsValues]);
  // 修改放大倍数时，放大镜默认从圆点开始
  useEffect(() => {
    let x = defaultGlassPosition.x;
    let y = defaultGlassPosition.y;
    if (dots === 'TopLeft') {
      x = Math.floor((width * detailsValues.xStart) / 100);
      y = Math.floor((height * detailsValues.yStart) / 100);
    } else if (dots === 'TopRight') {
      x = Math.floor(width - (width * detailsValues.xEnd) / 100);
      y = Math.floor((height * detailsValues.yStart) / 100);
    } else if (dots === 'BottomLeft') {
      x = Math.floor((width * detailsValues.xStart) / 100);
      y = Math.floor(height - (height * detailsValues.yEnd) / 100);
    } else if (dots === 'BottomRight') {
      x = Math.floor(width - (width * detailsValues.xEnd) / 100);
      y = Math.floor(height - (height * detailsValues.yEnd) / 100);
    }
    setDefaultGlassPosition({ x, y });
    setPos({ x: defaultGlassPosition.x, y: defaultGlassPosition.y });
  }, [scaleNumber, detailsValues, defaultGlassPosition]);
  // 点击放大镜区域外的处理逻辑
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (magnifierRef.current && !magnifierRef.current.contains(e.target)) {
        setIsOutside(true);
        // 点击放大镜区域外，详图数据不会改变
      } else {
        setIsOutside(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 清除事件监听器
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOutside]);

  // 鼠标按下的监听事件
  const onMouseDown = (e) => {
    if (ratioNumber === 1) {
      return;
    }
    if (!isOutside) {
      e.stopPropagation();
      e.preventDefault();
      setDragging(true);
      setRel({ x: e.pageX - pos.x, y: e.pageY - pos.y });
    }
  };

  // 拖动结束后的监听事件
  const onMouseUp = (e) => {
    if (!isOutside) {
      e.stopPropagation();
      e.preventDefault();
      setDragging(false);
      let x = 0;
      let y = 0;
      if (e.pageX - rel.x < 0) {
        x = 0;
      } else if (e.pageX - rel.x > width - glassWidth) {
        x = width - glassWidth;
      } else {
        x = e.pageX - rel.x;
      }
      if (e.pageY - rel.y < 0) {
        y = 0;
      } else if (e.pageY - rel.y > height - glassHeight) {
        y = height - glassHeight;
      } else {
        y = e.pageY - rel.y;
      }
      const getDetailsValues = () => {
        let newDetailsValues;
        if (dots === 'TopLeft') {
          newDetailsValues = {
            xStart: Math.round((x / width) * 100),
            xEnd: Math.round(((x + glassWidth) / width) * 100),
            yStart: Math.round((y / height) * 100),
            yEnd: Math.round(((y + glassHeight) / height) * 100),
          };
        } else if (dots === 'TopRight') {
          newDetailsValues = {
            xEnd: 100 - Math.round((x / width) * 100),
            xStart: 100 - Math.round(((x + glassWidth) / width) * 100),
            yStart: Math.round((y / height) * 100),
            yEnd: Math.round(((y + glassHeight) / height) * 100),
          };
        } else if (dots === 'BottomLeft') {
          newDetailsValues = {
            xStart: Math.round((x / width) * 100),
            xEnd: Math.round(((x + glassWidth) / width) * 100),
            yStart: 100 - Math.round(((y + glassHeight) / height) * 100),
            yEnd: 100 - Math.round((y / height) * 100),
          };
        } else if (dots === 'BottomRight') {
          newDetailsValues = {
            xEnd: 100 - Math.round((x / width) * 100),
            xStart: 100 - Math.round(((x + glassWidth) / width) * 100),
            yEnd: 100 - Math.round((y / height) * 100),
            yStart: 100 - Math.round(((y + glassHeight) / height) * 100),
          };
        }
        return newDetailsValues;
      };
      setDetailsValues(getDetailsValues());
    }
  };
  // 鼠标拖动时的监听事件
  const onMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!dragging) return;

    setPos(() => {
      let x = 0;
      let y = 0;
      if (e.pageX - rel.x < 0) {
        x = 0;
      } else if (e.pageX - rel.x > width - glassWidth) {
        x = width - glassWidth;
      } else {
        x = e.pageX - rel.x;
      }
      if (e.pageY - rel.y < 0) {
        y = 0;
      } else if (e.pageY - rel.y > height - glassHeight) {
        y = height - glassHeight;
      } else {
        y = e.pageY - rel.y;
      }
      return { x, y };
    });
  };
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, isOutside]);
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
      ref={magnifierRef}
      onMouseDown={onMouseDown}
    />
  );
};

export default MagnifyingGlass;
