import React from 'react';
import LeftRightStructure from './blocks/LeftRightStructure';
import { Divider } from 'antd';

const GraggablePage = () => {
  return (
    <div>
      <Divider plain>左右结构</Divider>
      <LeftRightStructure />
    </div>
  );
};

export default GraggablePage;
