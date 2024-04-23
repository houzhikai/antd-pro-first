import React from 'react';
import LeftRightStructure from './blocks/LeftRightStructure';
import { Divider } from 'antd';
import UpDownStructure from './blocks/UpDownStructure';
import Resizable from './blocks/Resizable';

const GraggablePage = () => {
  return (
    <div>
      <Divider plain>resizable 拖动</Divider>
      <Resizable />
      <Divider plain>左右结构</Divider>
      <LeftRightStructure />
      <Divider plain>上下结构</Divider>
      <UpDownStructure />
    </div>
  );
};

export default GraggablePage;
