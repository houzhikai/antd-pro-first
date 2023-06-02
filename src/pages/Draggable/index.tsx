import React from 'react';
import LeftRightStructure from './blocks/LeftRightStructure';
import { Divider } from 'antd';
import UpDownStructure from './blocks/UpDownStructure';

const GraggablePage = () => {
  return (
    <div>
      <Divider plain>左右结构</Divider>
      <LeftRightStructure />
      <Divider plain>上下结构</Divider>
      <UpDownStructure />
    </div>
  );
};

export default GraggablePage;
