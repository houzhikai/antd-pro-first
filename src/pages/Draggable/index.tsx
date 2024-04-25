import React from 'react';
import { Divider } from 'antd';
// import LeftRightStructure from './blocks/LeftRightStructure';
// import UpDownStructure from './blocks/UpDownStructure';
// import Resizable from './blocks/Resizable';
import DragDrop from './blocks/DragDrop';

const GraggablePage = () => {
  return (
    <div>
      <Divider plain>拖拽</Divider>
      <DragDrop />
      {/* <Divider plain>resizable 拖动</Divider>
      <Resizable />
      <Divider plain>左右结构</Divider>
      <LeftRightStructure />
      <Divider plain>上下结构</Divider>
      <UpDownStructure /> */}
    </div>
  );
};

export default GraggablePage;
