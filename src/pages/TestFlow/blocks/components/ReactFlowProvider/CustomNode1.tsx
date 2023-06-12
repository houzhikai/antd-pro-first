import React from 'react';
import './indx.less';
import { onDragStart } from '@/components/onDragStart';

const CustomNode1 = () => {
  return (
    <div
      className="custom-wrapper"
      onDragStart={(event) => onDragStart(event, 'custom')}
      draggable
    >
      <div className="custom-border">
        <div className="dot-top" />
        <div className="dot-buttom" />
        <div className="dot-right" />
        <div className="custom-text">custom node</div>
      </div>
    </div>
  );
};

export default CustomNode1;
