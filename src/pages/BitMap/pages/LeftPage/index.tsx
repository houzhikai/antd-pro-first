import React from 'react';
import TreePage from './TreePage';
import StackPage from './StackPage';
import '../../index.css';

const LeftPage = () => {
  // 暂被隐藏，使用wafermap页面替代
  return (
    <div className="bit-map-left-page">
      <TreePage />
      <StackPage />
    </div>
  );
};

export default LeftPage;
